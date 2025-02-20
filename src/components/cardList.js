import React from 'react';
import Card from './card';
import './cardList.css';

const CardList = ({ cards }) => (
  <div className="card-list">
    {cards.map((card, index) => (
      <Card key={index} {...card} />
    ))}
  </div>
);

export default CardList;