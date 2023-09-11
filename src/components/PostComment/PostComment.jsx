import React, { useEffect, useState } from 'react';
import './style.css';
import Comment from './components/Comment';
import { getComments } from './CommentApi';

const PostComment = ({ id }) => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    getComments({ setComment });
  }, [id]);

  return (
    <div className='comment-content'>
      {comment.length &&
        comment.map((comment) => <Comment key={comment.id} {...comment} />)}
    </div>
  );
};

export default PostComment;
