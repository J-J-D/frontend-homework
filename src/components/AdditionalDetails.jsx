import React from "react";

const AdditionalDetails = ({data}) => {

    const sunriseMS = data.sunrise * 1000;
    const sunriseObject = new Date(sunriseMS);
    const sunriseHour = sunriseObject.getHours();
    const sunriseMinutes = sunriseObject.getMinutes();
    const sunrise = sunriseHour + ":" + sunriseMinutes;

    const sunsetMS = data.sunset *1000;
    const sunsetObject = new Date(sunsetMS);
    const sunsetHour = sunsetObject.getHours();
    const sunsetMinutes = sunsetObject.getMinutes();
    const sunset = sunsetHour + ":" + sunsetMinutes;



return (
    <div className="text-sm float-right w-90 text-right relative grid  z-10  text-gray-300 pr-14">
          <p className="py-1"> Wind Speed {data.wind_speed} mph</p>
          <p className="py-1"> Humidity {data.humidity} %</p>
          <p className="py-1"> Pressure {data.pressure} hPa</p>
          <p className="py-1"> Sunrise {sunrise} </p>
          <p className="py-1"> Sunset {sunset}</p>
        </div>
)

}

export default AdditionalDetails