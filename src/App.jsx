import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header/Header'
import WeatherBoard from './weather/WeatherBoard'
import { WeatherProvider } from './provider'

function App() {


  return (
    <WeatherProvider>

    <div className="grid place-items-center h-screen bg-no-repeat bg-cover">

      <Header />

      <main>


        <section class="">
          <WeatherBoard />
        </section>


      </main>

    </div>
    </WeatherProvider>
  )
}

export default App
