import axios from 'axios'

const url = "http://localhost:5000/posts/"

// Fetch Post api
export const fetchPosts = () => {
    return axios.get(url)
}

// Create Post api
export const createPost = (newPost)=>{
    return axios.post(url, newPost)
}

// Update Post Api
export const updatePost = (id, updatedPost)=>{
    return axios.patch(`${url}/${id}`, updatedPost)
}


// Delete Post Api
export const deletPost = (id)=>{
    return axios.delete(`${url}/${id}`)
}

// Increase Like Count Api
export const likePost = (id)=>{
    return axios.patch(`${url}/${id}/likePost`)
}