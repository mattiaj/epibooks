import React from 'react';
import BookCard from '../MyBookCard/BookCard';
import { Container, Row } from 'react-bootstrap';

export default function AllTheBooks({books}) {
  return (
    <>
        <Container>
            <Row>
                {books.map((ele) => <BookCard key={ele.asin} bookData={ele}/>)}
            </Row>
        </Container>
    </>
  )
}
