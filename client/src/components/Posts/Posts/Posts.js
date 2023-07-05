import React from 'react'
import Post from './Post/Post'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@mui/material'

export default function Posts({setCurrentId}) {
  const posts = useSelector((state) => state.posts)
  console.log(posts)
  return (

    // <div>POsts</div>
    !posts.length ? <CircularProgress/> : (
      <Grid container alignItems='stretch' spacing={3}>
        {
          posts.map((post) => {
            return (
              <Grid item key={post._id} xs={12} sm={6}>
                <Post post={post} setCurrentId={setCurrentId} />
              </Grid>
            )
          })
        }
      </Grid>
    )

  )

}
