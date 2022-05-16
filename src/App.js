import React, { useEffect, useState } from 'react'
// import logo from './logo.svg';
import './App.css';
import CardList from './CardList';

function App() {
  const[value,setvalue]=useState("");
  const[post,setpost]=useState([]);

  useEffect(()=>{
    fetch(` https://jsonplaceholder.typicode.com/posts`)
    .then(res=> res.json())
    .then(data=>{
      setpost(data)
    })

  },[])

  const searchfilter=(search)=>{
    setpost(post.filter((e)=>{
      return e['title'].toLowerCase().includes(search.toLowerCase())
    }))
  }
  return (
    <div>
      <center>
        <h1>Post Data</h1>
        <input className='search' type="text" placeholder='Search...' value={value} onChange={(e)=>{setvalue(e.target.value)}}/>&nbsp;&nbsp;
        <button className='btn' onClick={()=> searchfilter(value)}>Search</button>
        <CardList posts={post}/>

      </center>
    </div>
  )
}

export default App