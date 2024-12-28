import React from "react";

function HourlyForcastCard({ condition, time, cel, fah }) {

    return (
        
        <div className="flex flex-col items-center gap-1 rounded-xl bg-white p-4 min-w-40 ring-2 ring-blue-100">
            <span className="text-base text-slate-400 font-medium">{time.split(" ")[1]}</span>
            <div className="flex flex-col gap-1 items-center flex-1">
                <img src={condition.icon} width={45} height={45} alt="" className="" />
                <span className="text-xs text-slate-400 text-center">{condition.text}</span>
            </div>
            <strong className="text-base text-slate-500">{cel}°C</strong>
        </div>
    );
}

export default HourlyForcastCard;
