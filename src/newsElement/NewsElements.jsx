import React from 'react';
import './newsElement.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Notfound from '../media/notfoundImage.jpg';

function NewsElements({ item }) {
  console.log(item)
  return (
    <div className='card'>
          <Card.Title className='title'>{item.title}</Card.Title>
      <div className="card-img-container">

        <Card.Img variant="top" src={item.urlToImage || Notfound} />
        
      </div>
      <Card.Body>
        <Card.Text className='desc'>
          {item.description}
        </Card.Text>
        <Button className="primary" href={item.url} target="_blank" rel="noopener noreferrer">
         View More
        </Button>
      </Card.Body>
    </div>
  );
}

export default NewsElements;
