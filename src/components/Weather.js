import React, {useEffect,useState } from 'react'

import cloudySun from '../resources/cloudy-white.svg'
import cloudy from '../resources/cloudy.svg'
import sun from '../resources/sun.svg'
import rain from '../resources/rain-weather.svg'

const Weather = () => {

    const [temp, setTemp] = useState(0);
    const [sky, setSky] = useState('')
    const [iconWeather, setIconWeather] = useState('')
    const [descriptionWeather, setDescriptionWeather] = useState('')

    new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', 'https://api.openweathermap.org/data/2.5/weather?q=Bogota&appid=e6a752303097b93902668cb50caa218d', true);
        xhr.onload = function () {
            var status = xhr.status;
            if (status === 200) {
                resolve(xhr.responseText);
                var myArr = JSON.parse(xhr.responseText);
                var mainWeather = myArr.weather[0].main
                setSky(mainWeather)
                var tempBog = parseInt(myArr.main.temp - (273.55))
                setTemp(tempBog)

                switch(sky) {
                    case 'Clouds':
                        setIconWeather(cloudySun)
                        setDescriptionWeather('Cloudy')
                    break
                    case 'Clear':
                        setIconWeather(sun)
                        setDescriptionWeather('Clear')
                    break;
                    case 'Drizzle':
                        setIconWeather(rain)
                        setDescriptionWeather('Drizzle')
                    break;
                    case 'Rain':
                        setIconWeather(rain)
                        setDescriptionWeather('Drizzle')
                    break;
                }

            } else {
                reject(status);
            }
        };
        xhr.send();
    });

    return (
        <div className="md:absolute top-12 left-0 w-full z-50 xs:fixed">
            <div className="triangle-top"></div>

            <div className="flex flex-col md:w-1/12 xs:w-3/12 bg-primary rounded-r-4xl shadow-2xl">
               
                <div className="flex justify-center items-center flex-col bg-weather rounded-r-4xl rounded-bl-2xl p-5 z-60">
                    <img className="w-12" src={iconWeather} alt="cloudy-sun" />
                    <p className="text-white text-sm">{descriptionWeather}</p>
                </div>
                <div className=" text-white px-3 py-5">
                    <div className="flex justify-center items-start">
                        <p className="md:text-5xl xs:text-4xl font-serif">{temp}</p>
                        <p>ºc</p>
                    </div>
                </div>
            </div>

            <div className="triangle-bottom"></div>

        </div>
    )
}

export default Weather
