import React, { useState } from 'react';
import CardList from './components/CardList';
import Form from './components/Form';
import './App.css';

function App() {

  const [cards, setCards] = useState([]);

  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo))
  }

  return (
    <div className="App">
      <div className='heading'>
        <h1>Fetching User data from GitHub API</h1>
        <Form onSubmit={addNewCard} />
      </div>
      <CardList cards={cards} />
    </div>
  );
}

export default App;
