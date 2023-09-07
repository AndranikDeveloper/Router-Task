import axios from "axios";

export const getPosts = async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts${id ? `${id}`: '' }`)
    return response.data
} 
