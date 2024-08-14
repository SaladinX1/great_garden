import { useState, useRef, useEffect } from 'react'
import unmute from '../assets/icons/volume.png'
import audio from '../assets/musics/roa-music-walk-around(chosic.com).mp3'
import mute from '../assets/icons/mute.png'
import shopIcon from '../assets/icons/store.png'
import gg from '../assets/icons/Great Garden.png'
import { handleMusic } from '../features/scene'
import { useDispatch , useSelector } from 'react-redux'
import { lockShop } from '../features/magasin'


export default function Navbar() {
    
    const dispatch = useDispatch();
    const scene = useSelector(state => state.scene);
    const player = useSelector(state => state.player);
    // const shop = useSelector(state => state.magasin)

    
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

        <nav className='fixed top-0 left-0 p-4 w-full h-32 flex flex-row justify-between '>
                <div className='flex flex-row'>

                        <div>
                         <img src={gg} alt="great garden logo" className='w-28 h-20 pr-4 rounded-full bg-clip-border' />
                        </div>

                        <button className='outline-none cursor-pointer w-1/4' onClick={() => dispatch(lockShop())}>
                        <img src={shopIcon} alt="magasin logo" className='w-28 h-12 pr-4  ' />
                        </button>

                    <button className='outline-none cursor-pointer w-1/4' onClick={handleMusicBtn}>
                        <img src={scene.isPlaying ? unmute : mute} className='  object-cover h-8 w-8 rounded-full cursor-pointer border-none' alt="Icone musique" />
                        <audio src={audio} ref={music} loop/>
                    </button>

                </div>

            <div className='ml-auto flex flex-col m-5'>
                <p className='text-xl font-bold'>
                Level : {player.level}
                </p>
                <p className='text-xl font-bold'>
                Skills : {player.xp}
                </p>
                <p className='text-xl font-bold'>
                money : {player.capital}
                </p>
                <p></p>
            </div>

        </nav>



    </>
  )
}
