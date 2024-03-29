import React from 'react';
import SingleComment from '../SingleComment/SingleComment';
import './CommentList.css';

export default function CommentList({showComment, deleteComment}) {


  return (
   <>
      {showComment.map((ele) => <SingleComment  key={ele._id} comment={ele} deleteComment={deleteComment} />)}
   </>
  )
}
