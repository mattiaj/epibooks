import React from 'react';
import SingleBook from '../SingleBook/SingleBook';
import { Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function AllTheBooks({books, input}) {

  const [searchResult, setSearchResult] = useState(books);

  // function handleSubmit(e) {
  //   setInputName(e)
  //  let filteredBooks = books.filter((book) => book.title.toLowerCase().trim().includes(input.toLowerCase().trim()));
  //  console.log(filteredBooks)
  //  setSearchResult(filteredBooks);
  // }

  useEffect(() => {
    const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(input.toLowerCase().trim()));
    setSearchResult(filteredBooks);
}, [input, books]);


  return (
    <>

        <Container className='mt-3'>
          {/* <Form >
            <Row className='justify-content-center'>
            <Form.Group className='col-6 p-0'>
              <Form.Control 
              className='text-center'
              type="text" 
              placeholder='Cerca il tuo libro...'
              value={inputName} 
              onChange={(e)=> handleSubmit(e.target.value)}/>
            </Form.Group>
            </Row>
          </Form> */}
            <Row className='justify-content-around mt-4'>
                {searchResult.map((ele) => <SingleBook key={ele.asin} bookData={ele}/>)}
            </Row>
        </Container>
    </>
  )
}
