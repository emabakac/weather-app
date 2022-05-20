const mockWeatherData = {
  data: {
    name: "London",
    main: {
      temp: 280.66,
      temp_min: 279.38,
      temp_max: 282.14,
      humidity: 82,
    },
    sys: {
      country: "GB",
    },
    weather: [
      {
        main: "Rain",
        icon: "10d",
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockWeatherData)
};
