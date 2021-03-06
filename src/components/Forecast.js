import React, { useState } from 'react'

import rain from '../resources/rain-weather.svg'
import sun from '../resources/sun.svg'
import cloudy from '../resources/cloudy.svg'

const Forecast = () => {

    // SET NAME DAYS
    const [dayOne, setDayOne] = useState()
    const [dayTwo, setDayTwo] = useState()
    const [dayThree, setDayThree] = useState()

    // SET STATE MIN
    const [stateDayOne, setStateDayOne] = useState()
    const [stateDayTwo, setStateDayTwo] = useState()
    const [stateDayThree, setStateDayThree] = useState()

    // SET TEMPERATURE MIN
    const [maxTemperatureDayOne, setMaxTemperatureDayOne] = useState()
    const [maxTemperatureDayTwo, setMaxTemperatureDayTwo] = useState()
    const [maxTemperatureDayThree, setMaxTemperatureDayThree] = useState()

    // SET TEMPERATURA MAX
    const [minTemperatureDayOne, setMinTemperatureDayOne] = useState()
    const [minTemperatureDayTwo, setMinTemperatureDayTwo] = useState()
    const [minTemperatureDayThree, setMinTemperatureDayThree] = useState()

    // SET ICONS
    const [iconDayOne, setIconDayOne] = useState()
    const [iconDayTwo, setIconDayTwo] = useState()
    const [iconDayThree, setIconDayThree] = useState()

    new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', 'https://api.openweathermap.org/data/2.5/forecast?q=Bogota&appid=f1342724d14792644897eb71955def8c', true);
        xhr.onload = function () {
            var status = xhr.status;
            if (status === 200) {
                resolve(xhr.responseText);
                var myArr = JSON.parse(xhr.responseText);

                // SET DAYS

                var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                var timestamp = myArr.list[1].dt

                var timestampMilisecondsDay1 = (timestamp + 86400) * 1000;
                var d1 = new Date(timestampMilisecondsDay1);
                var day1 = days[d1.getDay()];
                setDayOne(day1)

                var timestampMilisecondsDay1 = (timestamp + 172800) * 1000;
                var d2 = new Date(timestampMilisecondsDay1);
                var day2 = days[d2.getDay()];
                setDayTwo(day2)

                var timestampMilisecondsDay1 = (timestamp + 259200) * 1000;
                var d3 = new Date(timestampMilisecondsDay1);
                var day3 = days[d3.getDay()];
                setDayThree(day3)


                // STATE

                // day 1
                var timestampDay1 = timestamp + 86400
                var arrayDays = myArr.list
                const result1 = arrayDays.find(day => day.dt === timestampDay1)
                var stateDay1 = result1.weather[0].main
                setStateDayOne(stateDay1)

                // day 2
                var timestampDay2 = timestamp + 172800
                var arrayDays = myArr.list
                const result2 = arrayDays.find(day => day.dt === timestampDay2)
                var stateDay2 = result2.weather[0].main
                setStateDayTwo(stateDay2)


                // day 3
                var timestampDay3 = timestamp + 259200
                var arrayDays = myArr.list
                const result3 = arrayDays.find(day => day.dt === timestampDay3)
                var stateDay3 = result3.weather[0].main
                setStateDayThree(stateDay3)



                // TEM MIN 1
                var temperatureMin1 = parseInt(result1.main.temp_min - (273.15))
                setMinTemperatureDayOne(temperatureMin1)

                // TEM MIN 2
                var temperatureMin2 = parseInt(result2.main.temp_min - (273.15))
                setMinTemperatureDayTwo(temperatureMin2)

                // TEM MIN 3
                var temperatureMin3 = parseInt(result3.main.temp_min - (273.15))
                setMinTemperatureDayThree(temperatureMin3)


                // TEM MAX 1
                var temperatureMax1 = parseInt(result1.main.temp_max - (273.15))
                setMaxTemperatureDayOne(temperatureMax1)

                // TEM MAX 2
                var temperatureMax2 = parseInt(result2.main.temp_max - (273.15))
                setMaxTemperatureDayTwo(temperatureMax2)

                // TEM MAX 3
                var temperatureMax3 = parseInt(result3.main.temp_max - (273.15))
                setMaxTemperatureDayThree(temperatureMax3)


                // CHANGE ICON WEATHER
                switch (stateDayOne) {
                    case 'Clouds':
                        setIconDayOne(cloudy)
                        break
                    case 'Clear':
                        setIconDayOne(sun)
                        break;
                    case 'Drizzle':
                        setIconDayOne(rain)
                        break;
                    case 'Rain':
                        setIconDayOne(rain)
                        break;
                }
                
                switch (stateDayTwo) {
                    case 'Clouds':
                        setIconDayTwo(cloudy)
                        break
                    case 'Clear':
                        setIconDayTwo(sun)
                        break;
                    case 'Drizzle':
                        setIconDayTwo(rain)
                        break;
                    case 'Rain':
                        setIconDayTwo(rain)
                        break;
                }
               
                switch (stateDayThree) {
                    case 'Clouds':
                        setIconDayThree(cloudy)
                        break
                    case 'Clear':
                        setIconDayThree(sun)
                        break;
                    case 'Drizzle':
                        setIconDayThree(rain)
                        break;
                    case 'Rain':
                        setIconDayThree(rain)
                        break;
                }

            } else {
                reject(status);
            }
        };
        xhr.send();
        
    });

    return (
        <div className="xl:col-span-2 lg:col-span-4 md:col-span-4 sm:col-span-9 xs:col-span-9 min-h-35">
            <div>
                <h1 className="text-3xl md:mb-10 xs:mb-5"><span className="font-semibold">3 Days</span> Forecast</h1>
            </div>

            <div className="border flex justify-between items-center shadow rounded-2xl my-3">
                <div className="flex">
                    <div className="px-5">
                        <img className="w-10" src={iconDayOne} alt="rain-icon" />
                    </div>
                    <div className="flex flex-col items-start">
                        <h2 className="text-lg font-medium text-gray-800 leading-none">{dayOne}</h2>
                        <p className="text-base text-gray-400">{stateDayOne}</p>
                    </div>
                </div>

                <div className="bg-primary text-white flex justify-center px-4 py-7 text-lg rounded-2xl ">
                    <p className="font-serif">{minTemperatureDayOne}?? / {maxTemperatureDayOne}??</p>
                </div>
            </div>

            <div className="border flex justify-between items-center shadow rounded-2xl my-3">
                <div className="flex">
                    <div className="px-5">
                        <img className="w-10" src={iconDayTwo} alt="rain-icon" />
                    </div>
                    <div className="flex flex-col items-start">
                        <h2 className="text-lg font-medium text-gray-800 leading-none">{dayTwo}</h2>
                        <p className="text-base text-gray-400">{stateDayTwo}</p>
                    </div>
                </div>

                <div className="bg-locations text-gray-800 flex justify-center px-4 py-7 text-lg rounded-2xl ">
                    <p className="font-serif">{minTemperatureDayTwo}?? / {maxTemperatureDayTwo}??</p>
                </div>
            </div>

            <div className="border flex justify-between items-center shadow rounded-2xl my-3">
                <div className="flex">
                    <div className="px-5">
                        <img className="w-10" src={iconDayThree} alt="rain-icon" />
                    </div>
                    <div className="flex flex-col items-start">
                        <h2 className="text-lg font-medium text-gray-800 leading-none">{dayThree}</h2>
                        <p className="text-base text-gray-400">{stateDayThree}</p>
                    </div>
                </div>

                <div className="bg-locations text-gray-800 flex justify-center px-4 py-7 text-lg rounded-2xl ">
                    <p className="font-serif">{minTemperatureDayThree}?? / {maxTemperatureDayThree}??</p>
                </div>
            </div>




        </div>
    )
}

export default Forecast;
