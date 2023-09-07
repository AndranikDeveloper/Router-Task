import { configureStore } from "@reduxjs/toolkit";
import responseReducer from './slices/postsSlice'


export const store = configureStore({
    reducer: {
        response: responseReducer
    }
})