
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        // Here you would send the post data to your backend API
        axios.put(`http://localhost:8081/updatePost/${id}`, {title, content})
        .then((res)=>{
            console.log(res);
            navigate('/getPost');

        })
    }
  return (
    <div className='container-fluid '>
        <div className='d-flex justify-content-center py-3 bg-light'>
            <h2>Update Post</h2>
        </div>
        <div className='d-flex justify-content-center mt-5'>
        <div className='w-50 '>
         <form onSubmit={handleSubmit}>
            <label htmlFor="" className="form-label">New Title</label>
            <input type="text" className="form-control" placeholder='Enter Title' onChange={e => setTitle(e.target.value)} />
            <label htmlFor="" className="form-label">New Content</label>
            <textarea className='form-control' onChange={e => setContent(e.target.value)} name="" id="" rows="10"></textarea>
            <button className='btn btn-primary mt-2'>Update</button>
            </form>
            
        </div>
        </div>
        
    </div>
  )
}

export default UpdatePost