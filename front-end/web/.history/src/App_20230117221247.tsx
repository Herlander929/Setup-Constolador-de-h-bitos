import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Habit from './../.history/src/componentes/Habit_20230117221203';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
   <Habit/>
   <Habit/>
   <Habit/>
   <Habit/>
   <Habit/>
   <Habit/>
   <Habit/>
   </div>
  )
}

export default App
