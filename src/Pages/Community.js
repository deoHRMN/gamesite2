import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ForumComponent = () => {
  const initialForums = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `Forum ${i + 1}`,
    description: `This is a short description of Forum ${i + 1}.`,
    category: `Category ${Math.ceil(Math.random() * 5)}`,
    subscribed: i < 8,
  }));

  const itemsPerPage = 16;
  const subscribedItemsPerPage = 8;
  const [forums, setForums] = useState(initialForums);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSubscribedPage, setCurrentSubscribedPage] = useState(1);
  const [selectedForumId, setSelectedForumId] = useState(null);

  const paginatedForums = forums.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const paginatedSubscribedForums = forums.filter(f => f.subscribed).slice((currentSubscribedPage - 1) * subscribedItemsPerPage, currentSubscribedPage * subscribedItemsPerPage);

  const totalPages = Math.ceil(forums.length / itemsPerPage);
  const totalSubscribedPages = Math.ceil(forums.filter(f => f.subscribed).length / subscribedItemsPerPage);

  const handleForumClick = (forumId) => {
    setSelectedForumId(forumId);
  };

  const toggleSubscription = (forumId) => {
    setForums(forums.map(f => f.id === forumId ? { ...f, subscribed: !f.subscribed } : f));
  };

  const renderSubscribeButtonText = () => {
    if (selectedForumId === null) return "Subscribe";
    const selectedForum = forums.find(f => f.id === selectedForumId);
    return selectedForum.subscribed ? "Leave" : "Subscribe";
  };

  // Inline styles
  const styles = {
    container: {
      padding: '40px',
      minHeight: 'calc(100vh - 185px)',
      backgroundColor: '#212121',
      color: '#fff',
    },
    card: {
      backgroundColor: '#303030',
      color: '#fff',
      borderRadius: '10px',
      cursor: 'pointer',
      transition: 'box-shadow 0.3s ease',
      border: '2px solid transparent',
    },
    cardHoverOrSelected: {
      border: '2px solid orange',
    },
    subscribedItem: {
      display: 'flex',
      alignItems: 'center', // Vertically aligns the name and cross
      justifyContent: 'space-between', // Places the name and cross side by side
      padding: '10px',
      backgroundColor: '#303030',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', /* Shadow for depth */
      color: '#fff',
      flex: 1,
      borderRadius: '10px',
      cursor: 'pointer',
      transition: 'box-shadow 0.3s ease',
    },
    forumName: {
      flexGrow: 1, // Makes the name take up as much space as possible
    },
    removeCross: {
      fontSize: '20px',
      cursor: 'pointer',
      color: 'red',
      flexShrink: 0, // Prevents the cross from shrinking or taking unnecessary space
      marginLeft: '10px', // Adds some space between the name and the cross
    },
    pagination: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '20px',
      color: 'white',
    },
    paginationButton: {
      backgroundColor: '#007BFF',
      border: 'none',
      borderRadius: '5px',
      color: '#fff',
      padding: '5px 15px',
      margin: '0 5px',
    },
    paginationActive: {
      backgroundColor: '#007BFF',
      color: '#fff',
    },
    formControl: {
      backgroundColor: '#424242',
      color: '#fff',
      border: 'none',
    },
    button: {
      backgroundColor: '#FF9F43',
    },
    shareButton: {
      backgroundColor: '#28C76F',
    },
    leaveButton: {
      backgroundColor: '#EA5455',
    },
    subscribeButton: {
      backgroundColor: '#007BFF',
    },
    subscribedPageCounter: {
      color: '#fff',
      textAlign: 'center',
      margin: '10px',
    },
  };

  return (
    <Container fluid style={styles.container}>
      {/* Subscribed Forums */}
      <Row>
        <Col md={12} className="d-flex justify-content-between align-items-center mb-3" style={{backgroundColor:'#303030', borderRadius:'25px', padding:'20px'}}>
          <Button variant="secondary" onClick={() => setCurrentSubscribedPage(currentSubscribedPage - 1)} disabled={currentSubscribedPage === 1}>
            ◀
          </Button>
          <div className="d-flex overflow-auto" style={{ flexGrow: 1 }}>
            {paginatedSubscribedForums.map(forum => (
              <Card key={forum.id}
                    className="m-2 p-2 flex-fill"
                    style={styles.subscribedItem}
                    onClick={() => handleForumClick(forum.id)}
              >
                <div style={styles.forumName}>{forum.name}</div>
                <span
                  className="remove-cross"
                  style={styles.removeCross}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSubscription(forum.id);
                  }}
                >
                  &#10060;
                </span>
              </Card>
            ))}
          </div>
          <span style={styles.subscribedPageCounter}>{`${currentSubscribedPage} / ${totalSubscribedPages}`}</span>
          <Button variant="secondary" onClick={() => setCurrentSubscribedPage(currentSubscribedPage + 1)} disabled={currentSubscribedPage === totalSubscribedPages}>
            ▶
          </Button>
        </Col>
        </Row>

      {/* Main Forum List */}
      <Row>
        <Col md={9}>
          <Row>
            {paginatedForums.map(forum => (
              <Col md={3} key={forum.id} className="mb-4">
                <Card
                  className="h-100"
                  onClick={() => handleForumClick(forum.id)}
                  style={selectedForumId === forum.id ? { ...styles.card, ...styles.cardHoverOrSelected } : styles.card}
                  onMouseEnter={(e) => (e.currentTarget.style.border = '2px solid orange')}
                  onMouseLeave={(e) => (e.currentTarget.style.border = selectedForumId === forum.id ? '2px solid orange' : '2px solid transparent')}
                >
                  <Card.Body>
                    <Card.Title style={{ color: 'orange', marginBottom: '25px' }}>{forum.name}</Card.Title>
                    <Card.Text>{forum.description}</Card.Text>
                    <Card.Subtitle>{forum.category}</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Pagination Controls */}
          <div style={styles.pagination}>
            <Button
              style={styles.paginationButton}
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span>{`Page ${currentPage} of ${totalPages}`}</span>
            <Button
              style={styles.paginationButton}
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </Col>

        {/* Action Section */}
        <Col md={3}>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Search" style={styles.formControl} />
          </Form.Group>
          <Button className="w-100 mb-2" variant="warning" style={styles.button}>Most Recent</Button>
          <Button className="w-100 mb-2" variant="warning" style={styles.button}>Most Liked</Button>
          <Button className="w-100 mb-2" variant="warning" style={styles.button}>Most Replies</Button>
          <Button className="w-100 mb-2" variant="success" style={styles.shareButton} disabled={!selectedForumId}>Share</Button>
          <Button
            className="w-100 mb-2"
            variant={selectedForumId && forums.find(f => f.id === selectedForumId).subscribed ? 'danger' : 'primary'}
            style={selectedForumId && forums.find(f => f.id === selectedForumId).subscribed ? styles.leaveButton : styles.subscribeButton}
            onClick={() => {
              const selectedForum = forums.find(f => f.id === selectedForumId);
              toggleSubscription(selectedForum.id);
            }}
            disabled={!selectedForumId}
          >
            {renderSubscribeButtonText()}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ForumComponent;
