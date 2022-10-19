import React from 'react';
import Card from 'react-bootstrap/Card';
import Products from './Products';

const Home = () => {
  return (
    <>
    <Card className="bg-dark text-white border-0">
      <Card.Img src="/assets/shopping_bg.jpg" alt="Card image" height="650px" />
      <Card.ImgOverlay className="d-flex flex-column justify-content-center">
        <Card.Title className="display-3 fw-bolder mb-0 ms-5">NEW SEASON ARRIVALS</Card.Title>
        <Card.Text className="lead fs-2 ms-5">
          CHECK OUT ALL THE TRENDS
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    <Products/>
    </>
  );
}

export default Home;