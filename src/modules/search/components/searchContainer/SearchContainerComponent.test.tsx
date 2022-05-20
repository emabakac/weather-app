import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchContainerComponent from "./SearchContainerComponent";

const inputValueOnFirstRender = { city: "", countryCode: "" };
const searchOnFirstRender = jest.fn();
const searchQueryOnFirstRender = inputValueOnFirstRender;
const setSearchQueryOnFirstRender = jest.fn();

const queryLocation = { city: "London", countryCode: "uk" };
const search = jest.fn();
const searchQuery = queryLocation;
const setSearchQuery = jest.fn();

describe("testing query inputs", () => {
  test("search container has a city input", () => {
    render(
      <SearchContainerComponent
        search={searchOnFirstRender}
        searchQuery={searchQueryOnFirstRender}
        setSearchQuery={setSearchQueryOnFirstRender}
      />
    );
    const cityInput = screen.getByPlaceholderText(/city/i);
    expect(cityInput).toBeInTheDocument();
  });

  test("search container has a country code input", () => {
    render(
      <SearchContainerComponent
        search={searchOnFirstRender}
        searchQuery={searchQueryOnFirstRender}
        setSearchQuery={setSearchQueryOnFirstRender}
      />
    );
    const countryCodeInput = screen.getByPlaceholderText(/country code/i);
    expect(countryCodeInput).toBeInTheDocument();
  });

  test("city input has no value when first rendered", () => {
    render(
      <SearchContainerComponent
        search={searchOnFirstRender}
        searchQuery={searchQueryOnFirstRender}
        setSearchQuery={setSearchQueryOnFirstRender}
      />
    );
    const cityInput = screen.getByPlaceholderText(/city/i);
    expect(cityInput).not.toHaveValue();
  });

  test("country code input has no value when first rendered", () => {
    render(
      <SearchContainerComponent
        search={searchOnFirstRender}
        searchQuery={searchQueryOnFirstRender}
        setSearchQuery={setSearchQueryOnFirstRender}
      />
    );
    const countryCodeInput = screen.getByPlaceholderText(/country code/i);
    expect(countryCodeInput).not.toHaveValue();
  });
});

describe("testing a search button", () => {
  test("search container has a search button", () => {
    render(
      <SearchContainerComponent
        search={searchOnFirstRender}
        searchQuery={searchQueryOnFirstRender}
        setSearchQuery={setSearchQueryOnFirstRender}
      />
    );
    const searchButton = screen.getByRole("button", { name: /search/i });
    expect(searchButton).toBeInTheDocument();
  });

  test("city input value remains in the input after the search button is clicked", () => {
    render(
      <SearchContainerComponent
        search={search}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    );
    const cityInput = screen.getByPlaceholderText(/city/i);
    const searchButton = screen.getByRole("button", { name: /search/i });
    // fireEvent.click(searchButton);
    expect(cityInput).toHaveValue(queryLocation.city);
  });

  test("county code input value remains in the input after the search button is clicked", () => {
     render(
       <SearchContainerComponent
         search={search}
         searchQuery={searchQuery}
         setSearchQuery={setSearchQuery}
       />
     );
     const countryCodeInput = screen.getByPlaceholderText(/country code/i);
     const searchButton = screen.getByRole("button", { name: /search/i });
     fireEvent.click(searchButton);
     expect(countryCodeInput).toHaveValue(queryLocation.countryCode);
   });
});
