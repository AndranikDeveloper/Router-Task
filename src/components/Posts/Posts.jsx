import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Posts/style.css";
import { useNavigate } from "react-router-dom";
import { getAllPosts } from "../../store/thunk";
import { Button } from "@mui/material";

const AllPosts = () => {
  const { posts, isLoading } = useSelector((state) => state.response);

  const [isVisited, setIsVisited] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const navigateToForward = () => {
    setIsVisited(true);
    if (isVisited) {
      navigate(+1);
    }
  };

  return (
    <div className="posts-component">
      {isLoading && <h1>Loading...</h1>}

      <div className="go-forward">
        {isVisited && (
          <Button onClick={() => navigate(1)} className="go" variant="contained">
            Go Forward
          </Button>
        )}
      </div>

      {posts.map((post) => (
        <div>
          <div className="post-id">The Post Id: {post.id}</div>
          <div onClick={navigateToForward} className="post" key={post.id}>
            {post.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllPosts;
