export const getWeather = (
  origincountry,
  originregion,
  destinationcountry,
  destinationregion,
  departing
) => {
  return {
    rainfall: Math.floor(Math.random() * 100),
    humidity: Math.floor(Math.random() * 100),
    temperature: Math.floor(Math.random() * 30) + 10,
    wind_velocity: Math.floor(Math.random() * 100)
  };
};
