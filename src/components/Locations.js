import React from 'react'

import suncloud from '../resources/sun-cloud.svg'
import city from '../resources/city.svg'


const Locations = () => {
    return (
        <div className="absolute right-0 bottom-0 col-span-3 px-10 w-1/3 z-40">
            <div className="shadow-xl rounded-2xl overflow-hidden my-4 bg-white">
                <div className="grid grid-cols-4">
                    <div className="col-span-1 bg-locations flex justify-center items-center rounded-2xl">
                        <img className="w-10" src={suncloud} alt="sun-cloud" />
                    </div>
                    <div className="flex justify-center items-start py-7 px-10">
                        <p className="text-4xl font-serif">29</p>
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
                <div className="grid grid-cols-3 text-center text-gray-400 px-5 py-3">
                    <div>
                        <p>Humedad</p>
                    </div>
                    <div>
                        <p>West</p>
                    </div>
                    <div>
                        <p>8.3km/h</p>
                    </div>
                </div>

            </div>



            <div className="shadow-xl rounded-2xl overflow-hidden my-4 bg-white">
                <div className="grid grid-cols-4">
                    <div className="col-span-1 bg-locations flex justify-center items-center rounded-2xl">
                        <img className="w-10" src={suncloud} alt="sun-cloud" />
                    </div>
                    <div className="flex justify-center items-start py-7 px-10">
                        <p className="text-4xl font-serif">29</p>
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
                <div className="grid grid-cols-3 text-center text-gray-400 px-5 py-3">
                    <div>
                        <p>Humedad</p>
                    </div>
                    <div>
                        <p>West</p>
                    </div>
                    <div>
                        <p>8.3km/h</p>
                    </div>
                </div>

            </div>

            <div className="shadow-xl border-dashed border-purple-100 border-4 min-h-25 flex items-center justify-start flex-col rounded-3xl relative">
                <div className="bg-purple-100 rounded-full flex justify-center items-center py-3 px-7 mt-10">
                    <button className="text-primary text-lg font-medium">Add Locations</button>
                </div>

                <div className="absolute bottom-0 flex justify-center items-center">
                    <img className="w-2/3" src={city} alt="city" srcset="" />
                </div>
            </div>
        </div>
    )
}

export default Locations
