import { createSlice } from "@reduxjs/toolkit"



const searchSlice = createSlice({
    name: "search",
    initialState: "amreshpro",
    reducers: {
        updateSearch: (state, action) => action.payload
    }
})


export default searchSlice.reducer
export const {updateSearch} = searchSlice.actions