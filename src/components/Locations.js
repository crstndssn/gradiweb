import React from 'react'

import suncloud from '../resources/sun-cloud.svg'
import city from '../resources/city.svg'

import Lyon from './cities/Lyon'
import Paris from './cities/Paris'


const Locations = () => {



    return (
        <div className="xl:absolute lg:block md:block sm:block xs:block right-0 bottom-0 md:col-span-4 sm:grid-cols-4 xs:col-span-9 xl:px-10 xs:px-0 xl:w-1/3 lg:w-full md:w-full xs:w-full z-40 md:mt-0 xs:mt-10">
            
            <Lyon/>
            
            <Paris/>

            <div className="shadow-xl border-dashed border-purple-100 border-4 md:min-h-25 xs:min-h-30 flex items-center justify-start flex-col rounded-3xl relative">
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
