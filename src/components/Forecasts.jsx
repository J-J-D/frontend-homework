import React from "react";
import Day from "./Day"
const Forecasts = ({data}) => {

    const forecastComponents = data.map((day) => (
        <Day
        key={day.dt}
        dt={day.dt}
        hi={day.temp.max.toFixed(0)}
        lo={day.temp.min.toFixed(0)}
        />
    ));
   
    return (
    <table className = "w-100 relative pl-14 grid max-w-[800px] text-white m-auto z-10">
        <thead className="">
            <tr>
                <th scope="col" className="px-6 py-2">Day</th>
                <th scope="col" className="px-6 py-2">Hi</th>
                <th scope="col" className="px-6 py-2">Lo</th>
            </tr>
        </thead>
        <tbody>
            {forecastComponents}
        </tbody>
    </table>      
    )
}

export default Forecasts