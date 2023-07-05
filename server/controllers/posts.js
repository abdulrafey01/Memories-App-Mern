import mongoose from 'mongoose'
import PostMessage from '../models/postMessage.js'

// Get Post
export const getPost = async (req,res)=>{
    try {
        const postMessages = await PostMessage.find()
        res.status(200).json(postMessages)
        
    } catch (error) {
        res.status(404).json({message: error.message})        
    }
}

// Create Post Api 
export const createPost = async (req,res)=>{
    const post = req.body

    const newPost = new PostMessage(post)
    try {
       await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(201).json({message: error.message})
    }
}

// Update Post
export const updatePost = async (req, res)=>{
    const {id : _id} = req.params
    const post = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('No Post With That Id')
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {new : true})

    res.json(updatedPost)
}


// Delete POst
export const deletePost = async (req,res)=>{
    const {id} = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('No Post With That Id')
    }

    await PostMessage.findByIdAndRemove(id)

    res.json({message : "Post deleted Successfully"})

}

// Increase Like Counr
export const likePost = async (req, res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('No Post With That Id')
    }

    const post = await PostMessage.findById(id)

    const updatedPost = await  PostMessage.findByIdAndUpdate(id, {likeCount: post.likeCount + 1}, {new: true})

    res.json(updatedPost)

}