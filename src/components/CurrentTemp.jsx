import React, { useEffect } from 'react'

function CurrentTemp({location, current, forecast}) {

    const today = forecast[0];
    // console.log(today);

    let {day} = today    

    return (
        <>
            <div className="flex flex-col gap-5">
                <div className="flex gap-5 items-center">
                    <h2 className="text-3xl text-slate-600 font-medium">{location.name}</h2>
                    <div className="flex items-center">
                        <img 
                            src={current.condition.icon} 
                            alt="" 
                            className="w-16 object-contain"
                        />
                        <span className='text-slate-500 font-medium text-xs'>{current.condition.text}</span>
                    </div>
                </div>
                <h1 className="text-5xl font-bold flex items-end gap-5">
                    <span className="text-slate-600">{current.temp_c}°C</span>
                    <span className="text-slate-400 text-3xl">{day.mintemp_c}°C</span>
                </h1>
            </div>
        </>
    )
}

export default CurrentTemp