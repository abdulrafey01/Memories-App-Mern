import React from 'react'
import { Card, CardActions, CardMedia, CardContent, Typography, Button } from '@mui/material'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PostStyle from './style';
import moment from 'moment'
import {useDispatch} from 'react-redux'
import {deletePost, likePost} from '../../../../redux/action-creators/posts'

export default function Post(props) {
  const { post , setCurrentId} = props
  const dispatch = useDispatch()
  return (
    <Card style={PostStyle.card}>
      <CardMedia style={PostStyle.media} image={post.selectedFile} title={post.title}></CardMedia>
      <div style={PostStyle.overlay}>
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div style={PostStyle.overlay2}>
        <Button style={{ color: 'white' }} size='small' onClick={() => {setCurrentId(post._id) }}>
          <MoreHorizIcon fontSize='default' />
        </Button>
      </div>
      <div style={PostStyle.details}>
        <Typography variant='body2' color='textSecondary'>{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
        <Typography style={PostStyle.title} variant='h5' gutterBottom>{post.title}</Typography>
      <CardContent>
        <Typography  variant='body2' color='textSecondary' gutterBottom>{post.message}</Typography>
      </CardContent>
      <CardActions style={PostStyle.cardActions}>
        <Button color='primary' size='small' onClick={()=>{dispatch(likePost(post._id))}}>
          <ThumbUpAltIcon fontSize='small' />
          &nbsp; Like &nbsp;
          {post.likeCount}
        </Button>
        <Button color='primary' size='small' onClick={()=>{dispatch(deletePost(post._id))}}>
          <DeleteIcon fontSize='small' />
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}
