import React, { useContext, useEffect, useState } from 'react';
import CommentList from '../CommentList/CommentList';
import AddComment from '../AddComment/AddComment';
import { SelectContext } from '../../context/SelectContextProvider';
import { themeContext } from '../../context/ThemeContextProvider';
import { CloseButton } from 'react-bootstrap';
import './CommentArea.css'


export default function CommentArea({bookId}) {

const API_GET = `https://striveschool-api.herokuapp.com/api/books/`;
const API_POST = 'https://striveschool-api.herokuapp.com/api/comments/';
const Token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0YjE1NjljNDM3MDAwMTkzYzM2MWMiLCJpYXQiOjE3MTA3NzU4MjcsImV4cCI6MTcxMTk4NTQyN30.BZZWJpVTC56b7OV-FVx6CDePlPXH4gmlIkERsw-IRMc';
const API_OPERATION = 'https://striveschool-api.herokuapp.com/api/comments/';

const [comments, setComments] = useState([]);
const {selected, setSelected} = useContext(SelectContext);
const {theme} = useContext(themeContext);

async function getComments() {

  if(selected) {
    try {
      const response = await fetch(`${API_GET}${selected}/comments`, {
        headers: {
         'Authorization': Token
        } 
    })
    if(response.ok) {
      let result = await response.json();
      setComments(result)
    }
      
    } catch (error) {
      console.error(error);
    }

  }

};

useEffect(() => {
  getComments()
}, [selected])

async function deleteComment(id) {
  try {
    
    const response = await fetch(`${API_OPERATION}${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: Token,
      },
    })

    if(response.ok){
      getComments();
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
    <div className={theme === "dark" ? "bg-dark text-light comment-section": "comment-section"}>
      <div className='d-flex justify-content-end'>
        <CloseButton onClick={() => setSelected("")} />
      </div>
      <CommentList showComment={comments} deleteComment={deleteComment} />
      <AddComment asin={selected} token={Token} Api={API_POST} getComments={getComments} />
    </div>
    </>
  )
}
