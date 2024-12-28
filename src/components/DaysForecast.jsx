import React from 'react'

function DaysForecast({forecast}) {

    // console.log(forecast);

    let day = forecast?.day;
    let hour = forecast?.hour

    // Function to get the day name from a date
    const getDayName = (day) => {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const date = new Date(day); // Parse the date string
        return daysOfWeek[date.getDay()];  // Get the day name
    };

    let dayName = getDayName(forecast.date)

    return (
        <li className='pb-3 border-b-2 border-b-blue-100 last:border-b-0 grid grid-cols-4 items-center gap-2'>
            <span className="text-slate-400 font-medium">{dayName}</span>
            <div className="flex items-center gap-1">
                <img src={day.condition.icon} width={32} height={32} alt="" />
                <span className='text-xs text-slate-500 font-medium text-left'>{day.condition.text}</span>
            </div>
            <span className="text-base text-slate-500 font-medium text-center">{hour[0].temp_c}°C</span>
            <div className="flex items-center flex-col">
                <span className="text-base text-slate-500 font-medium text-center">{day.daily_chance_of_rain}%</span>
                <span className="text-xs text-slate-500 font-medium text-center">chances of rain</span>
            </div>
        </li>
    )
}

export default DaysForecast