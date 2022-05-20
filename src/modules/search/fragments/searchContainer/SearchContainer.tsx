import React from "react";
import { SearchContainerComponent } from "../../../../modules";
import { Location, WeatherData } from "../../../main/fragments/App";
import { fetchWeatherData } from "../../../../api";

interface Props {
  searchQuery: Location;
  setSearchQuery: React.Dispatch<React.SetStateAction<Location>>;
  weatherData: WeatherData;
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherData>>;
  setShowFahrenheit: React.Dispatch<React.SetStateAction<boolean>>;
  setShowWeatherCard: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchContainer: React.FC<Props> = ({
  searchQuery,
  setSearchQuery,
  weatherData,
  setWeatherData,
  setShowFahrenheit,
  setShowWeatherCard,
  setIsLoading,
}) => {
  const search = (): void => {
    fetchWeatherData(
      searchQuery,
      weatherData,
      setWeatherData,
      setShowWeatherCard,
      setIsLoading
    );
    setShowFahrenheit(true);
  };

  return (
    <SearchContainerComponent
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      search={search}
    />
  );
};

export default SearchContainer;
