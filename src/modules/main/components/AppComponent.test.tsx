import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import AppComponent from "./AppComponent";
import { useState } from "react";

const mockWeatherData = {
  city: "London",
  country: "GB",
  temperature: 280.66,
  minTemperature: 279.38,
  maxTemperature: 282.14,
  humidity: 82,
  description: "Rain",
  icon: "10d",
};

const mockWeatherDataOnFirstRender = {
  city: "",
  country: "",
  temperature: 0,
  minTemperature: 0,
  maxTemperature: 0,
  humidity: 0,
  description: "",
  icon: "",
};

const setWeatherData = jest.fn();
const searchQuery = { city: "", countryCode: "" };
const setSearchQuery = jest.fn();
const showFahrenheit = false;
const setShowFahrenheit = jest.fn();
const showWeatherCard = false;
const setShowWeatherCard = jest.fn();
const isLoading = false;
const setIsLoading = jest.fn();

const renderApp = () => {
  render(
    <AppComponent
      weatherData={mockWeatherDataOnFirstRender}
      setWeatherData={setWeatherData}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      showFahrenheit={showFahrenheit}
      setShowFahrenheit={setShowFahrenheit}
      showWeatherCard={showWeatherCard}
      setShowWeatherCard={setShowWeatherCard}
      isLoading={isLoading}
      setIsLoading={setIsLoading}
    />
  );
};  


describe("App", () => {
  test("a weather card should appear when location is entered and search button is clicked", () => {
    renderApp();
    const cityInput = screen.getByPlaceholderText("City");
    userEvent.type(cityInput, "Hello");
    expect(cityInput).toHaveValue("Hello");
    //   const countryCodeInput = screen.getByPlaceholderText('Country code (optional)');
    //     fireEvent.change(cityInput, { target: { value: "London" } });
    //     expect(cityInput).toHaveValue("London");
    //   const searchButton = screen.getByRole('button', { name: /search/i })

    //   fireEvent.click(searchButton);
  });

  test("delete characters within the selectedRange", () => {
    render(
      <div>
        <label htmlFor="my-input">Example:</label>
        <input id="my-input" type="text" value="This is a bad example" placeholder='enter text' />
      </div>
    );
    const input = screen.getByPlaceholderText(/enter text/i);
    userEvent.type(input, "Hello");

    expect(input).toHaveValue("Hello");
  });
});
