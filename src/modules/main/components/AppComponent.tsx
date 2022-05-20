
import { SearchContainer, WeatherCard } from "../../../modules";
import { Location, WeatherData } from "../fragments/App";
import "./AppComponent.css";

interface Props {
  weatherData: WeatherData;
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherData>>;
  searchQuery: Location;
  setSearchQuery: React.Dispatch<React.SetStateAction<Location>>;
  showFahrenheit: boolean;
  setShowFahrenheit: React.Dispatch<React.SetStateAction<boolean>>;
  showWeatherCard: boolean;
  setShowWeatherCard: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppComponent: React.FC<Props> = ({
  weatherData,
  setWeatherData,
  searchQuery,
  setSearchQuery,
  showFahrenheit,
  setShowFahrenheit,
  showWeatherCard,
  setShowWeatherCard,
  isLoading,
  setIsLoading,
}) => {
  return (
    <div className="appContainer">
      <SearchContainer
        weatherData={weatherData}
        setWeatherData={setWeatherData}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setShowFahrenheit={setShowFahrenheit}
        setShowWeatherCard={setShowWeatherCard}
        setIsLoading={setIsLoading}
      />
      <WeatherCard
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        showFahrenheit={showFahrenheit}
        setShowFahrenheit={setShowFahrenheit}
        weatherData={weatherData}
        showWeatherCard={showWeatherCard}
        setShowWeatherCard={setShowWeatherCard}
        isLoading={isLoading}
      />
    </div>
  );
};

export default AppComponent;
