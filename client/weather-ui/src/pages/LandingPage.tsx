import { WiDayCloudy } from "react-icons/wi";
const LandingPage = () => {
    return (
        <div className="w-full h-screen flex gap-1 items-center justify-center flex-col bg-gradient-to-br 
        from-blue-700 via-indigo-600 to-violet-600 text-white">
            <WiDayCloudy className="text-8xl md:text-9xl font-semibold" />
            <h2 className="text-4xl md:text-5xl font-semibold ">Welcome to</h2>
            <h1 className="text-6xl md:text-7xl font-semibold ">Weather App</h1>
            <p className="text-md md:text-lg mt-5">Check the Latest Weather Updates <br/> Anytime, Anywhere</p>
            <button className="bg-white text-md md:text-lg text-indigo-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition mt-10">
                Get Started
            </button>
        </div>
    )
}

export default LandingPage;