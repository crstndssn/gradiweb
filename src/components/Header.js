
import React from 'react'

import { LocationMarkerIcon } from '@heroicons/react/solid'

import map from '../resources/map.svg'

const Header = () => {
    return (
        <div className="relative">
            <div className="w-full rounded-3xl max-h-50 opacity-80 overflow-hidden my-10">
                <img src="https://images.pexels.com/photos/3029037/pexels-photo-3029037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Bogotá" />
            </div>

            <div className="absolute top-20 left-20 w-2/3 flex justify-center items-start flex-col">
                <div className="flex ml-12">
                    <LocationMarkerIcon className="w-10 mr-2 text-primary" />
                    <p className="text-4xl text-primary font-medium">Bogotá</p>
                </div>
                <img src={map} alt="map" className="w-64 mt-10 ml-32" />
            </div>

        </div>
    )
}

export default Header
