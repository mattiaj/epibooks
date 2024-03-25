import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { themeContext } from '../../context/ThemeContextProvider';
import './SingleComment.css';


export default function SingleComment({comment, deleteComment}) {

  const {theme} = useContext(themeContext);

  return (
    <>
        <h6 className='mx-1'>Valutazione: <span>{comment.rate}</span></h6>
        <p className={theme === "dark" ? "bg-secondary comment border border-2 mb-1 mx-2" : "comment border border-2 mb-1 mx-2"} style={{width: "90%"}} >{comment.comment}</p>
        <div className='d-flex justify-content-end'>
          <Button size='sm' variant='danger' className='me-2' onClick={() => deleteComment(comment._id) } >Delete</Button>
        </div>
    </>
  )
}
