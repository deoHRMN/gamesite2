import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GameList from '../components/GameList';           // Import the GameList component
import CheckListComponent from '../components/CheckListComponent';  // Import the CheckListComponent

// Accept the onGameClick prop from App.js and pass it to GameList
const Store = ({ onGameClick }) => {
  return (
    <Container fluid style={{ padding: '20px', paddingBottom: '0', backgroundColor: 'black' }}>
      {/* Row is set to display flex for equal height of columns */}
      <Row style={{ display: 'flex', flexWrap: 'wrap', height: '100%' }}>
        {/* Left side: CheckListComponent, takes 40% of the space on medium+ screens */}
        <Col
          xs={12}
          md={4}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'stretch',  // Stretch to equal height
            height: '100%',
          }}
        >
          <CheckListComponent />
        </Col>

        {/* Right side: GameList, takes 60% of the space on medium+ screens */}
        <Col
          xs={12}
          md={8}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'stretch',  // Stretch to equal height
            height: '100%',
          }}
        >
          {/* Pass the onGameClick function down to GameList */}
          <GameList onGameClick={onGameClick} />
        </Col>
      </Row>
    </Container>
  );
};

export default Store;
