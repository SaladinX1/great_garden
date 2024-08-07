import { useState, useRef, useEffect } from 'react'
import unmute from '../assets/icons/volume.png'
import audio from '../assets/musics/roa-music-walk-around(chosic.com).mp3'
import mute from '../assets/icons/mute.png'
import gg from '../assets/icons/Great Garden.png'
import { handleMusic } from '../features/scene'
import { useDispatch , useSelector } from 'react-redux'


export default function Navbar() {

    const dispatch = useDispatch();
    const scene = useSelector(state => state.scene);
    
        const music = useRef()

    function handleMusicBtn() {
        if (!scene.isPlaying) {
            dispatch(handleMusic())
            music.current.play()
        } else {
            dispatch(handleMusic())
            music.current.pause()
        }
    }

  return (
    <>

        <nav className='  h-12 w-full'>
            <img src={gg} alt="great garden logo" className='w-1/4 h-10 rounded-full' />

        <button className='outline-none cursor-pointer w-1/4' onClick={handleMusicBtn}>
            <img src={scene.isPlaying ? unmute : mute} className='  object-cover h-8 w-8 rounded-full cursor-pointer border-none' alt="Icone musique" />
            <audio src={audio} ref={music} loop/>
        </button>
        </nav>



    </>
  )
}
