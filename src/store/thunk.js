import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPosts = createAsyncThunk(
    'posts/getAllPosts',
    async (params, thunkApi) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        return response.data
    }
)

