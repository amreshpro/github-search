const { createSlice } = require("@reduxjs/toolkit");



const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {},
        followers:[],
        following:[]
    },
    reducers:{

updateUser:(state,action)=>{
state.user = action.payload;
console.log(state)
return state    
},

updateFollower:(state,action)=>{
    state.followers = action.payload;
    return state
},

updateFollowing:(state,action)=>{
    state.following = action.payload;
    return state
}




    }
})


export const {updateUser} = userSlice.actions

export default userSlice.reducer;