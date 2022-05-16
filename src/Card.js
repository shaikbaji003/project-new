import React from 'react';
import './App.css';


function Card({post}) {
  return (
    <div className='card'>
        <h2>{post.title}</h2>
        <h5>{post.body}</h5>
    </div>
  )
}

export default Card