import React, { useContext } from 'react';
import SingleBook from '../SingleBook/SingleBook';
import CommentArea from '../CommentArea/CommentArea';
import { SelectContext } from '../../context/SelectContextProvider';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function AllTheBooks({books, input}) {
  const [searchResult, setSearchResult] = useState(books);
  const {selected} = useContext(SelectContext);

console.log(books)

  useEffect(() => {
    const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(input.toLowerCase().trim()));
    setSearchResult(filteredBooks);
}, [input, books]);


  return (
    <>
        <Container className='mt-3'>
          <Row>
            <Col md={8}>
              <Row className='justify-content-around mt-4'>
                  {searchResult.map((ele) => <SingleBook key={ele.asin} bookData={ele}/>)}
              </Row>
            </Col>
            <Col md={{ span: 3, offset: 1 }}>
              <h2>Commenti:</h2>
              {selected && <CommentArea bookID={books.asin}  />}
            </Col>
          </Row>
        </Container>
    </>
  )
}
