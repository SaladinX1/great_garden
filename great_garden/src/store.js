import {configureStore} from '@reduxjs/toolkit'
import scene from './features/scene'

export const store = configureStore({
    reducer: {
        scene
    }
}) 