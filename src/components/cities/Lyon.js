import React, { useState } from 'react'

import rain from '../../resources/rain-weather.svg'
import sun from '../../resources/sun.svg'
import cloudy from '../../resources/cloudy.svg'
import suncloud from '../../resources/sun-cloud.svg'


const Lyon = () => {

    const [temperature, setTemperature] = useState(0);
    const [sky, setSky] = useState('')

    const [humidity, setHumidity] = useState('');
    const [windDirection, setWindDirection] = useState('')
    const [windVelocity, setWindVelocity] = useState('')

    const [iconWeather, setIconWeather] = useState('')
    const [descriptionWeather, setDescriptionWeather] = useState('')

    new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', 'https://api.openweathermap.org/data/2.5/weather?q=Lyon&appid=8443dc843b3a73264c078189a005b10f', true);
        xhr.onload = function () {
            var status = xhr.status;
            if (status === 200) {
                resolve(xhr.responseText);
                var myArr = JSON.parse(xhr.responseText);


                // TEMPERATURA
                var temperatureLyon = parseInt(myArr.main.temp - (273.55))
                setTemperature(temperatureLyon)


                // HUMEDAD
                var humidity = parseInt(myArr.main.humidity)
                setHumidity(`${humidity}%`)


                // DIRECCION VIENTO
                var WindDirection = parseInt(myArr.wind.deg)
                if (WindDirection > 310 || WindDirection < 50) {
                    setWindDirection('North')
                } else if (WindDirection > 50 || WindDirection < 130) {
                    setWindDirection('East')
                } else if (WindDirection > 130 || WindDirection < 230) {
                    setWindDirection('South')
                } else if (WindDirection > 230 || WindDirection < 310) {
                    setWindDirection('West')
                }

                // VELOCIDAD DEL VIENTO
                var WindVelocityMts = parseFloat(myArr.wind.speed)
                var WindVelocityKms = WindVelocityMts * 3.6
                setWindVelocity(WindVelocityKms.toFixed(1))
                
                
                // CHANGE ICON WEATHER
                var mainWeather = myArr.weather[0].main
                setSky(mainWeather)
                switch (sky) {
                    case 'Clouds':
                        setIconWeather(cloudy)
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
                }

            } else {
                reject(status);
            }
        };
        xhr.send();
    });

    return (
        <div className="shadow-xl rounded-2xl overflow-hidden my-4 bg-white">
            <div className="grid grid-cols-4">
                <div className="col-span-1 bg-locations flex justify-center items-center rounded-2xl">
                    <img className="w-10" src={iconWeather} alt="sun-cloud" />
                </div>
                <div className="flex justify-center items-start py-7 px-10">
                    <p className="text-4xl font-serif">{temperature}</p>
                    <p className="text-gray-400">ºc</p>
                </div>
                <div className="flex items-center">
                    <div className="h-16 w-px bg-gray-200 mr-5"></div>
                    <div className="flex justify-center items-start flex-col">
                        <h2 className="text-xl font-semibold">Lyon</h2>
                        <p className="text-sm">Francia</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-between items-center text-center text-gray-400 px-7 py-3">
                <div>
                    <p>Humidity {humidity}</p>
                </div>
                <div>
                    <p>{windDirection}</p>
                </div>
                <div>
                    <p>{windVelocity} km/h</p>
                </div>
            </div>

        </div>
    )
}

export default Lyon
