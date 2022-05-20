import axios from "axios";

const API_KEY = process.env.REACT_APP_PUBLIC_KEY;

export const fetchWeatherData = async (
  searchQuery,
  weatherData,
  setWeatherData,
  setShowWeatherCard,
  setIsLoading
) => {
  const { city, countryCode } = searchQuery;
  try {
    setIsLoading(true);
    const {
      data: {
        name,
        main: { humidity, temp, temp_max, temp_min },
        sys: { country },
        weather: [{ main, icon }],
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}${
        countryCode === "" ? "" : `,${countryCode}`
      }&appid=${API_KEY}`
    );
    setWeatherData({
      ...weatherData,
      city: name,
      country,
      temperature: temp,
      minTemperature: temp_min,
      maxTemperature: temp_max,
      humidity: humidity,
      description: main,
      icon,
    });
    setShowWeatherCard(true);
  } catch (error) {
    alert("Location not found. Please try again.");
  } finally {
    setIsLoading(false);
  }
};
