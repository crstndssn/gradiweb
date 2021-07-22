import React, { useState } from 'react'

import rain from '../resources/rain-weather.svg'
import sun from '../resources/sun.svg'
import cloudy from '../resources/cloudy.svg'

const Forecast = () => {

    const [temp, setTemp] = useState(0);
    const [sky, setSky] = useState('')
    const [iconWeather, setIconWeather] = useState('')
    const [descriptionWeather, setDescriptionWeather] = useState('')

    new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', 'https://api.openweathermap.org/data/2.5/forecast/hourly?q=Bogota&appid=8443dc843b3a73264c078189a005b10f', true);
        xhr.onload = function () {
            var status = xhr.status;
            if (status === 200) {
                resolve(xhr.responseText);
                var myArr = JSON.parse(xhr.responseText);
                var mainWeather = myArr.weather[0].main

                console.log(JSON.stringify(myArr) + ' <- forecast')

                var forecastWeather = JSON.stringify(myArr);

                console.log(JSON.parse(forecastWeather))

                setSky(mainWeather)
                var tempBog = parseInt(myArr.main.temp - (273.55))
                setTemp(tempBog)
                
                switch(sky) {
                    case 'Clouds':
                        setIconWeather(cloudy)
                        setDescriptionWeather('Cloudy')
                    break
                    case 'Clear':
                        setIconWeather(sun)
                        setDescriptionWeather('Clear')
                    break;
                }

            } else {
                reject(status);
            }
        };
        xhr.send();
    });

    return (
        <div className="md:col-span-2 sm:col-span-4 xs:col-span-9 min-h-35">
            <div>
                <h1 className="text-3xl mb-10"><span className="font-semibold">3 Days</span> Forecast</h1>
            </div>

            <div className="border flex justify-between items-center shadow rounded-2xl my-3">
                <div className="flex">
                    <div className="px-5">
                        <img className="w-10" src={rain} alt="rain-icon" />
                    </div>
                    <div className="flex flex-col items-start">
                        <h2 className="text-lg font-medium text-gray-800 leading-none">Friday</h2>
                        <p className="text-base text-gray-400">Rain</p>
                    </div>
                </div>

                <div className="bg-primary text-white flex justify-center px-4 py-7 text-lg rounded-2xl ">
                    <p className="font-serif">32º / 23º</p>
                </div>
            </div>

            <div className="border flex justify-between items-center shadow rounded-2xl my-3">
                <div className="flex">
                    <div className="px-5">
                        <img className="w-10" src={sun} alt="rain-icon" />
                    </div>
                    <div className="flex flex-col items-start">
                        <h2 className="text-lg font-medium text-gray-800 leading-none">Saturday</h2>
                        <p className="text-base text-gray-400">Clear</p>
                    </div>
                </div>

                <div className="bg-locations text-gray-800 flex justify-center px-4 py-7 text-lg rounded-2xl ">
                    <p className="font-serif">34º / 24º</p>
                </div>
            </div>

            <div className="border flex justify-between items-center shadow rounded-2xl my-3">
                <div className="flex">
                    <div className="px-5">
                        <img className="w-10" src={cloudy} alt="rain-icon" />
                    </div>
                    <div className="flex flex-col items-start">
                        <h2 className="text-lg font-medium text-gray-800 leading-none">Sunday</h2>
                        <p className="text-base text-gray-400">Cloudy</p>
                    </div>
                </div>

                <div className="bg-locations text-gray-800 flex justify-center px-4 py-7 text-lg rounded-2xl ">
                    <p className="font-serif">31º / 23º</p>
                </div>
            </div>




        </div>
    )
}

export default Forecast;
