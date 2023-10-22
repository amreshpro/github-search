import { createSlice } from "@reduxjs/toolkit"



const searchSlice = createSlice({
    name: "search",
    initialState: "amreshpro",
    reducers: {
        updateSearch: (state, action) =>{
         
          if(action.payload.length>0){
            state = action.payload
          }
          return state
        }
    }
})


export default searchSlice.reducer
export const {updateSearch} = searchSlice.actions