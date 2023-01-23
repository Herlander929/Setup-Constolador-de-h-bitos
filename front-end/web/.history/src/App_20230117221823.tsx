import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Habit from './componentes/Habit';

function App() {
 
  return (
    <div>
   <Habit completed= {3}/>
   <Habit completed= {10}/>
   <Habit completed= {30}/>
  
   </div>
  )
}

export default App
