import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    buildingsdata : {}
}

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setBuildingsData: (state,action) => {
            console.log("SET BUILDINGS DATA:", action)
            return {...state.buildingsdata,...action.payload}
        }
    }
})

export const { setBuildingsData } = globalSlice.actions
export default globalSlice.reducer;