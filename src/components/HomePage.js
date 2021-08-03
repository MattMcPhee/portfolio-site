import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import unsplash from '../api/unsplash';

const HomePage = () => {
  const [img, setImg] = useState({});
  let loading = true;

  useEffect(() => {
    unsplash
      .get('/photos/random', {
        params: {
          query: 'programming'
        }
      })
      .then(response => {
        setImg(response.data);
        loading = false;
      });
  }, []);

  return (
    <Container className='mt-5'>
      <Row>
        <Col sm={4}>
          <Image src={img.urls.small}></Image>
          <p>
            <small>"{img.description}" - sourced from Unsplash</small>
          </p>
        </Col>
        <Col sm={8}>
          <h2>Welcome</h2>
          <p>I'm a web developer based in Brisbane, Australia.</p>
          <p>Check out my projects or my current resume!</p>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
