import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
const Dashboard = () => {
  return (
    <div className="flex flex-col gap-16">
      <div>
        <SearchBar />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10">
        <WeatherCard />
        <WeatherCard />
      </div>
    </div>
  );
};

export default Dashboard;
