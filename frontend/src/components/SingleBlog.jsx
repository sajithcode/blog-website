import React from 'react'

const SingleBlog = (props) => {
  return (
    <div>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
    </div>
  )
}

export default SingleBlog