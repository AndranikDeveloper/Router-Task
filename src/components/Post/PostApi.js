import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const getTitleId = async ({ setPostValue, id }) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    setPostValue(response.data);
  } catch (e) {
    console.log(e);
  }
};

export const handleSubmit = (e, postValue, id) => {
  e.preventDefault();
  return (
    axios
      .patch(`https://jsonplaceholder.typicode.com/posts/${id}`, postValue)
      // .then()
      .catch((err) => console.log(err))
  );
};
