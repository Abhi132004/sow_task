// App.js
import React from 'react';
import CardList from './components/cardList';
import ImageSlider from './components/imageSlider';
import arabianRanches from './components/images/arabian-ranches.jpg';
import arabianRanchesII from './components/images/arabian-ranches-ii.jpg';
import downtownDubai from './components/images/downtown-dubai.jpg';
import dubaiHillsEstate from './components/images/dubai-hills-estate.jpg';
import dubaiMarina from './components/images/dubai-marina.png';
import emiratesLiving from './components/images/emirates-living.jpg';
import './App.css';

const cards = [
  {
    image: arabianRanches,
    title: 'Arabian Ranches',
    description: 'Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desertscape. The development features a number of residential communities that draw inspiration from Spanish and',
  },
  {
    image: arabianRanchesII,
    title: 'Arabian Ranches II',
    description: 'Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desertscape. The development features a number of residential communities that draw inspiration from Spanish and',
  },
  {
    image: downtownDubai,
    title: 'Downtown Dubai',
    description: 'Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desertscape. The development features a number of residential communities that draw inspiration from Spanish and',
  },
  {
    image: dubaiHillsEstate,
    title: 'Dubai Hills Estate',
    description: 'Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desertscape. The development features a number of residential communities that draw inspiration from Spanish and',
  },
  {
    image: dubaiMarina,
    title: 'Dubai Marina',
    description: 'Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desertscape. The development features a number of residential communities that draw inspiration from Spanish and',
  },
  {
    image: emiratesLiving,
    title: 'Emirates Living',
    description: 'Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desertscape. The development features a number of residential communities that draw inspiration from Spanish and',
  },
];

function App() {
  return (
    <div className="App">
      <h1 className="title">Communities We Manage</h1>
      <CardList cards={cards} />
      <h2 className="title">Our Services</h2>
      <ImageSlider cards={cards} />
    </div>
  );
}

export default App;