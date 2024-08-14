import {configureStore} from '@reduxjs/toolkit'
import scene from './features/scene'
import magasin from './features/magasin'
import player from './features/player'

export const store = configureStore({
    reducer: {
        scene,
        magasin,
        player
    }
}) 