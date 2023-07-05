import React, { useEffect, useState } from 'react'
import { TextField, Typography, Paper, Button } from '@mui/material'
import FormStyle from './styles.js'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { createPost, updatePost } from '../../../redux/action-creators/posts.js'

import { useSelector } from 'react-redux'

export default function Form({ currentId, setCurrentId }) {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' })
  const dispatch = useDispatch()
  const post = useSelector((state) => currentId ? state.posts.find((p)=> p._id === currentId) : null)

  useEffect(()=>{
    if(post){
      setPostData(post)
    }
  }, [post])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (currentId) {
      dispatch(updatePost(currentId, postData))
      handleClear()
    } else {
      dispatch(createPost(postData))
      handleClear()
    }
  }

  const handleClear = () => {
    setCurrentId(null)
    setPostData(
      { creator: '', title: '', message: '', tags: '', selectedFile: '' }
    )
  }
  return (
    <Paper sx={FormStyle.paper}>
      <form autoComplete='off' noValidate style={FormStyle.form} onSubmit={handleSubmit}>
        <Typography variant='h6'>{currentId ? "Editing" : "Creating"} A Memory</Typography>
        <TextField name='creator' variant='outlined' label='Creator' fullWidth value={postData.creator} onChange={(e) => { setPostData({ ...postData, creator: e.target.value }) }}></TextField>
        <TextField name='title' variant='outlined' label='Title' fullWidth value={postData.title} onChange={(e) => { setPostData({ ...postData, title: e.target.value }) }}></TextField>
        <TextField name='message' variant='outlined' label='Message' fullWidth value={postData.message} onChange={(e) => { setPostData({ ...postData, message: e.target.value }) }}></TextField>
        <TextField name='tags' variant='outlined' label='Tags' fullWidth value={postData.tags} onChange={(e) => { setPostData({ ...postData, tags: e.target.value.split(',') }) }}></TextField>
        <div style={FormStyle.fileInput}> <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}></FileBase></div>
        <Button style={FormStyle.buttonSubmit} variant='contained' type='submit' size='large' color='primary' fullWidth >Submit</Button>
        <Button variant='contained' size='small' color='secondary' onClick={handleClear} fullWidth >Clear</Button>
      </form>
    </Paper>
  )
}
