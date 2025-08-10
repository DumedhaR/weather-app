import { useEffect } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import { useWeather } from "../hooks/useWeather";
import { getAllWeatherData } from "../services/weatherService";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
  const { weatherData, setWeatherData } = useWeather();
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const fetchAllWeather = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: "http://localhost:8000",
            scope: "read:weather",
          },
        });
        const weatherData = await getAllWeatherData(accessToken);
        setWeatherData(weatherData);
      } catch (err) {
        console.error("Failed to load weather forecast data:", err);
      }
    };
    fetchAllWeather();
  }, [setWeatherData, getAccessTokenSilently]);

  return (
    <div className="flex flex-col gap-16">
      <div>
        <SearchBar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-10">
        {weatherData.map((city) => {
          console.log(city);
          return (
            <div className="" key={city.id}>
              <WeatherCard {...city} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
