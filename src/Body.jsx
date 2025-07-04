import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
   <div className="bg-gray-900">
    <Navbar/>
    <Outlet/>
   </div>
  )
}

export default Body