// import cardBgImg from "../assets/images/BgCard4x.svg";
import cloudyIcon from "../assets/icons/couldy4x.svg";
import arrowIcon from "../assets/icons/Arrow4x.svg";

const WeatherCrad = () => {
  return (
    <div className="flex flex-col h-full rounded-md overflow-hidden">
      <div className="flex bg-[#378de7] p-8 w-full justify-center gap-4">
        <div className="flex flex-col justify-center flex-1">
          <div className="flex flex-col">
            <div>Colombo, LK</div>
            <div>9.19am, Feb 8</div>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <img src={cloudyIcon} className="w-8 h-8 object-contain" />
            <div>Few Clouds</div>
          </div>
        </div>
        <div className="flex flex-col justify-center flex-1">
          <div>27 C</div>
          <div>
            <div>Temp Min: 25 C</div>
            <div>Temp Max: 28 C</div>
          </div>
        </div>
      </div>
      <div className="flex bg-[#383b47] p-8 justify-between gap-4">
        <div className="flex flex-col text-left justify-center">
          <div>Pressure: 108hPa</div>
          <div>Humidity: 78%</div>
          <div>Visibility: 8.0km</div>
        </div>
        <div className="flex flex-col text-center justify-center items-center gap-2">
          <img src={arrowIcon} className="w-8 h-8 object-contain" />
          <div>4.0m/s 120 Degree</div>
        </div>
        <div className="flex flex-col text-right justify-center">
          <div>Sunrise: 6:05am</div>
          <div>Sunset: 6:05pm</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCrad;
