import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div
      className="relative flex flex-col w-full min-h-screen bg-no-repeat bg-contain bg-fixed"
      style={{ backgroundImage: `url('/images/BgMain4x.svg')` }}
    >
      <div className="absolute inset-0 bg-black opacity-5 pointer-events-none z-10" />
      <div className="relative z-20 flex-grow">
        <div className="flex items-center justify-center gap-3 mt-18 font-semibold">
          <img
            src="/images/Logo4x.svg"
            alt="Weather App logo"
            className="w-12 h-12 object-contain"
          />
          <h1 className="text-[28px]">Weather App</h1>
        </div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
