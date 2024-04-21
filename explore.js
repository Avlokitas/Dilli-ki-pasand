import React from 'react';
import './clothfind.css';

const Cloth = ({ searchTerm }) => {
  const clothItems = [
    { id: 1, name: 'T-shirt' },
    { id: 2, name: 'Jeans' },
    { id: 3, name: 'Sweater' },
    { id: 4, name: 'Dress' },
  ];

  const filteredClothItems = clothItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="cloth-container">
      <h2>Cloth Items</h2>
      <ul>
        {filteredClothItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

const Places = ({ searchTerm }) => {
  const placeItems = [
    { id: 1, name: 'Paris' },
    { id: 2, name: 'New York' },
    { id: 3, name: 'Tokyo' },
    { id: 4, name: 'London' },
  ];

  const filteredPlaceItems = placeItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="places-container">
      <h2>Places</h2>
      <ul>
        {filteredPlaceItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export { Cloth, Places };
