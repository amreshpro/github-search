const { createSlice } = require("@reduxjs/toolkit");



const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {},
        followers:[],
        follpwing:[]
    },
    reducers:{

updateUser:(state,action)=>{
state.user = action.payload;
return state    
}

    }
})


export const {updateUser} = userSlice.actions

export default userSlice.reducer;