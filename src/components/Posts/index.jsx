import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import '../Posts/style.css'
import { useNavigate } from "react-router-dom"
import { getAllPosts } from "../../store/thunk"


const AllPosts = () => {
    const { posts, isLoading } = useSelector(state => state.response)
    const dispatch = useDispatch()
    
    const navigate = useNavigate()




    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])

    return (
        <div className="posts-component">
            {isLoading && <h1>Loading...</h1>}
            
            {
                posts.map(post => (
                    <div onClick={() => navigate(`/posts/${post.id}`)} className="post" key={post.id}>{post.title}</div>
                ))
            }
        </div>
    )

}

export default AllPosts