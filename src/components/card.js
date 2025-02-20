import React from 'react';
import './card.css';

const Card = ({ image, title, description }) => (
  <div className="card">
    <img src={image} alt={title} className="card-image" />
    <div className="card-content">
      <p>{description}</p>
      <h3>{title}</h3>
    </div>
  </div>
);

export default Card;