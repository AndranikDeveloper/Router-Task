import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from './../thunk';


const initialState = {
    posts: [],
    matchedPosts: [],
    isLoading: false,
    error: null
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setMatchedPosts(state, action) {
            state.matchedPosts = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getAllPosts.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getAllPosts.fulfilled, (state, action) => {
            state.isLoading = false
            state.posts = action.payload
            state.error = ''
        })
        builder.addCase(getAllPosts.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
})



export const { setMatchedPosts } = postsSlice.actions

export default postsSlice.reducer