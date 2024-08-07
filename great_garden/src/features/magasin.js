import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trees : [],
    isLock : false,
    capital : 50000
}

export const magasin = createSlice({
name: "magasin",
initialState,
reducers: {
    getTrees: (state, payload) => {
        return state.trees
    },
    

}
})

export default magasin.reducer
export const { getTrees } = magasin.actions