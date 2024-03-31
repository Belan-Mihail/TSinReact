import React, { useState, useEffect } from 'react'
import PostCard from './PostCard'
import TPostProps from '../types/types'
import '../App.css';


async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }

const PostsList = () => {

  
  const [posts, setPosts] = useState([])

  useEffect( () => { 
    const fetchData = async () => {
        try {
            const res = await getData(); 
            console.log(res)
            setPosts(res);
        } catch (err) {
            console.log(err);
        }
    }
    fetchData();
}, []);





  return (
    <div>
        {/* <PostCard titel='post titel' body='posr desc' /> */}

        {posts.map((post: TPostProps) => (
            <PostCard key={post.id} {...post} />
        ))}
    </div>
  )
}

export default PostsList