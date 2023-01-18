import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import Conditions from "../components/Conditions";
import Forecasts from "../components/Forecasts";
import AdditionalDetails from "../components/AdditionalDetails";

export default function Home() {
  const [zipcode, setZipcode] = useState("10001");
  const [city, setCity] = useState("");
  const [data, setData] = useState({});
  const [showExtra, setshowExtra] = useState(false);

  useEffect(() => {
    getCurrentWeather();
    setZipcode("");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    getCurrentWeather();
    setZipcode("");
  };

  const getLatLon = async () => {
    const response = await axios.get(
      "https://api.openweathermap.org/geo/1.0/zip",
      {
        params: {
          zip: zipcode,
          appid: process.env.NEXT_PUBLIC_OPENWEATHER_KEY,
        },
      }
    );

    const lat = await response.data.lat;
    const lon = await response.data.lon;
    setCity(response.data.name);
    return { lat: lat, lon: lon };
  };

  const getCurrentWeather = async () => {
    const latLon = await getLatLon();
    const response = await axios.get(
      "https://api.openweathermap.org/data/3.0/onecall",
      {
        params: {
          appid: process.env.NEXT_PUBLIC_OPENWEATHER_KEY,
          lat: latLon.lat,
          lon: latLon.lon,
          exclude: "minutely,hourly",
          units: "imperial",
        },
      }
    );
    setData(response.data);
  };

  return (
    <div>
      <Head>
        <title>Skyward Weather</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]" />
      {/* BACKGROUND IMAGE */}
      <Image
        src="/background.webp"
        alt="sunrising above the clouds"
        fill
        className="object-cover"
      />
      {/* SEARCH BAR */}
      <div
        className="relative flex justify-between items-center max-w-[400px] w-full m-auto pt-4 h-20
       text-white z-10"
      >
        <form
          onSubmit={handleSubmit}
          className="flex justify-between items-center w-full max-h-12 m-auto p-3 bg-transparent border-white border-2 text-white rounded-2xl"
        >
          <div>
            <input
              onChange={(e) => setZipcode(e.target.value)}
              className="bg-transparent border-none text-white focus:outline-none text-2xl z-10"
              name="zipcode"
              type="text"
              placeholder="Enter Zipcode"
              value={zipcode}
            />
          </div>
        </form>
      </div>
      {/* CONDITIONS & FORECASTS */}
      {data.current && <Conditions city={city} data={data} />}
      {data.daily && <Forecasts data={data.daily.slice(1)} />}
      {/* ADDITIONAL DETAILS */}
      <button
        className="float-right m-auto relative z-10  text-white pr-14"
        onClick={() => setshowExtra(!showExtra)}
      >
        Additional Details
      </button>
      {showExtra ? <AdditionalDetails data={data.current} /> : null}
    </div>
  );
}
