import React, { useEffect, useState } from 'react'
import { Container, AppBar, Grow, Grid, Typography } from '@mui/material'
import memories from './images/memories.png'
import Posts from './components/Posts/Posts/Posts'
import Form from './components/Posts/Form/Form'
import AppStyle from './styles'
import { useDispatch } from 'react-redux'
import { getPosts } from './redux/action-creators/posts'

export default function App() {
  const [currentId, setCurrentId]  = useState(null)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPosts())
  }, [])
  
  return (
    <Container maxWidth='lg'>
      <AppBar sx={AppStyle.appBar} position='static'>
        <Typography color={'yellow'} variant='h2' align='center'>Memories</Typography>
        <img sx={AppStyle.image} src={memories} alt='memories' height='60'></img>
      </AppBar>
      <Grow in>
        <Grid container justifyContent={'space-between'} alignItems={'stretch'} spacing={4}>
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId}/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Grow>
    </Container>
  )
}
