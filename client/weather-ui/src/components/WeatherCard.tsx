import cardBgImg from "../assets/images/BgCard4x.svg";
import cloudyIcon from "../assets/icons/couldy4x.svg";
import arrowIcon from "../assets/icons/Arrow4x.svg";
import { FiX } from "react-icons/fi";

const WeatherCard = () => {
  return (
    <div className="flex flex-col h-full rounded-md overflow-hidden shadow-md relative">
      <button className="absolute top-2 right-2 p-1" aria-label="Close">
        <FiX className="w-5 h-5 text-white" />
      </button>
      <div
        className="flex bg-[#378de7] p-10 w-full gap-4  bg-no-repeat bg-bottom bg-contain"
        style={{ backgroundImage: `url(${cardBgImg})` }}
      >
        <div className="flex flex-col flex-1 justify-between">
          <div>
            <h3 className="text-[28px] font-semibold">Colombo, LK</h3>
            <p className="mt-1">9.19am, Feb 8</p>
          </div>
          <div className="flex items-center justify-center gap-2 text-[18px] font-semibold">
            <img
              src={cloudyIcon}
              alt="Cloudy"
              className="w-9 h-9 object-contain"
            />
            <p>Few Clouds</p>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center text-left gap-6 font-semibold">
          <p className="text-[56px]">27°c</p>
          <div>
            <p>Temp Min: 25°c</p>
            <p>Temp Max: 28°c</p>
          </div>
        </div>
      </div>
      <div className="flex bg-[#383b47] justify-between p-8 gap-5 items-center">
        <ul className="space-y-1 text-left">
          <li>
            <span className="font-semibold">Pressure:</span> 108hPa
          </li>
          <li>
            <span className="font-semibold">Humidity:</span> 78%
          </li>
          <li>
            <span className="font-semibold">Visibility:</span> 8.0km
          </li>
        </ul>
        <div className="flex flex-col items-center gap-2 border-x border-gray-500 h-full px-5">
          <img
            src={arrowIcon}
            alt="Wind Direction"
            className="w-7 h-7 object-contain"
          />
          <p>4.0m/s 120 Degree</p>
        </div>
        <ul className="space-y-1 text-right h-full">
          <li>
            <span className="font-semibold">Sunrise:</span> 6:05am
          </li>
          <li>
            <span className="font-semibold">Sunset:</span> 6:05pm
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherCard;
