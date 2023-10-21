const { configureStore } = require("@reduxjs/toolkit");


import searchSlice from './feature/searchSlice';
import themeModeSlice from './feature/themeModeSlice';
import userSlice from './feature/userSlice'

export const store = configureStore({
    reducer: {
        user: userSlice,
        mode:themeModeSlice,
        search:searchSlice
    }
})