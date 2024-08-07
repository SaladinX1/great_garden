import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isPlaying: false,
}


 export const scene = createSlice({
    name: "scene",
    initialState,
    reducers: {
        handleMusic: (state, action) => {
            state.isPlaying = !state.isPlaying
        }
    }
})



export default scene.reducer
export const {handleMusic} = scene.actions