import React from 'react'
import Navbar from './components/Navbar'
import './index.css'
import { Routes,Route } from 'react-router-dom';
import Workout from './components/Workout';
import Nutrition from './components/Nutrition'
import Home from './components/Home'
const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/:userId/workout' element={<Workout/>}/>
        <Route path='/:userId/nutrition' element={<Nutrition/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      
    </>
  )
}

export default App