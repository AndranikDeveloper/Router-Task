import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../Posts/style.css';
import { useNavigate } from 'react-router-dom';
import { getAllPosts } from '../../store/thunk';
import { AiOutlineUser } from 'react-icons/ai';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Search from '../Search/Search';
import Arrow from '../Arrow/Arrow';

const AllPosts = () => {
  const { matchedPosts, isLoading } = useSelector((state) => state.response);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);


  return (
    <div>
      <div>
        <Search />
      </div>

      <div className='posts-component'>
        {isLoading && <h1 style={{ color: 'white' }}>Loading...</h1>}

        {matchedPosts.map((post) => (
          <div>
            <div className='post-id'>The Post Id: {post.id}</div>
            <div
              onClick={() => navigate(`/posts/${post.id}`)}
              className='post'
              key={post.id}
            >
              <div className='post-img'>
                <AiOutlineUser className='post-image' />
              </div>

              <div className='post-name'>Name: </div>
              <div className='post-title'>{post.title}</div>

              <span className='arrow-block'>
                <FaLongArrowAltRight className='arrow' />
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className='arrow'>
        <Arrow />
      </div>
    </div>
  );
};

export default AllPosts;
