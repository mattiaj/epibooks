import React, { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { themeContext } from '../../context/ThemeContextProvider';

export default function AddComment({Api, token, asin, getComments}) {

  const {theme} = useContext(themeContext);

  const [comment, setComment] = useState({
    comment: '',
    rate: 1,
    elementId: null,
  })

  useEffect(() => {
    setComment((ele) => ({
      ...ele,
      elementId: asin,
    }))
  }, [asin])

  async function newComment (e) {
    e.preventDefault();
    try {
      
      const response = await fetch(Api, {
        method: 'POST',
        headers: {
          Authorization: token,
          'Content-type': 'application/json',
        },
        body: JSON.stringify(comment),
      })
      
      if(response.ok) {

        alert('Commento inviato');
        setComment({
          comment: '',
          rate: 1,
          elementId: null,
        })
      } else {
        throw new Error(`Errore nell'invio del commento`)
      }

    } catch (error) {
      alert(error);
      console.error(error)
    }

  }
  
  return (
    <>
        <hr></hr>
        <Form onSubmit={newComment} >
            <Form.Group>
                <Form.Control
                className={theme === "dark" ? "bg-secondary m-2 text-light" : "m-2"}
                style={{width: "90%"}}
                placeholder='Inscerisci il tuo commento'
                value={comment.comment}
                onChange={(e) => setComment({...comment, comment: e.target.value})}
                />
                <div className='d-flex align-items-center justify-content-around'>
                  <span>Valutazione: </span>
                  <Form.Control
                  className={theme === "dark" ? "bg-secondary text-light text-center" : "text-center"}
                  style={{width: "23%"}}
                  type='number'
                  min={1} max={5} step={1}
                  value={comment.rate}
                  onChange={(e) => setComment({...comment, rate: e.target.value})}
                  />
                  <div>
                      <Button type="submit" onClick={() => getComments()} className='mt-2'>Invia</Button>
                  </div>
                </div>
            </Form.Group>
        </Form>
    </>
  )
}
