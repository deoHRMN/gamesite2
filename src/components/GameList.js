import React, { useState } from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';

const GameList = ({ onGameClick }) => {
  // Game Data (this could be fetched from an API in real-world scenarios)
  const games = [
    { title: "Game 1", price: "$19.99", description: "An exciting action-adventure game.", rating: 4.5, releaseDate: "2023-01-01", categories: ["Action", "Adventure"], image: "https://deohrmn.github.io/gamesite1/images/game1.jpg" },
    { title: "Game 2", price: "$29.99", description: "A vast open-world RPG.", rating: 4.2, releaseDate: "2023-02-10", categories: ["RPG", "Adventure"], image: "https://deohrmn.github.io/gamesite1/images/game2.jpg" },
    { title: "Game 3", price: "$9.99", description: "A casual puzzle game with hundreds of levels.", rating: 3.8, releaseDate: "2023-03-15", categories: ["Puzzle", "Casual"], image: "https://deohrmn.github.io/gamesite1/images/game3.jpg" },
    { title: "Game 4", price: "$49.99", description: "A competitive online shooter with multiple modes.", rating: 4.7, releaseDate: "2023-04-20", categories: ["Shooter", "Action"], image: "https://deohrmn.github.io/gamesite1/images/game4.jpg" },
    { title: "Game 5", price: "$14.99", description: "A survival game set on an alien planet.", rating: 4.3, releaseDate: "2023-05-05", categories: ["Survival", "Action"], image: "https://deohrmn.github.io/gamesite1/images/game5.jpg" },
    { title: "Game 6", price: "$39.99", description: "An immersive simulation game where you can build and manage cities.", rating: 4.6, releaseDate: "2023-06-18", categories: ["Simulation", "Strategy"], image: "https://deohrmn.github.io/gamesite1/images/game6.jpg" },
    { title: "Game 7", price: "$24.99", description: "A fast-paced racing game with realistic mechanics.", rating: 4.1, releaseDate: "2023-07-10", categories: ["Racing", "Sports"], image: "https://deohrmn.github.io/gamesite1/images/game7.jpg" },
    { title: "Game 8", price: "$59.99", description: "A strategy game that tests your tactical thinking.", rating: 4.8, releaseDate: "2023-08-01", categories: ["Strategy", "Tactical"], image: "https://deohrmn.github.io/gamesite1/images/game8.jpg" },
    { title: "Game 9", price: "$19.99", description: "A charming platformer with a nostalgic style.", rating: 4.2, releaseDate: "2023-09-01", categories: ["Platformer", "Indie"], image: "https://deohrmn.github.io/gamesite1/images/game9.jpg" },
    { title: "Game 10", price: "$44.99", description: "A thrilling horror game where survival is key.", rating: 4.9, releaseDate: "2023-10-10", categories: ["Horror", "Survival"], image: "https://deohrmn.github.io/gamesite1/images/game10.jpg" },
    { title: "Game 11", price: "$34.99", description: "An open-world adventure game with endless possibilities.", rating: 4.4, releaseDate: "2023-11-20", categories: ["Adventure", "Open World"], image: "https://deohrmn.github.io/gamesite1/images/game11.jpg" },
    { title: "Game 12", price: "$49.99", description: "A multiplayer battle royale that tests your survival skills.", rating: 4.5, releaseDate: "2023-12-05", categories: ["Battle Royale", "Shooter"], image: "https://deohrmn.github.io/gamesite1/images/game12.jpg" },
    { title: "Game 13", price: "$29.99", description: "A sci-fi RPG set in a futuristic universe.", rating: 4.0, releaseDate: "2023-11-25", categories: ["RPG", "Sci-Fi"], image: "https://deohrmn.github.io/gamesite1/images/game13.jpg" },
    { title: "Game 14", price: "$19.99", description: "A cozy life simulation game where you can build your dream town.", rating: 4.6, releaseDate: "2023-12-15", categories: ["Simulation", "Life"], image: "https://deohrmn.github.io/gamesite1/images/game14.jpg" },
    { title: "Game 15", price: "$39.99", description: "A tactical game with turn-based combat.", rating: 4.3, releaseDate: "2023-12-30", categories: ["Tactical", "Strategy"], image: "https://deohrmn.github.io/gamesite1/images/game15.jpg" },
    { title: "Game 16", price: "$54.99", description: "An epic medieval strategy game with massive battles.", rating: 4.8, releaseDate: "2023-11-10", categories: ["Strategy", "Medieval"], image: "https://deohrmn.github.io/gamesite1/images/game16.jpg" },
    { title: "Game 17", price: "$24.99", description: "A quirky indie game with a unique art style.", rating: 3.9, releaseDate: "2023-10-25", categories: ["Indie", "Adventure"], image: "https://deohrmn.github.io/gamesite1/images/game17.jpg" },
    { title: "Game 18", price: "$12.99", description: "A puzzle-platformer that challenges your problem-solving skills.", rating: 4.2, releaseDate: "2023-09-05", categories: ["Puzzle", "Platformer"], image: "https://deohrmn.github.io/gamesite1/images/game18.jpg" },
    { title: "Game 19", price: "$29.99", description: "A stealth game where patience and precision are key.", rating: 4.5, releaseDate: "2023-10-15", categories: ["Stealth", "Action"], image: "https://deohrmn.github.io/gamesite1/images/game1.jpg" },
    { title: "Game 20", price: "$39.99", description: "An exploration game with beautiful environments to discover.", rating: 4.7, releaseDate: "2023-11-20", categories: ["Exploration", "Adventure"], image: "https://deohrmn.github.io/gamesite1/images/game2.jpg" }
  ];

  const gamesPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(games.length / gamesPerPage);
  const displayedGames = games.slice((currentPage - 1) * gamesPerPage, currentPage * gamesPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Base Card Style
  const cardStyle = {
    display: 'flex',
    flexDirection: 'row',
    padding: '10px',
    borderRadius: '10px',
    marginBottom: '10px',
    backgroundColor: '#212529',
    width: '100%',
    height: 'auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease',
    cursor: 'pointer',
  };

  const cardHoverStyle = {
    border: '4px solid orange',
  };

  const imageStyle = {
    width: '125px',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '5px',
    marginRight: '15px',
  };

  const detailsStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  };

  const paginationStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',
  };

  const buttonStyle = {
    padding: '8px 12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    margin: '0 10px',
  };

  const buttonDisabledStyle = {
    backgroundColor: 'grey',
    color: '#000',
    cursor: 'not-allowed',
  };

  return (
    <Container style={{ padding: '40px', paddingTop: '0' }}>
      <div style={{ flexGrow: 1, overflowY: 'auto', overflowX: 'hidden' }}>
        <Row>
          {displayedGames.map((game, index) => (
            <Col key={index} xs={12}>
              <Card
                style={hoveredIndex === index ? { ...cardStyle, ...cardHoverStyle } : cardStyle}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => onGameClick(game)} // Call onGameClick when a game is clicked
              >
                <img src={game.image} alt={game.title} style={imageStyle} />
                <Card.Body style={detailsStyle}>
                  <Card.Title style={{ fontSize: '1.1rem', color: '#f5ba42' }}>{game.title}</Card.Title>
                  <Card.Text style={{ color: '#4caf50' }}>{game.price}</Card.Text>
                  <Card.Text style={{ color: '#ddd', fontSize: '0.8rem', marginBottom: '5px' }}>{game.description}</Card.Text>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#ccc' }}>
                    <span>Rating: {game.rating}</span>
                    <span>Released: {game.releaseDate}</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Pagination */}
      <div style={paginationStyle}>
        <Button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          style={currentPage === 1 ? { ...buttonStyle, ...buttonDisabledStyle } : buttonStyle}
        >
          Previous
        </Button>
        <span style={{ color: 'white' }}>{currentPage} / {totalPages}</span>
        <Button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          style={currentPage === totalPages ? { ...buttonStyle, ...buttonDisabledStyle } : buttonStyle}
        >
          Next
        </Button>
      </div>
    </Container>
  );
};

export default GameList;