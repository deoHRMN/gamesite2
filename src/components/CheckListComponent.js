import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './CheckListComponent.css';

const CheckListComponent = () => {
  const [activeFilter, setActiveFilter] = useState('price-low-high');
  const [selectedCategories, setSelectedCategories] = useState({});
  const [priceFilter, setPriceFilter] = useState('Price low to high');

  const categories = [
    'Action', 'Adventure', 'RPG', 'Racing', 'Strategy', 'Simulation',
    'Puzzle', 'Horror', 'Sports', 'Shooter', 'Open World', 'Sandbox', 
    'Casual', 'Platformer', 'Indie', 'MMORPG', 'MOBA', 'Fighting', 
    'Stealth', 'Survival', 'Battle Royale', 'Rhythm', 'Card Game', 
    'Tactical', 'Visual Novel', 'Roguelike', 'Point & Click', 
    'Hack and Slash', 'Tower Defense', 'Interactive Story', 
    'City Building', 'Turn-based Strategy', 'Party Game', 'Music', 
    'Puzzle Platformer'
  ];

  // Toggle active class on filter buttons
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  // Toggle selected state on categories
  const handleCategoryChange = (category) => {
    setSelectedCategories({
      ...selectedCategories,
      [category]: !selectedCategories[category],
    });
  };

  // Toggle price filter text
  const handlePriceFilterToggle = () => {
    setPriceFilter(priceFilter === 'Price low to high' ? 'Price high to low' : 'Price low to high');
  };

  return (
    <Container className="column-1">
      {/* Search Bar */}
      <div className="search-bar">
        <Form.Control type="text" placeholder="Search Games..." />
      </div>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <Button
          id="price-filter"
          className={activeFilter === 'price-low-high' ? 'active filter-button' : 'filter-button'}
          onClick={() => {
            handleFilterClick('price-low-high');
            handlePriceFilterToggle();
          }}
        >
          {priceFilter}
        </Button>
        <Button
          className={activeFilter === 'release-date' ? 'active filter-button' : 'filter-button'}
          onClick={() => handleFilterClick('release-date')}
        >
          Release Date
        </Button>
        <Button
          className={activeFilter === 'top-seller' ? 'active filter-button' : 'filter-button'}
          onClick={() => handleFilterClick('top-seller')}
        >
          Top Seller
        </Button>
        <Button
          className={activeFilter === 'by-rating' ? 'active filter-button' : 'filter-button'}
          onClick={() => handleFilterClick('by-rating')}
        >
          By Rating
        </Button>
      </div>

      {/* Scrollable Categories with Checkboxes */}
      <div className="category-section">
        <h3>Categories</h3>
        <div className="category-list">
          {categories.map((category) => (
            <label key={category} className={selectedCategories[category] ? 'selected' : ''}>
              <input
                type="checkbox"
                checked={!!selectedCategories[category]}
                onChange={() => handleCategoryChange(category)}
              />
              {category}
            </label>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default CheckListComponent;
