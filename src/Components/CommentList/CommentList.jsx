import React, { useState, useContext } from 'react';
import SingleComment from '../SingleComment/SingleComment';
import { themeContext } from '../../context/ThemeContextProvider';
import './CommentList.css';

export default function CommentList({showComment, deleteComment}) {

    const [viewList, setViewList] = useState(false);
    const {theme} = useContext(themeContext);

    function viewComment(e) {
        e.preventDefault()
        setViewList(!viewList);
    }

  return (
   <>
   <div className='text-center lista mb-2'>
    <a href='#' onClick={viewComment} className={theme === "dark" ? "link-light" : ""} >Leggi Recensioni</a>
   </div>
   {viewList && 
      showComment.map((ele) => <SingleComment  key={ele._id} comment={ele} deleteComment={deleteComment} />)
   }
   </>
  )
}
