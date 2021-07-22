import React from 'react'

import { LocationMarkerIcon } from '@heroicons/react/solid'
import { PlusIcon } from '@heroicons/react/solid'
import { PlusSmIcon } from '@heroicons/react/solid'

const Places = () => {

    return (
        <div className="xl:col-span-4 md:col-span-5 sm:col-span-9 xs:col-span-9 xl:ml-7 md:ml-3 xs:ml-0 md:mt-0 xs:mt-5">
            <div>
                <div className="flex justify-between items-center md:flex-row xs:flex-col md:mb-10 xs:mb-5">
                    <h1 className="text-3xl md:w-1/2 xs:w-full"><span className="font-semibold">Place to</span> Visit</h1>
                    <div className="md:w-1/2 xs:w-full flex justify-between items-start md:my-0 xs:my-3">
                        <div className="flex justify-center items-center font-medium text-gray-400 mt-2">
                            <PlusSmIcon className="w-7" />
                            <p>Top Reviews</p>
                        </div>
                        <div className="flex justify-center relative">
                            <div className="w-9 h-9 m-1 absolute top-0 right-20 overflow-hidden rounded-xl border-2 border-white z-20">
                                <img src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                            </div>
                            <div className="w-9 h-9 m-1 absolute top-0 right-14 overflow-hidden rounded-xl border-2 border-white z-30">
                                <img src="https://images.pexels.com/photos/3310695/pexels-photo-3310695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                            </div>
                            <div className="w-9 h-9 m-1 absolute top-0 right-7 overflow-hidden rounded-lg border-2 border-white z-40">
                                <img src="https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                            </div>
                            <div className="w-9 h-9 m-1 absolute top-0 right-0 overflow-hidden rounded-lg bg-secondary border-2 border-white flex justify-center items-center z-50">
                                <p className="font-medium text-white">6+</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div>

                    <div className="grid xl:grid-cols-2 xl:min-h-35 md:min-h-90 xs:min-h-90 gap-7">

                        <div className="relative rounded-4xl py-5 px-3 overflow-hidden">

                            {/* description  */}
                            <div className="flex items-start text-white">
                                <LocationMarkerIcon className="w-6 mr-2 z-10" />
                                <div className="flex flex-col z-10">
                                    <h2 className="font-medium leading-none">Arab Street</h2>
                                    <p>Singapore</p>
                                </div>
                            </div>

                            {/* imagen */}
                            <div className="absolute top-0 left-0 bg-cover">
                                <img className="z-0 opacity-80 bg-cover" src="https://images.pexels.com/photos/6016770/pexels-photo-6016770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Singapore" />
                            </div>

                        </div>

                        <div className="grid md:grid-rows-3 gap-7">


                            <div className="row-span-1 relative rounded-4xl py-5 px-3 overflow-hidden">

                                {/* description  */}
                                <div className="flex items-start text-white">
                                    <LocationMarkerIcon className="w-6 mr-2 z-10" />
                                    <div className="flex flex-col z-10">
                                        <h2 className="font-medium leading-none">Art Science</h2>
                                        <p>Museum</p>
                                    </div>
                                </div>

                                {/* imagen */}
                                <div className="absolute top-0 left-0 bg-cover">
                                    <img className="z-0 opacity-80 bg-cover" src="https://images.pexels.com/photos/3344073/pexels-photo-3344073.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Singapore" />
                                </div>

                            </div>


                            <div className="border row-span-2 flex justify-between relative rounded-l-4xl rounded-r-7xl overflow-hidden">

                                <div className="w-full flex justify-between">

                                    {/* description  */}
                                    <div className="flex items-start text-white mt-5 px-3">
                                        <LocationMarkerIcon className="w-8 mr-2 z-10" />
                                        <div className="flex flex-col z-10 mt-2">
                                            <h2 className="font-medium leading-none">Fountain of Youth</h2>
                                        </div>
                                    </div>


                                    <div className="bg-primary z-20 py-5 px-10 rounded-full flex justify-center items-center">
                                        <PlusIcon className="w-6 text-white" />
                                    </div>

                                </div>



                                <div className="absolute top-0 left-0 bg-cover">
                                    <img className="z-0 opacity-80 bg-cover" src="https://images.pexels.com/photos/2225442/pexels-photo-2225442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Singapore" />
                                </div>



                            </div>

                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Places
