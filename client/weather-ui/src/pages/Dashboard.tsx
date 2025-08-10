import { useEffect } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import { useWeather } from "../hooks/useWeather";
import { getAllWeatherData } from "../services/weatherService";

const Dashboard = () => {
  const { weatherData, setWeatherData } = useWeather();

  useEffect(() => {
    const fetchAllWeather = async () => {
      try {
        const weatherData = await getAllWeatherData();
        setWeatherData(weatherData);
      } catch (err) {
        console.error("Failed to load weather forecast data:", err);
      }
    };
    fetchAllWeather();
  }, [setWeatherData]);

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
