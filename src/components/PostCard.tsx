import React from 'react'
import TPostProps from '../types/types'
import '../App.css';

function PostCard(props: TPostProps) {

    

  return (
    <div className='postCard'>
        <h1>{props.title}</h1>
        <p>{props.body}</p>
    </div>
  )
}

export default PostCard