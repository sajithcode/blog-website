import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>BLog Page</h1>
        <Link to='/getPost'>Blog Page</Link>
        
    </div>
  )
}

export default Home