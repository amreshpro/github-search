import { createSlice } from "@reduxjs/toolkit"


const themeModeSlice = createSlice({
    name:"mode",
    initialState:true,
    reducers:{
      changeMode:(state)=>{
        return!state
      }
    }

})

export const {changeMode} = themeModeSlice.actions 

export default themeModeSlice.reducer