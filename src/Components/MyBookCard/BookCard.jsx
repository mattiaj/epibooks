import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function BookCard({bookData}) {
    const {title, price, category, img} = bookData;
  return (
    <>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              €{price}
            </Card.Text>
            <Card.Text>
                {category}
            </Card.Text>
            <Button variant="primary">Aggiungi al carrello</Button>
          </Card.Body>
        </Card>
    </>
  )
}
