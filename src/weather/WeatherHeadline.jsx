import React, { useContext } from 'react'
import Pin from "../assets/pin.svg"
import Cloud from "../assets/cloud.svg"
import { WeatherContext } from '../context'

const WeatherHeadline = () => {
    const {weatherData} = useContext(WeatherContext)
    const {climate, temperature,location,time} = weatherData
  return (
    <div>
    <div class="max-md:flex items-center justify-between md:-mt-10">
        {/* <img src={Cloud} alt="cloud" /> */}
        <div class="max-md:flex items-center max-md:space-x-4">
            <h1 class="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">{Math.round(temperature)}°</h1>
            <div class="flex items-center space-x-4 md:mb-4">
                <img src={Pin} />
                <h2 class="text-2xl lg:text-[50px]">{location}</h2>
            </div>
        </div>
    </div>
    <p class="text-sm lg:text-lg">{time}</p>
</div>
  )
}

export default WeatherHeadline