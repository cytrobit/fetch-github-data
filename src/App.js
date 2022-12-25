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
      <h2>Fetching the data from GitHub API</h2>
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
    </div>
  );
}

export default App;
