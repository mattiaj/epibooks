import React from 'react'
import './SingleComment.css'
import { Button } from 'react-bootstrap'


export default function SingleComment({comment, deleteComment}) {



  return (
    <>
        <h6>Valutazione: <span>{comment.rate}</span></h6>
        <p className='comment border border-2 mb-1'>{comment.comment}</p>
        <div className='d-flex justify-content-end'>

        <Button size='sm' onClick={() => deleteComment(comment._id) } >Cancella</Button>
        </div>
    </>
  )
}
