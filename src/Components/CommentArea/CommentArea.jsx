import React, { useEffect, useState } from 'react';
import CommentList from '../CommentList/CommentList';
import AddComment from '../AddComment/AddComment';


export default function CommentArea({bookId}) {

const API_GET = `https://striveschool-api.herokuapp.com/api/books/${bookId}/comments/`;
const API_POST = 'https://striveschool-api.herokuapp.com/api/comments/';
const Token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0YjE1NjljNDM3MDAwMTkzYzM2MWMiLCJpYXQiOjE3MTA3NzU4MjcsImV4cCI6MTcxMTk4NTQyN30.BZZWJpVTC56b7OV-FVx6CDePlPXH4gmlIkERsw-IRMc';
const API_OPERATION = 'https://striveschool-api.herokuapp.com/api/comments/';

const [comments, setComments] = useState([]);

async function getComments() {


  try {
    const response = await fetch(API_GET, {
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

useEffect(() => {
  getComments()
}, [])

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
      <CommentList showComment={comments} deleteComment={deleteComment} />
      <AddComment asin={bookId} token={Token} Api={API_POST} />
    </>
  )
}
