import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostComment from "../Post-Comment/PostComment";
import "../Post-Comment/style.css";
import { Button, TextField } from "@mui/material";
import { useRef } from "react";

const Post = () => {
  const [postValue, setPostValue] = useState([]);
  const [edit, setEdit] = useState(false)

  const { id } = useParams();
  const navigate = useNavigate();
  const inputRef = useRef(null);


  useEffect(() => {
    const getTitleId = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setPostValue(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    getTitleId();
  }, [id]);


  const handleEdit = () => {
    setEdit(!edit)
  }

  const handleSave = () => {
    setEdit(!edit)
  }

  return (
    <div>
      <div className="go-back">
        <Button onClick={() => navigate(-1)} variant="contained">
          Go Back
        </Button>
      </div>

      <div className="common">
        <div>
          <h4>Title Input: </h4>
        </div>

        <div className="edit-input">
            <TextField className="common-input" placeholder="Post Title" value={postValue.title} inputRef={input => edit && input?.focus() } />
            {/* <input ref={inputRef} type="text"/> */}

            {
                edit 
                ? <Button onClick={handleSave} className="save-btn" variant="contained">Save</Button> 
                : <Button className="edit-btn" variant="contained" onClick={handleEdit}>Edit</Button>
            }
           
        </div>

        <PostComment id={id} /> 
      </div>
    </div>
  );
};

export default Post;
