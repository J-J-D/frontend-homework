import React, {useState} from "react";

const Conditions = (props) => {
    const data = props.data
    return(
        <div className="relative flex flex-col justify-center max-w-[600px] w-full h-[25vh] m-auto p-5 text-lg text-white text-center z-10">

            <h1 className="">The current weather in {props.city} </h1>
            <h1>{data.current.weather[0].main}</h1>

            <p className="text-4xl">{data.current.temp.toFixed(0)}&#176;</p>

            <div className="flow-root">
                <p className="float-left text-left pl-6 text-base">Today Hi {data.daily[0].temp.max.toFixed(0)}&#176;</p> 
                <p className = "float-center text-right pr-6 text-base"> Lo {data.daily[0].temp.min.toFixed(0)}&#176;</p>
            </div>
            </div>
  
    )
}


export default Conditions