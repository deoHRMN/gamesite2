import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ModShopComponent = () => {
  const initialMods = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `Mod ${i + 1}`,
    description: `This is a short description of Mod ${i + 1}.`,
    category: `Category ${Math.ceil(Math.random() * 5)}`,
    added: i < 8, // First 8 mods are added initially
  }));

  const itemsPerPage = 16;
  const addedItemsPerPage = 8;
  const [mods, setMods] = useState(initialMods);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentAddedPage, setCurrentAddedPage] = useState(1);
  const [selectedModId, setSelectedModId] = useState(null);

  const paginatedMods = mods.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const paginatedAddedMods = mods.filter(m => m.added).slice((currentAddedPage - 1) * addedItemsPerPage, currentAddedPage * addedItemsPerPage);

  const totalPages = Math.ceil(mods.length / itemsPerPage);
  const totalAddedPages = Math.ceil(mods.filter(m => m.added).length / addedItemsPerPage);

  const handleModClick = (modId) => {
    setSelectedModId(modId);
  };

  const toggleMod = (modId) => {
    setMods(mods.map(m => m.id === modId ? { ...m, added: !m.added } : m));
  };

  const renderAddButtonText = () => {
    if (selectedModId === null) return "Add";
    const selectedMod = mods.find(m => m.id === selectedModId);
    return selectedMod.added ? "Remove" : "Add";
  };

  const renderModDetails = () => {
    const selectedMod = mods.find(m => m.id === selectedModId);
    if (!selectedMod) return { releaseDate: 'N/A', rating: 'N/A', description: 'No mod selected' };

    return {
      releaseDate: '2024-05-01',
      rating: '4.5/5',
      description: selectedMod.description,
    };
  };

  const modDetails = renderModDetails();

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
    addedItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px',
      backgroundColor: '#303030',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', /* Shadow for depth */
      color: '#fff',
      flex: 1,
      borderRadius: '10px',
      cursor: 'pointer',
      transition: 'box-shadow 0.3s ease',
    },
    modName: {
      flexGrow: 1,
    },
    removeCross: {
      fontSize: '20px',
      cursor: 'pointer',
      color: 'red',
      marginLeft: '10px',
    },
    pagination: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '20px',
      color: 'white',
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
    addButton: {
      backgroundColor: '#007BFF',
    },
    removeButton: {
      backgroundColor: '#EA5455',
    },
    modDetails: {
      backgroundColor: '#303030',
      padding: '20px',
      borderRadius: '10px',
      marginBottom: '20px',
      color: '#fff',
    },
    versionReleasesContainer: {
      backgroundColor: '#303030',
      padding: '15px',
      borderRadius: '10px',
      marginBottom: '20px',
      color: '#fff',
    },
    versionReleaseHeader: {
      color: 'orange',
      marginBottom: '10px',
    },
    versionList: {
      maxHeight: '150px',
      overflowY: 'auto',
      padding: '0',
      listStyleType: 'none',
    },
    versionListItem: {
      backgroundColor: '#424242',
      marginBottom: '10px',
      padding: '10px',
      borderRadius: '5px',
    },
  };

  // Example version releases data
  const versionReleases = [
    { version: '1.0.0', releaseDate: '2024-01-15' },
    { version: '1.1.0', releaseDate: '2024-03-22' },
    { version: '1.2.0', releaseDate: '2024-06-10' },
  ];

  const renderVersionReleases = () => {
    return versionReleases.map(release => (
      <li key={release.version} style={styles.versionListItem}>
        {`Version: ${release.version} - Released on: ${release.releaseDate}`}
      </li>
    ));
  };

  return (
    <Container fluid style={styles.container}>
      {/* Added Mods Slider */}
      <Row>
        <Col md={12} className="d-flex justify-content-between align-items-center mb-3" style={{ backgroundColor: '#303030', borderRadius: '25px', padding: '20px' }}>
          <Button variant="secondary" onClick={() => setCurrentAddedPage(currentAddedPage - 1)} disabled={currentAddedPage === 1}>
            ◀
          </Button>
          <div className="d-flex overflow-auto" style={{ flexGrow: 1 }}>
            {paginatedAddedMods.map(mod => (
              <Card key={mod.id}
                    className="m-2 p-2 flex-fill"
                    style={styles.addedItem}
                    onClick={() => handleModClick(mod.id)}
              >
                <div style={styles.modName}>{mod.name}</div>
                <span
                  className="remove-cross"
                  style={styles.removeCross}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMod(mod.id);
                  }}
                >
                  &#10060;
                </span>
              </Card>
            ))}
          </div>
          <span style={{ margin: '10px' }}>{`${currentAddedPage} / ${totalAddedPages}`}</span>
          <Button variant="secondary" onClick={() => setCurrentAddedPage(currentAddedPage + 1)} disabled={currentAddedPage === totalAddedPages}>
            ▶
          </Button>
        </Col>
      </Row>

      {/* Main Mod List */}
      <Row>
        <Col md={9}>
          <Row>
            {paginatedMods.map(mod => (
              <Col md={3} key={mod.id} className="mb-4">
                <Card
                  className="h-100"
                  onClick={() => handleModClick(mod.id)}
                  style={selectedModId === mod.id ? { ...styles.card, ...styles.cardHoverOrSelected } : styles.card}
                  onMouseEnter={(e) => (e.currentTarget.style.border = '2px solid orange')}
                  onMouseLeave={(e) => (e.currentTarget.style.border = selectedModId === mod.id ? '2px solid orange' : '2px solid transparent')}
                >
                  <Card.Body>
                    <Card.Title style={{ color: 'orange', marginBottom: '25px' }}>{mod.name}</Card.Title>
                    <Card.Text>{mod.description}</Card.Text>
                    <Card.Subtitle>{mod.category}</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Pagination Controls */}
          <div style={styles.pagination}>
            <Button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span style={{ margin: '20px' }}>{`Page ${currentPage} of ${totalPages}`}</span>
            <Button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </Col>

        {/* Right Section: Search, Details, and Actions */}
        <Col md={3}>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Search" style={styles.formControl} />
          </Form.Group>
          <Button className="w-100 mb-2" variant="success" style={styles.shareButton} disabled={!selectedModId}>Share</Button>
          <Button
            className="w-100 mb-2"
            variant={selectedModId && mods.find(m => m.id === selectedModId).added ? 'danger' : 'primary'}
            style={selectedModId && mods.find(m => m.id === selectedModId).added ? styles.removeButton : styles.addButton}
            onClick={() => {
              const selectedMod = mods.find(m => m.id === selectedModId);
              toggleMod(selectedMod.id);
            }}
            disabled={!selectedModId}
          >
            {renderAddButtonText()}
          </Button>

          {/* Mod Details */}
          <div className="mod-details" style={styles.modDetails}>
            <p><strong>Release Date:</strong> <span>{modDetails.releaseDate}</span></p>
            <p><strong>Rating:</strong> <span>{modDetails.rating}</span></p>
            <p><strong>Description:</strong> <span>{modDetails.description}</span></p>
          </div>

          {/* Version Releases Section */}
          <div className="version-releases" style={styles.versionReleasesContainer}>
            <h4 style={styles.versionReleaseHeader}>Version Releases</h4>
            <ul style={styles.versionList}>
              {renderVersionReleases()}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ModShopComponent;
