import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import Comment from './Comment'


const PostComment = ({ id }) => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=1`
      );
      setComment(response.data);
    };

    getComments();
  }, [id]);

  return (
    <div className="comment-content">
      {
      comment.length && comment.map(comment => (
        <Comment key={comment.id} {...comment}/>
      ))}
    </div>
  );
};

export default PostComment;
