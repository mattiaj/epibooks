import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'

export default function AddComment({Api, token, asin}) {

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
      console.log(response)
      
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
        <Form onSubmit={newComment}>
            <Form.Group>
                <Form.Control
                className='my-3'
                placeholder='Inscerisci il tuo commento'
                value={comment.comment}
                onChange={(e) => setComment({...comment, comment: e.target.value})}
                />
                <span>Valutazione: </span>
                <Form.Control
                type='number'
                className='text-center'
                min={1} max={5} step={1}
                value={comment.rate}
                onChange={(e) => setComment({...comment, rate: e.target.value})}
                />
            </Form.Group>
            <div className='text-end'>
                <Button type="submit" className='mt-2'>Invia</Button>
            </div>
        </Form>
    </>
  )
}
