import { useState, useEffect } from "react";
import "./App.css";
import Search from "./components/Search";
import TempToggle from "./components/TempToggle";
import CurrentTemp from "./components/CurrentTemp";
import axios from "axios";
import HourlyForcastCard from "./components/HourlyForcastCard";
import WeatherDetailsCard from "./components/WeatherDetailsCard";
import DaysForecast from "./components/DaysForecast";

function App() {
  const apiKey = "77b7d13bcf3e49febe4123920242412";
  const [region, setRegion] = useState("");
  const [weather, setWeather] = useState([]);
  const [aqi, setAqi] = useState("no");
  const [loading, setLoading] = useState(true);

  let astro = {} 
  let day = {}
  let forecastDetails = {}
  let forecastDays = []
  let sunrise = '';
  let sunset = '';
  let daily_chance_of_rain = '';
  let uv = '';
  let feelslike_c = '';
  let pressure_mb = '';
  let wind_kph = '';
  let vis_km = '';

  const fetchWeather = async (region) => {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${region}&days=10&aqi=${aqi}`
      );
      setWeather(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetchWeather(`${latitude},${longitude}`);
      });
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  if(!loading){

    forecastDays = weather?.forecast?.forecastday || {}
    forecastDetails = forecastDays.map((forecast) => {
      return { astro = {}, day = {} } = forecast;
    });

    sunrise = forecastDetails?.[0].astro.sunrise
    sunset = forecastDetails?.[0].astro.sunset
    daily_chance_of_rain = `${forecastDetails?.[0].day.daily_chance_of_rain}%`
    uv = forecastDetails?.[0].day.uv
    feelslike_c = `${weather.current.feelslike_c}°`
    pressure_mb = `${weather.current.pressure_mb} mb`
    wind_kph = `${weather.current.wind_kph} km/h`
    vis_km = `${weather.current.vis_km} km`
  }

  return (
    <>
      <div className="container">
        <div className="grid gap-12 grid-cols-12">
          <header className="col-span-12">
            <nav className="flex items-center flex-wrap gap-12 bg-white py-6">
              <a
                href=""
                className="flex items-center gap-1 text-gray-900 text-lg"
              >
                <img
                  src="../src/assets/weather-logo.png"
                  alt="logo"
                  className="w-24 h-24 object-contain"
                />
                <strong className="text-lg text-slate-600">Accurate Weather</strong>
              </a>
              <Search
                region={region}
                setRegion={setRegion}
                onSearch={fetchWeather}
              />
              <TempToggle />
            </nav>
          </header>
          <main className="col-span-12 pb-12">
            {weather && (
              <>
                <div className="bg-white">
                  {loading ? (
                    "Fetching weather"
                  ) : (
                    <CurrentTemp
                      location={weather.location}
                      current={weather.current}
                      forecast={forecastDetails}
                    />
                  )}
                </div>

                
                <div className="grid grid-cols-12 gap-10 mt-12">
                  <div className="col-span-8 grid grid-cols-8 gap-10">
                    <div className="bg-blue-50 rounded-xl p-5 ring-blue-100 ring-2 shadow-md shadow-blue-50 col-span-8">
                      <h4 className="text-slate-500 font-bold text-lg mb-5 uppercase">Today's Hourly Forecast</h4>
                      {loading ? (
                        "Fetching hourly forecasts"
                      ) : (
                        <div className="flex flex-nowrap gap-4 overflow-x-auto pb-5 transparent-scroll px-1">
                          {forecastDetails &&
                            forecastDetails[0].hour.map((hour) => {
                              return (
                                <HourlyForcastCard
                                  key={hour.time}
                                  condition={hour.condition}
                                  time={hour.time}
                                  cel={hour.temp_c}
                                  fah={hour.temp_f}
                                />
                              );
                            })}
                        </div>
                      )}
                    </div>
                    <div className=" bg-blue-50 rounded-xl p-5 ring-blue-100 ring-2 shadow-md shadow-blue-50 h-full col-span-8">
                      <h4 className="text-slate-500 font-bold text-lg mb-5 uppercase">Weather details</h4>
                      {loading ? (
                        "Fetching weather details"
                      ) : (
                        <div className="grid grid-cols-4 gap-x-4 gap-y-6">
                          <WeatherDetailsCard detailsTitle={"sunrise"} details={sunrise} /> 
                          <WeatherDetailsCard detailsTitle={"sunset"} details={sunset} /> 
                          <WeatherDetailsCard detailsTitle={"chance of rain"} details={daily_chance_of_rain} /> 
                          <WeatherDetailsCard detailsTitle={"pressure"} details={pressure_mb} /> 
                          <WeatherDetailsCard detailsTitle={"wind"} details={wind_kph} /> 
                          <WeatherDetailsCard detailsTitle={"uv index"} details={uv} /> 
                          <WeatherDetailsCard detailsTitle={"feels like"} details={feelslike_c} /> 
                          <WeatherDetailsCard detailsTitle={"visibility"} details={vis_km} />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className="bg-blue-50 rounded-xl p-5 ring-blue-100 ring-2 shadow-md shadow-blue-50 h-full max-h-[614px] overflow-y-auto transparent-scroll">
                      <h4 className="text-slate-500 font-bold text-lg mb-5 uppercase">10 Days Forecast</h4>
                      {loading ? (
                        "Fetching 10 days forecast"
                      ) : (
                        <ul className='space-y-3'>
                          {
                            forecastDetails && forecastDetails.map((forecast, index) => {
                              console.log(forecast);
                              return <DaysForecast key={forecast.date} forecast={forecast} />
                            })
                          }
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </main>
        </div>
      </div>
    </>
  );
}

export default App;