import axios from 'axios';

export const getComments = async ({ setComment }) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=1`
  );
  setComment(response.data);
};
