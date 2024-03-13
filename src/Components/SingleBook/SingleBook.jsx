import React from 'react';
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './SingleBook.css'

export default function BookCard({bookData}) {
    const {title, price, category, img} = bookData;

    const  [ selected, setSelected ]  = useState(false);

    function handleSelect() {
      setSelected(!selected);
    }
  return (
    <>
        <Card className='col-md-3 col-6 p-0 mb-4 border-3' border={selected ? `danger` : `secondary`} style={{ width: '18rem' }}>
          <Card.Img variant="top" className='image' src={img} />
          <Card.Body >
            <Card.Title>{title}</Card.Title>
            <div className='info-box'>
              <Card.Text>
                  <strong>Categoria: </strong> {category}
              </Card.Text>
              <Card.Text>
                <strong>Prezzo: </strong> €{price}
              </Card.Text>
              
            </div>
            <Button variant="primary" className='fine' onClick={handleSelect}>Aggiungi al carrello</Button>
          </Card.Body>
        </Card>
    </>
  )
}
