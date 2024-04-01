import React, { useContext } from 'react';
import SingleBook from '../SingleBook/SingleBook';
import CommentArea from '../CommentArea/CommentArea';
import { SelectContext } from '../../context/SelectContextProvider';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Welcome from '../Welcome/Welcome';
import { CloseButton } from 'react-bootstrap';


export default function AllTheBooks({books, input}) {
  const [searchResult, setSearchResult] = useState();
  const {selected, setSelected} = useContext(SelectContext);

// console.log(books)

  useEffect(() => {

    if(books) {
      const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(input.toLowerCase().trim()));
      setSearchResult(filteredBooks);
    }
}, [input, books]);


  return (
    <>
      <Welcome />
        <Container className='mt-3'>
          <Row>
            <Col md={8}>
              <Row className='justify-content-around mt-4'>
                  {searchResult.map((ele) => <SingleBook key={ele.asin} bookData={ele} data-testid="card" />)}
              </Row>
            </Col>
            <Col md={{ span: 3, offset: 1 }}>
            <div className='d-flex justify-content-between align-items-center'>
              <h2>Commenti:</h2>
              {selected && <CloseButton onClick={() => setSelected("")} />}
            </div>
              {selected && <CommentArea />}
            </Col>
          </Row>
        </Container>
    </>
  )
}
