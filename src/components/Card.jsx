import React from 'react';

const Card = (props) => {
  return (
    <div className='card'>
      <div className='imgbox'>
      <img alt="avatar" src={props.avatar_url} />
      </div>
      <div>
        <div style={{ fontWeight: 'bold' }}>{props.name}</div>
        <div className='blog'>{props.blog}</div>
      </div>
    </div>
  )
}

export default Card;