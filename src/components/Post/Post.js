import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PostComment from '../PostComment/PostComment';
import '../PostComment/style.css';
import { Button } from '@mui/material';
import { getTitleId } from './PostApi';
import PostForm from './PostForm';

const Post = () => {
  const [postValue, setPostValue] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getTitleId({ id, setPostValue });
  }, [id]);

  return (
    <div>
      <div className='go-back'>
        <Button onClick={() => navigate(-1)} variant='contained'>
          Go Back
        </Button>
      </div>

      <div className='common'>
        <div>
          <h4 style={{ color: 'white' }}>Title Input: </h4>
        </div>

        <div className='edit-input'>
          <PostForm id={id} setPostValue={setPostValue} postValue={postValue} />
        </div>
        <PostComment id={id} />
      </div>
    </div>
  );
};

export default Post;
