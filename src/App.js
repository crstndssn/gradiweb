import React from 'react'

import Header from './components/Header'
import Forecast from './components/Forecast'
import Places from './components/Places'
import Locations from './components/Locations'
import Weather from './components/Weather'

const App = () => {
  return (
    <div className="relative">
      <Weather />
      <div className="container mx-auto relative mb-12">
        <Header />
        <div className="grid grid-cols-9">
          <Forecast />
          <Places />
          <Locations />
        </div>
      </div>
    </div>

  )
}

export default App
