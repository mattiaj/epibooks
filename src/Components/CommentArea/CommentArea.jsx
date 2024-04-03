import React, { useContext, useEffect, useState } from 'react';
import CommentList from '../CommentList/CommentList';
import AddComment from '../AddComment/AddComment';
import { Spinner } from 'react-bootstrap';
import { SelectContext } from '../../context/SelectContextProvider';
import { themeContext } from '../../context/ThemeContextProvider';
import './CommentArea.css'


export default function CommentArea({bookId}) {

const API_GET = `https://striveschool-api.herokuapp.com/api/books/`;
const API_POST = 'https://striveschool-api.herokuapp.com/api/comments/';
const Token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0YjE1NjljNDM3MDAwMTkzYzM2MWMiLCJpYXQiOjE3MTIwNDg3NzQsImV4cCI6MTcxMzI1ODM3NH0.uI4iVfLNdDnbDAmzJfUB1x872E_sn0N1AsWTrPoUUu8';
const API_OPERATION = 'https://striveschool-api.herokuapp.com/api/comments/';

const [comments, setComments] = useState([]);
const {selected} = useContext(SelectContext);
const {theme} = useContext(themeContext);
const [spinner, setSpinner] = useState(false);

async function getComments() {
  setSpinner(true);

  if(selected) {
    try {
      const response = await fetch(`${API_GET}${selected}/comments`, {
        headers: {
         'Authorization': Token
        } 
    })
    if(response.ok) {
      let result = await response.json();
      setComments(result);
      setSpinner(false);
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
      <div data-testid="comment">
        <div className={theme === "dark" ? "bg-dark text-light comment-section py-2": "comment-section py-2"}>
          {spinner && <Spinner />}
          <CommentList showComment={comments} deleteComment={deleteComment} />
        </div>
        <div className={theme === "dark" ? "bg-dark text-light comment-section setHeight": "comment-section setHeight"}>
          <AddComment asin={selected} token={Token} Api={API_POST} getComments={getComments} />
        </div>
      </div>
    </>
  )
}
