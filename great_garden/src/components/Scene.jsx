import { useState, useRef, useEffect } from 'react'
import garden from '../assets/backgrounds/Summer5.png'
import Navbar from './Navbar.jsx'
import Magasin from './Magasin.jsx'

export default function Scene() {

    

  return (
    <div>
        <img className='w-full h-full object-cover ' src={garden} alt="great garden, grand jardin" />
        <Navbar />
        <Magasin />
    </div>
  )
}
