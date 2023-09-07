import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPosts } from "../api/getPosts"

export const getAllPosts = createAsyncThunk(
    'posts/getAllPosts',
    async (thunkApi) => {
        const response = await getPosts();
        return response.data
    }
)