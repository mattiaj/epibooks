import React, { useState } from 'react';
import './CommentList.css';
import SingleComment from '../SingleComment/SingleComment';

export default function CommentList() {

    const [viewList, setViewList] = useState(false);

    function viewComment(e) {
        e.preventDefault()
        setViewList(!viewList);
    }

  return (
   <>
   <div className='text-center'>
    <a href='#' onClick={viewComment} >Leggi Recensioni</a>
   </div>
   {viewList && 
    <SingleComment />
   }
   </>
  )
}
