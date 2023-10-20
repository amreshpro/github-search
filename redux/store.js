const { configureStore } = require("@reduxjs/toolkit");


import themeModeSlice from './feature/themeModeSlice';
import userSlice from './feature/userSlice'

export const store = configureStore({
    reducer: {
        users: userSlice,
        mode:themeModeSlice
    }
})