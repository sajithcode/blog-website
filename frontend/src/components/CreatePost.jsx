import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        // Here you would send the post data to your backend API
        axios.post('http://localhost:8081/createPost', {title, content})
        .then((res)=>{
            console.log(res);
            navigate('/getPost');

        })
    }
    
  return (

    <div className='container-fluid '>
        <div className='d-flex justify-content-center py-3 bg-light'>
            <h2>Create Post</h2>
        </div>
        <div className='d-flex justify-content-center mt-5'>
        <div className='w-50 '>
         <form onSubmit={handleSubmit}>
            <label htmlFor="" className="form-label">Title</label>
            <input type="text" className="form-control" placeholder='Enter Title' onChange={e => setTitle(e.target.value)} />
            <label htmlFor="" className="form-label">Content</label>
            <textarea className='form-control' onChange={e => setContent(e.target.value)} name="" id="" rows="10"></textarea>
            <button className='btn btn-primary mt-2'>Submit</button>
            </form>
            <div></div>
        </div>
        </div>
        
    </div>
  )
}

export default CreatePost