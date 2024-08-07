import { useState, useRef, useEffect } from 'react'
import garden from '../assets/backgrounds/Summer5.png'


export default function Scene() {

    

  return (
    <div>
        <img className='object-cover w-full h-screen bg-contain' src={garden} alt="great garden, grand jardin" />

    </div>
  )
}
