import { useState } from "react";
import { AppComponent } from "../../../modules";

export interface Location {
  city: string;
  countryCode: string;
}

export interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  minTemperature: number;
  maxTemperature: number;
  humidity: number;
  description: string;
  icon: string;
}

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData>({
    city: "",
    country: "",
    temperature: 0,
    minTemperature: 0,
    maxTemperature: 0,
    humidity: 0,
    description: "",
    icon: "",
  });
  const [searchQuery, setSearchQuery] = useState<Location>({
    city: "",
    countryCode: "",
  });
  const [showFahrenheit, setShowFahrenheit] = useState<boolean>(true);
  const [showWeatherCard, setShowWeatherCard] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <AppComponent
      weatherData={weatherData}
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
}

export default App;
