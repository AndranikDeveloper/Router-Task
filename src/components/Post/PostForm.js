import React from 'react';
import { TextField, Button } from '@mui/material';
import { handleSubmit } from './PostApi';
import { useNavigate } from 'react-router-dom';

const PostForm = ({ postValue, id, setPostValue }) => {
  const navigate = useNavigate();
  return (
    <div>
      <form>
        <TextField
          className='common-input'
          placeholder='Post Title'
          value={postValue.title}
          onChange={(e) =>
            setPostValue({ ...postValue, title: e.target.value })
          }
        />

        <Button
          onClick={(e) =>
            handleSubmit(e, postValue, id).then(() => navigate('/'))
          }
          type='submit'
          className='update-btn'
          variant='contained'
        >
          Save Changes
        </Button>
      </form>
    </div>
  );
};

export default PostForm;
