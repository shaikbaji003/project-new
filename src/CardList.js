import React from 'react';
import Card  from './Card';

function CardList({posts}) {
  return (
    <div className='cardlist'>
        {posts.map((post)=>{
            return <Card post={post}/>
        })}

    </div>
  )
}

export default CardList