import React from 'react';
import Card from '../components/Card';

const CardList = (props) => {
  return (
    <div>
    {props.cards.map(card => (
      <Card key={props.name} {...card} />
    ))}
  </div>
  )
}

export default CardList;