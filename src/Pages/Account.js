import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';

const AccountPage = () => {
  const [section, setSection] = useState('account');
  const [achievements] = useState([
    { image: 'https://via.placeholder.com/50x50/0000FF?text=Game1', title: 'Game 1', details: 'Master Strategist - Completed all strategy challenges.' },
    { image: 'https://via.placeholder.com/50x50/FF0000?text=Game2', title: 'Game 2', details: 'Speed Racer - Finished the race in record time.' },
    { image: 'https://via.placeholder.com/50x50/00FF00?text=Game3', title: 'Game 3', details: 'Stealth Master - Completed all stealth missions without detection.' },
    { image: 'https://via.placeholder.com/50x50/FF9900?text=Game4', title: 'Game 4', details: 'Explorer - Discovered all hidden areas.' },
    { image: 'https://via.placeholder.com/50x50/9966CC?text=Game5', title: 'Game 5', details: 'Survivalist - Survived 100 days in survival mode.' },
    { image: 'https://via.placeholder.com/50x50/CC0033?text=Game6', title: 'Game 6', details: 'Sharpshooter - Completed all shooting challenges.' },    
    { image: 'https://via.placeholder.com/50x50/FF9900?text=Game4', title: 'Game 4', details: 'Explorer - Discovered all hidden areas.' },
    { image: 'https://via.placeholder.com/50x50/9966CC?text=Game5', title: 'Game 5', details: 'Survivalist - Survived 100 days in survival mode.' },
    { image: 'https://via.placeholder.com/50x50/CC0033?text=Game6', title: 'Game 6', details: 'Sharpshooter - Completed all shooting challenges.' },
  ]);
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'New forum post reply on "Game Tactics" thread', unread: true },
    { id: 2, text: 'New like on your comment: "Epic game update!"', unread: true },
    { id: 3, text: 'Achievement unlocked: "Ultimate Collector"', unread: true },
  ]);
  const [friends] = useState([
    { id: 1, name: 'Akashdeep Dhillon', status: 'online' },
    { id: 2, name: 'Junyi Yu', status: 'offline' },
    { id: 3, name: 'Jashanpreet Deo', status: 'online' }
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [formChanged, setFormChanged] = useState(false);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(achievements.length / itemsPerPage);

  const handleSectionChange = (sectionName) => setSection(sectionName);

  const handleInputChange = () => setFormChanged(true);

  const handleNotificationClick = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const renderSectionContent = () => {
    switch (section) {
      case 'account':
        return (
          <Form onChange={handleInputChange}>
            <h2 style={{ color: '#fff' }}>Account Information</h2>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" defaultValue="Harmanpreet Deo" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" defaultValue="harmanpreet.deo@example.com" />
            </Form.Group>
            <Button
              className="mt-3"
              variant="success"
              disabled={!formChanged}
              style={{
                backgroundColor: formChanged ? '#28C76F' : '#555555',
                cursor: formChanged ? 'pointer' : 'not-allowed',
              }}
            >
              Save Changes
            </Button>
          </Form>
        );
      case 'payment':
        return (
          <Form onChange={handleInputChange}>
            <h2 style={{ color: '#fff' }}>Payment Methods</h2>
            <Form.Group>
              <Form.Label>Card Number</Form.Label>
              <Form.Control type="text" defaultValue="**** **** **** 1234" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Expiration Date</Form.Label>
              <Form.Control type="text" defaultValue="12/25" />
            </Form.Group>
            <Button
              className="mt-3"
              variant="success"
              disabled={!formChanged}
              style={{
                backgroundColor: formChanged ? '#28C76F' : '#555555',
                cursor: formChanged ? 'pointer' : 'not-allowed',
              }}
            >
              Update Payment
            </Button>
          </Form>
        );
      case 'avatar':
        return (
          <Form onChange={handleInputChange}>
            <h2 style={{ color: '#fff' }}>Avatar Settings</h2>
            <Form.Group>
              <Form.Label>Choose Avatar</Form.Label>
              <Form.Control as="select">
                <option value="warrior">Warrior</option>
                <option value="wizard">Wizard</option>
                <option value="archer">Archer</option>
              </Form.Control>
            </Form.Group>
            <Button
              className="mt-3"
              variant="success"
              disabled={!formChanged}
              style={{
                backgroundColor: formChanged ? '#28C76F' : '#555555',
                cursor: formChanged ? 'pointer' : 'not-allowed',
              }}
            >
              Update Avatar
            </Button>
          </Form>
        );
      default:
        return <p style={{ color: '#fff' }}>Select a section to view its contents.</p>;
    }
  };

  const renderAchievements = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentAchievements = achievements.slice(startIndex, startIndex + itemsPerPage);

    return currentAchievements.map((achievement, index) => (
      <div key={index} className="d-flex align-items-center mb-3" style={{ backgroundColor: '#333', padding: '10px', borderRadius: '8px', border: '1px solid #555' }}>
        <img src={achievement.image} alt={achievement.title} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
        <div>
          <h4 style={{ color: '#fff', margin: '0' }}>{achievement.title}</h4>
          <p style={{ color: '#ccc', margin: '0' }}>{achievement.details}</p>
        </div>
      </div>
    ));
  };

  // Custom pagination style for buttons
  const customPaginationButtonStyle = {
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '5px',
    margin: '0 5px',
    cursor: 'pointer',
  };

  const customPaginationActiveButtonStyle = {
    backgroundColor: '#FF9F43',
    color: '#fff',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '5px',
    margin: '0 5px',
    cursor: 'pointer',
  };

  return (
    <Container fluid style={{ backgroundColor: '#1f1f1f', color: '#f0f0f0', padding: '20px' }}>
      <Row className="h-100">
        {/* Column 1: Account Settings */}
        <Col md={6} className="d-flex flex-column mb-4" style={{ gap: '20px' }}>
          <Card className="flex-grow-1 p-4" style={{ backgroundColor: '#333', border: '2px solid #555', borderRadius: '10px', color: '#fff' }}>
            <Row>
              <Col md={4} style={{marginBottom:'20px'}}>
                <div className="d-flex flex-column">
                  <Button variant="dark" onClick={() => handleSectionChange('account')} className="mb-2">Account</Button>
                  <Button variant="dark" onClick={() => handleSectionChange('payment')} className="mb-2">Payment</Button>
                  <Button variant="dark" onClick={() => handleSectionChange('avatar')}>Avatar</Button>
                </div>
              </Col>
              <Col md={8}>
                {renderSectionContent()}
              </Col>
            </Row>
          </Card>

          {/* Achievements */}
          <Card className="flex-grow-1 p-4" style={{ backgroundColor: '#2c2c2c', borderRadius: '10px', color: '#fff' }}>
            <h3>Achievement Window</h3>
            {renderAchievements()}
            <div className="d-flex justify-content-center mt-3">
              <Button
                style={customPaginationButtonStyle}
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              {[...Array(totalPages).keys()].map((page) => (
                <Button
                  key={page + 1}
                  style={currentPage === page + 1 ? customPaginationActiveButtonStyle : customPaginationButtonStyle}
                  onClick={() => setCurrentPage(page + 1)}
                >
                  {page + 1}
                </Button>
              ))}
              <Button
                style={customPaginationButtonStyle}
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          </Card>
        </Col>

        {/* Column 2: Notifications */}
        <Col md={3} className="d-flex flex-column mb-4">
          <Card className="p-4 flex-grow-1" style={{ backgroundColor: '#333', borderRadius: '10px', color: '#fff' }}>
            <h3>User Notifications</h3>
            {notifications.map((notification) => (
              <div key={notification.id} className="d-flex justify-content-between align-items-center mb-3" style={{ backgroundColor: '#444', padding: '10px', borderRadius: '8px' }}>
                <span>{notification.text}</span>
                <span style={{ cursor: 'pointer', color: '#00ff00' }} onClick={() => handleNotificationClick(notification.id)}>✓</span>
              </div>
            ))}
          </Card>
        </Col>

        {/* Column 3: Friends */}
        <Col md={3} className="d-flex flex-column mb-4">
          <Card className="p-4 flex-grow-1" style={{ backgroundColor: '#333', borderRadius: '10px', color: '#fff' }}>
            <h3>Friend Status</h3>
            {friends.map((friend) => (
              <div key={friend.id} className="d-flex justify-content-between mb-3">
                <span>{friend.name}</span>
                <span className={`badge ${friend.status === 'online' ? 'bg-success' : 'bg-danger'}`}>{friend.status.charAt(0).toUpperCase() + friend.status.slice(1)}</span>
              </div>
            ))}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AccountPage;
