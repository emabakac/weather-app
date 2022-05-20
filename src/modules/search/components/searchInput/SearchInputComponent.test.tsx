import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchInputComponent from "./SearchInputComponent";

const inputValueOnFirstRender = {
  city: "",
  countryCode: "",
};

const renderSearchInputForTheFirstTime = () => {
  render(
    <SearchInputComponent
      placeholder="city"
      name="city"
      searchQuery={inputValueOnFirstRender}
      setSearchQuery={jest.fn()}
      value=""
    />
  );
};

describe("Location inputs", () => {
  test("input is empty when page is first rendered", () => {
    renderSearchInputForTheFirstTime();
    const input = screen.getByTestId("search-input");
    expect(input).not.toHaveValue();
  });
});
