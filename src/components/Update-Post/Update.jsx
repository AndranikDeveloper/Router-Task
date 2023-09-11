import React, { useState } from 'react'
import './Update.css'
import { Button, TextField } from '@mui/material'


const Update = ({id}) => {
    const [values, setValues] = useState({id: id, title: ''})


  return (
    <div className='update'>
        <form className='update-form'>
            <TextField placeholder='Update Title'/>
            <Button variant='contained'>Change</Button>
        </form>
    </div>
  )
}

export default Update