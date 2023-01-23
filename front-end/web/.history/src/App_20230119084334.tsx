import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './styles/global.css';
import LogoImage from './assets/logo.svg'
import Habit from './componentes/Habit';


function App() {

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6, flex flex-col gap-16">
        <img src={LogoImage} alt="habits"/>
      </div>

    </div>
  )
}

export default App
