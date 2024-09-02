import React, { useEffect, useState }  from 'react'
import SingleBlog from './SingleBlog'
import { Link } from 'react-router-dom'

import axios from 'axios';

const BlogPage = () => {
  const [post, setPost] = useState([])
    useEffect(() =>{
        axios.get('http://localhost:8081/getPost')
        .then(res => setPost(res.data))
        .catch(err => console.log(err))
    },[]);

  return (
    <div>
        <Link to="/createPost">Add Post</Link>
        <div>
          {post.map((data,i)=>{
            <SingleBlog key={i}
            title={data.title} 
            content={data.content} />
          })}
        
        </div>
        

        
    </div>
  )
}

export default BlogPage