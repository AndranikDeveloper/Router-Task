import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPosts } from "../../api/getPosts"



const Post = () => {
    const [newValues, setNewValues] = useState([])

    const {id} = useParams()

    console.log(id)
    console.log(newValues.title)

    // const getTitleId =  () => {
    //     try {
    //         const response = getPosts(id)
    //         setNewValues(response.data)
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }
    
    useEffect(() => {
       getPosts(id)
    }, [])

    return (
        <div>
            <input value={newValues.title}/>
            
        </div>
    )
}

export default Post