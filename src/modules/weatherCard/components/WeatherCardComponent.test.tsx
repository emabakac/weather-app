import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import WeatherCardComponent from "./WeatherCardComponent";

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
const showFahrenheit = true;
const setShowFahrenheit = jest.fn();
const celsius = {
  temperature: 280.66,
  minTemperature: 279.38,
  maxTemperature: 282.14,
};
const fahrenheit = {
  temperature: 280.66,
  minTemperature: 279.38,
  maxTemperature: 282.14,
};
const convertFahrenheitToCelsius = jest.fn();
const showWeatherCard = true;
const setShowWeatherCard = jest.fn();
const isLoading = false;
const searchQuery = { city: "London", countryCode: "uk" };
const setSearchQuery = jest.fn();

const renderWeatherCard = () => {
  render(
    <WeatherCardComponent
      weatherData={mockWeatherData}
      showFahrenheit={showFahrenheit}
      setShowFahrenheit={setShowFahrenheit}
      celsius={celsius}
      fahrenheit={fahrenheit}
      convertFahrenheitToCelsius={convertFahrenheitToCelsius}
      showWeatherCard={showWeatherCard}
      setShowWeatherCard={setShowWeatherCard}
      isLoading={isLoading}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    />
  );
};

describe("testing weather card", () => {
  test("weather card showing if response containing weather data has arrived", async () => {
    renderWeatherCard();
    const weatherCard = await screen.findByTestId("weather-card-container");
    expect(weatherCard).toBeInTheDocument();
  });
});

describe("testing remove button", () => {
  test("remove button appears when a weather card is rendered", () => {
    renderWeatherCard();
    const removeButton = screen.getByRole("button", { name: /remove card/i });
    expect(removeButton).toBeInTheDocument();
  });

//     test("weather card is removed when remove button is clicked", () => {
//       renderWeatherCard();
//       const onClick = jest.fn();
//       const removeButton = screen.getByRole("button", { name: /remove card/i });
//       userEvent.click(removeButton);
//       expect(onClick).toHaveBeenCalledTimes(1);
//     });

  //   test("weather card is removed when remove button is visible", () => {
  //     renderWeatherCard();
  //     const removeButton = screen.getByRole("button", { name: /remove card/i });
  //     userEvent.click(removeButton);
  //     expect(removeButton).not.toBeVisible();
  //   });

  test("button inside a weather card shows °C when first rendered", () => {
    renderWeatherCard();
    const convertTemperatureButton = screen.getByRole("button", {
      name: /show/i,
    });
    expect(convertTemperatureButton).toHaveTextContent("Show °C");
  });

  test("button clicked once", () => {
    const handleClick = jest.fn();
    render(
      <button type="button" onClick={handleClick}>
        Click
      </button>
    );
    const button = screen.getByRole("button", { name: /click/i });
    userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("button clicked twice", () => {
    const handleClick = jest.fn();
    render(
      <button type="button" onClick={handleClick}>
        Click
      </button>
    );
    const button = screen.getByRole("button", { name: /click/i });
    userEvent.click(button);
    userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  //   test("button inside a weather card shows °F when clicked", async () => {
  //     renderWeatherCard();
  //     const convertTemperatureButton = screen.getByRole("button", {
  //       name: /show/i,
  //     });
  //     userEvent.click(convertTemperatureButton);
  //     await waitFor(() => {
  //       expect(convertTemperatureButton).toHaveTextContent("Show °F");
  //     });
  //   });
});
