
import React from 'react'

import { LocationMarkerIcon } from '@heroicons/react/solid'

import map from '../resources/map.svg'

const Header = () => {
    return (
        <div className="relative">
            <div className="w-full rounded-3xl max-h-50 opacity-80 overflow-hidden my-10">
                <img src="https://images.pexels.com/photos/3029037/pexels-photo-3029037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Bogotá" />
            </div>

            <div className="absolute md:top-20 xs:top-5 md:left-20 xs:left-0 w-2/3 flex justify-center items-start flex-col">
                <div className="flex ml-12">
                    <LocationMarkerIcon className="md:w-10 md:h-10 xs:h-6 xs:w-6  md:mr-2 xs:mr-1 text-primary" />
                    <p className="md:text-4xl xs:text-2xl text-primary font-medium">Bogotá</p>
                </div>
                <img src={map} alt="map" className="md:w-40 md:h-40 xs:w-20 xs:h-20 md:ml-32 xs:ml-10" />
            </div>

        </div>
    )
}

export default Header
