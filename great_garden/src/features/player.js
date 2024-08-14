import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    level: 0,
    xp: 0,
    capital: 10000
}


export const player = createSlice({
    name: "player",
    initialState,
    reducers: {
        level: (state, action) => {
            if(state.xp > 25000) {
                state.level = 1
            }
            else if (state.xp > 35000) {
                state.level = 2
            }
        }
    }
})

export default player.reducer
export const { level } = player.actions