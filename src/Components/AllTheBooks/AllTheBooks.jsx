import React from 'react';
import SingleBook from '../SingleBook/SingleBook';
import { Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function AllTheBooks({books, input}) {

  const [searchResult, setSearchResult] = useState(books);



  useEffect(() => {
    const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(input.toLowerCase().trim()));
    setSearchResult(filteredBooks);
}, [input, books]);


  return (
    <>
        <Container className='mt-3'>
            <Row className='justify-content-around mt-4'>
                {searchResult.map((ele) => <SingleBook key={ele.asin} bookData={ele}/>)}
            </Row>
        </Container>
    </>
  )
}
