import * as api from '../../api/index.js'
import {FETCH_ALL,DELETE, UPDATE, CREATE} from '../../constants/actionTypes.js'


export const getPosts = () => {
    return async (dispatch) => {
        try {

            const { data } = await api.fetchPosts()
            dispatch({ type: FETCH_ALL, payload: data })

        } catch (error) {
            console.log(error)
        }
    }
}

export const createPost = (newPost)=>{
    return async (dispatch)=>{
        try {
            const {data} = await api.createPost(newPost)
            dispatch({type: CREATE, payload: data})
        } catch (error) {
            console.log(error)
        }
    }
}


export const updatePost = (id, updatedPost)=>{
    return async (dispatch)=>{
        try {
            const {data} = await api.updatePost(id, updatedPost)
            dispatch({type: UPDATE, payload:data})
            
        } catch (error) {
            console.log(error)
        }
    }
}

export const deletePost = (id)=>{
    return async (dispatch)=>{
        try {
            await api.deletPost(id)
            dispatch({type:DELETE, payload:id})

        } catch (error) {
            console.log(error)
        }
    }
}

export const likePost = (id)=>{
    return async (dispatch) =>{
        try {
            const {data} = await api.likePost(id)
            dispatch({type:UPDATE, payload: data})

        } catch (error) {
            console.log(error)
        }
    }
}