import SearchBar from "../components/SearchBar";
import WeatherCrad from "../components/WeatherCard";
const Dashboard = () => {
  return (
    <div className="flex flex-col gap-16">
      <div>
        <SearchBar />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10">
        <WeatherCrad />
        <WeatherCrad />
      </div>
    </div>
  );
};

export default Dashboard;
