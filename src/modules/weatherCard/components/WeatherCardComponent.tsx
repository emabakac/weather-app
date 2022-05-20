import React from "react";
import { FrontPageComponent, LoaderComponent } from "../../../modules";
import { Temperature } from "../fragments/WeatherCard";
import { Location, WeatherData } from "../../main/fragments/App";
import styles from "./WeatherCardComponent.module.css";

interface Props {
  weatherData: WeatherData;
  showFahrenheit: boolean;
  setShowFahrenheit: React.Dispatch<React.SetStateAction<boolean>>;
  celsius: Temperature;
  fahrenheit: Temperature;
  convertFahrenheitToCelsius: (
    temperature: number,
    minTemperature: number,
    maxTemperature: number
  ) => void;
  showWeatherCard: boolean;
  setShowWeatherCard: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  searchQuery: Location;
  setSearchQuery: React.Dispatch<React.SetStateAction<Location>>;
}

const WeatherCardComponent: React.FC<Props> = ({
  weatherData,
  showFahrenheit,
  setShowFahrenheit,
  celsius,
  fahrenheit,
  convertFahrenheitToCelsius,
  showWeatherCard,
  setShowWeatherCard,
  isLoading,
  searchQuery,
  setSearchQuery,
}) => {
  const iconURL =
    "http://openweathermap.org/img/w/" + weatherData.icon + ".png";

  return showWeatherCard === false ? (
    <FrontPageComponent />
  ) : isLoading ? (
    <LoaderComponent />
  ) : (
    <div className={styles.container} data-testid='weather-card-container'>
      <div
        className={`${styles.weatherCard} ${
          showFahrenheit === false ? styles.flip : null
        }`}
      >
        <span className={showFahrenheit ? "" : styles.content}>
          <h2 className={styles.location}>
            {weatherData.city}, {weatherData.country}
          </h2>
        </span>
        <img src={iconURL} alt="icon" />
        <span className={showFahrenheit ? "" : styles.content}>
          <p className={styles.description}>{weatherData.description}</p>
        </span>
        <span className={showFahrenheit ? "" : styles.content}>
          <p>{`Temperature: ${Math.floor(
            showFahrenheit ? fahrenheit.temperature : celsius.temperature
          )} ${showFahrenheit ? "°F" : "°C"}`}</p>
        </span>
        <div
          className={styles.min_max_temperature}
          style={{
            flexDirection: showFahrenheit === false ? "row-reverse" : "row",
          }}
        >
          <span className={showFahrenheit ? "" : styles.content}>
            <p>{`Min: ${Math.floor(
              showFahrenheit
                ? fahrenheit.minTemperature
                : celsius.minTemperature
            )} ${showFahrenheit ? "°F" : "°C"}`}</p>
          </span>
          <span className={showFahrenheit ? "" : styles.content}>
            <p>{`Max: ${Math.floor(
              showFahrenheit
                ? fahrenheit.maxTemperature
                : celsius.maxTemperature
            )} ${showFahrenheit ? "°F" : "°C"}`}</p>
          </span>
        </div>
        <span className={showFahrenheit ? "" : styles.content}>
          <p>{`Humidity: ${weatherData.humidity}%`}</p>
        </span>
        <span className={showFahrenheit ? "" : styles.content}>
          <button
            className={styles.button}
            onClick={() => {
              setShowFahrenheit(!showFahrenheit);
              convertFahrenheitToCelsius(
                fahrenheit.temperature,
                fahrenheit.minTemperature,
                fahrenheit.maxTemperature
              );
            }}
          >
            {showFahrenheit ? "Show °C" : "Show °F"}
          </button>
        </span>
      </div>
      <button
        className={styles.button}
        onClick={() => {
          setShowWeatherCard(false);
          setSearchQuery({ ...searchQuery, city: "", countryCode: "" });
        }}
      >
        Remove Card
      </button>
    </div>
  );
};

export default WeatherCardComponent;
