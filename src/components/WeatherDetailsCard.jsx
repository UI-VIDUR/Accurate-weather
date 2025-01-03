import React from 'react'

function WeatherDetailsCard({details, detailsTitle}) {

    return (
        <div className="p-4 bg-white rounded-xl ring-2 ring-blue-100">
            <span className="text-base text-slate-400 font-medium capitalize">{detailsTitle}</span>
            <h6 className="text-xl text-slate-500 font-semibold">{details}</h6>
        </div>
    )
}

export default WeatherDetailsCard