import cardBgImg from "../assets/images/BgCard4x.svg";
import arrowIcon from "../assets/icons/Arrow4x.svg";
import { FiX } from "react-icons/fi";
import { type WeatherRecord } from "../types/weatherData";

const WeatherCard = (cardData: WeatherRecord) => {
  return (
    <div className="flex flex-col rounded-md overflow-hidden shadow-md relative">
      <button className="absolute top-2 right-2 p-1" aria-label="Close">
        <FiX className="w-5 h-5 text-white" />
      </button>
      <div
        className={`flex p-10 w-full gap-4  bg-no-repeat bg-bottom bg-contain`}
        style={{
          backgroundImage: `url(${cardBgImg})`,
          backgroundColor: `var(--bg-${cardData.weatherType})`,
        }}
      >
        <div className="flex flex-col flex-1 justify-between">
          <div>
            <h3 className="text-[28px] font-semibold capitalize">{`${cardData.cityName}, ${cardData.country}`}</h3>
            <p className="mt-1">{cardData.dateTime}</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <img
              src={`/icons/${cardData.weatherType}.svg`}
              alt={`${cardData.weatherDesc}`}
              className="w-9 h-9 object-contain text-[8px]"
            />
            <p className="text-[18px] capitalize font-semibold">
              {cardData.weatherDesc}
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center text-left gap-6 font-semibold">
          <p className="text-[56px]">{`${cardData.temp}°c`}</p>
          <div>
            <p>{`Temp Min: ${cardData.minTemp}°c`}</p>
            <p>{`Temp Max: ${cardData.maxTemp}°c`}</p>
          </div>
        </div>
      </div>
      <div className="flex bg-[#383b47] justify-between p-8 gap-5 items-center">
        <ul className="space-y-1 text-left">
          <li>
            <span className="font-semibold">Pressure:</span>
            {` ${cardData.pressure}hPa`}
          </li>
          <li>
            <span className="font-semibold">Humidity:</span>
            {` ${cardData.humidity}%`}
          </li>
          <li>
            <span className="font-semibold">Visibility:</span>
            {` ${cardData.visibility}km`}
          </li>
        </ul>
        <div className="flex flex-col items-center gap-2 border-x border-gray-500 h-full px-5">
          <img
            src={arrowIcon}
            alt="Wind Direction"
            className="w-7 h-7 object-contain"
          />
          <p>{`${cardData.windSpeed}m/s ${cardData.windDeg} Degree`}</p>
        </div>
        <ul className="space-y-1 text-right h-full">
          <li>
            <span className="font-semibold">Sunrise:</span>
            {` ${cardData.sunriseTime}`}
          </li>
          <li>
            <span className="font-semibold">Sunset:</span>
            {` ${cardData.sunsetTime}`}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherCard;
