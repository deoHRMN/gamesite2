import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './NewsSection.css'; // Optional custom styling

const newsArticles = [
  { id: 1, title: 'News Title 1', date: 'October 9, 2024', image: `https://deohrmn.github.io/gamesite1/images/news1.jpg`},
  { id: 2, title: 'News Title 2', date: 'October 8, 2024', image: `https://deohrmn.github.io/gamesite1/images/news2.jpg`},
  { id: 3, title: 'News Title 3', date: 'October 7, 2024', image: `https://deohrmn.github.io/gamesite1/images/news3.jpg`},
  { id: 4, title: 'News Title 4', date: 'October 6, 2024', image: `https://deohrmn.github.io/gamesite1/images/news4.jpg`},
  { id: 5, title: 'News Title 5', date: 'October 5, 2024', image: `https://deohrmn.github.io/gamesite1/images/news5.jpg`},
  { id: 6, title: 'News Title 6', date: 'October 4, 2024', image: `https://deohrmn.github.io/gamesite1/images/news6.jpg`},
];

const NewsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 3;

  // Calculate the range of news articles to display
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = newsArticles.slice(indexOfFirstNews, indexOfLastNews);

  const totalPages = Math.ceil(newsArticles.length / newsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container fluid className="news-section mb-4">
      <h2 className="section-title">Latest News</h2>
      <Row className="justify-content-center">
        {currentNews.map((news) => (
          <Col key={news.id} xs={12} md={4} className="mb-4">
            <Card className="news-card d-flex flex-row">
              <Card.Img variant="left" src={news.image} className="news-image" />
              <Card.Body className="news-body">
                <Card.Title className="news-title">{news.title}</Card.Title>
                <Card.Text className="news-date mt-3">{news.date}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pagination */}
      <div className="pagination-controls">
        <Button
          variant="primary"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span className="page-indicator">
          {currentPage} / {totalPages}
        </span>
        <Button
          variant="primary"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </Container>
  );
};

export default NewsSection;
