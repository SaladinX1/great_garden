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
    setTrees: (state, action) => {
        state.trees = action.payload;
    },
}
})

export default magasin.reducer
export const { setTrees } = magasin.actions