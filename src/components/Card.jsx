import React from 'react';

const Card = (props) => {
  return (
    <div className='card'>
      <div className='imgbox'>
      <img alt="avatar" src={props.avatar_url} />
      </div>
      <div>
        <div className='username'>{props.login}</div>
        <div className='blog'>
          <a className='links' href={props.blog} target='_blank' rel='noreferrer'>
            {props.blog}
          </a>
          </div>
      </div>
    </div>
  )
}

export default Card;