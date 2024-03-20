import React from 'react'
import './SingleComment.css'
import { Button } from 'react-bootstrap'


export default function SingleComment({comment}) {

  const API_OPERATION = 'https://striveschool-api.herokuapp.com/api/comments/';
  const Token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0YjE1NjljNDM3MDAwMTkzYzM2MWMiLCJpYXQiOjE3MTA3NzU4MjcsImV4cCI6MTcxMTk4NTQyN30.BZZWJpVTC56b7OV-FVx6CDePlPXH4gmlIkERsw-IRMc';

  async function Delete(id) {
    
    try {
      
      const response = await fetch(`${API_OPERATION}${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: Token,
        },
      })

      if(response.ok){
        alert('commento eliminato con successo')
      } else {
        throw new Error('Non è stato possibile eliminare il commento')
      }

    } catch (error) {
      alert(error);
      console.error(error);
    }

  }

  return (
    <>
        <h6>Valutazione: <span>{comment.rate}</span></h6>
        <p className='comment border border-2 p-1'>{comment.comment}</p>
        <Button onClick={() => Delete(comment._id)} >Delete</Button>
        <Button >Modify</Button>
    </>
  )
}
