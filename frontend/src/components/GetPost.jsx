import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const GetPost = () => {
    const [post, setPost] = useState([])
    useEffect(() =>{
        axios.get('http://localhost:8081/getPost')
        .then(res => setPost(res.data))
        .catch(err => console.log(err))
    },[]);

    const handleDelete = async (id) => {
        try{
            await axios.delete("http://localhost:8081/post/"+id);
            window.location.reload();

        }catch(err){
            console.log(err);
        }

    }
    
  return (

    <div className='container-fluid'>
        <div className='d-flex justify-content-center bg-light'>
            <h1 className='my-3'>Blog</h1>
        </div>
        <div className='d-flex justify-content-center mt-3'>
            <Link className='btn btn-primary mb-3 ' to='/createPost'>Add Post</Link>
        </div>
    <div className='row mx-auto justify-content-center mt-4'>
        {post.map((data, i) => (
            <div key={i} className='col-3 rounded border p-4 mx-2'>
                <h2>{data.Title}</h2>
                <p>{data.Content}</p>
                <Link to={`/updatePost/${data.ID}`} className='btn btn-primary me-2'>Update</Link>
                <button className='btn btn-danger' onClick={e => handleDelete(data.ID)}>Delete</button>
            </div>
        ))}  
    </div>
    </div>
  )
}

export default GetPost