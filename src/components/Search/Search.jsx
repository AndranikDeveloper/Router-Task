import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './style.css'
import { findPost } from '../Debounce/FindPost'
import { useDebounce } from '../Debounce/Debounce'
import { useDispatch, useSelector } from 'react-redux'
import { setMatchedPosts } from '../../store/slices/postsSlice'

const Search = () => {
  const [inputValue, setInputValue] = useState('')
  const debounceValue = useDebounce(inputValue, 1500)

  const { posts } = useSelector(state => state.response)
  const dispatch = useDispatch()


  useEffect(() => {
    const find = async () => {
      try {
        if (!debounceValue.length) {
          dispatch(setMatchedPosts(posts))
          return;
        }
        const matchedPosts = await findPost(debounceValue, posts)
        dispatch(setMatchedPosts(matchedPosts))

      } catch (e) {
        throw new Error(e)
      }
    }
    find()
  }, [debounceValue, dispatch, posts])



  return (
    <div className='search'>
      <TextField
        onChange={e => setInputValue(e.target.value)}
        placeholder='Find a Post'
        className='serach-input' />
    </div>
  )
}

export default Search