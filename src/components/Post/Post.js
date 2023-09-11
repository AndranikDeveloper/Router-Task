import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostComment from "../Post-Comment/PostComment";
import "../Post-Comment/style.css";
import { Button, TextField } from "@mui/material";
import { useRef } from "react";

const Post = () => {
  const [postValue, setPostValue] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getTitleId = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        setPostValue(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    getTitleId();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
    .patch(`https://jsonplaceholder.typicode.com/posts/${id}`, postValue)
    .then(console.log )
    .catch(err => console.log(err))

  };
  console.log(postValue.title);
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

          <form onSubmit={handleSubmit}>

            <TextField
              className="common-input"
              placeholder="Post Title"
              value={postValue.title}
              onChange={(e) =>
                setPostValue({ ...postValue, title: e.target.value })
              }
            />

            <button variant="contained">Save Changes</button>

          </form>
        
        </div>
        <PostComment id={id} />
      </div>
    </div>
  );
};

export default Post;
