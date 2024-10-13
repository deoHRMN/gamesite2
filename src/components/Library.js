import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Library.css'; // Custom styling if needed

const games = [
  { id: 1, name: 'Game 1', image: `https://deohrmn.github.io/gamesite1/images/game1.jpg` },
  { id: 2, name: 'Game 2', image: `https://deohrmn.github.io/gamesite1/images/game2.jpg`},
  { id: 3, name: 'Game 3', image: `https://deohrmn.github.io/gamesite1/images/game3.jpg`},
  { id: 4, name: 'Game 4', image: `https://deohrmn.github.io/gamesite1/images/game4.jpg`},
  { id: 5, name: 'Game 5', image: `https://deohrmn.github.io/gamesite1/images/game5.jpg`},
  { id: 6, name: 'Game 6', image: `https://deohrmn.github.io/gamesite1/images/game6.jpg`},
  { id: 7, name: 'Game 7', image: `https://deohrmn.github.io/gamesite1/images/game7.jpg`},
  { id: 8, name: 'Game 8', image: `https://deohrmn.github.io/gamesite1/images/game8.jpg`},
  { id: 9, name: 'Game 9', image: `https://deohrmn.github.io/gamesite1/images/game9.jpg`},
  { id: 10, name: 'Game 10', image: `https://deohrmn.github.io/gamesite1/images/game10.jpg`},
  { id: 11, name: 'Game 11', image: `https://deohrmn.github.io/gamesite1/images/game11.jpg` },
  { id: 12, name: 'Game 12', image: `https://deohrmn.github.io/gamesite1/images/game12.jpg` },
  { id: 13, name: 'Game 13', image: `https://deohrmn.github.io/gamesite1/images/game13.jpg` },
  { id: 14, name: 'Game 14', image: `https://deohrmn.github.io/gamesite1/images/game14.jpg` },
  { id: 15, name: 'Game 15', image: `https://deohrmn.github.io/gamesite1/images/game15.jpg` },
  { id: 16, name: 'Game 16', image: `https://deohrmn.github.io/gamesite1/images/game16.jpg` },
  { id: 17, name: 'Game 17', image: `https://deohrmn.github.io/gamesite1/images/game17.jpg` },
  { id: 18, name: 'Game 18', image: `https://deohrmn.github.io/gamesite1/images/game18.jpg` },
];

const Library = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 12;

  // Calculate the range of games to display
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  const totalPages = Math.ceil(games.length / gamesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <Container fluid className="game-library mt-4">
      <Row>
        {currentGames.map((game) => (
          <Col key={game.id} xs={12} sm={6} md={4} className="mb-4">
            <Card bg="dark" text="white" className="game-card">
              <Card.Img variant="top" src={game.image} alt={game.name} />
              <Card.Body>
                <Card.Title className="card-title d-flex align-items-center justify-content-center">{game.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="pagination-controls d-flex justify-content-between align-items-baseline">
        <Button
          variant="primary"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span className='text-white'> 
          Page {currentPage} of {totalPages}
        </span>
        <Button
          variant="primary"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </Container>
  );
};

export default Library;
