import React from 'react';
import CommentArea from '../CommentArea/CommentArea';
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './SingleBook.css'

export default function BookCard({bookData}) {
    const {title, price, category, img, asin} = bookData;

    const  [ selected, setSelected ]  = useState(false);

    function handleSelect() {
      setSelected(!selected);
    }
  return (
    <>
        <Card id={asin} className='card col-md-3 col-6 pt-2 mb-4 border-2' border={selected ? `danger` : `secondary`} style={{ width: '18rem' }}>
          <Card.Img variant="top" onClick={handleSelect} className='image' src={img} />
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
            <Button variant="outline-primary" >Aggiungi al carrello</Button>
          </Card.Body>
          {selected && 
          <Card.Footer>
            <CommentArea bookId={bookData.asin} />
          </Card.Footer>
          }
        </Card>
    </>
  )
}
