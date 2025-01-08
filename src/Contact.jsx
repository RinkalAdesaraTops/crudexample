import React from 'react'
import { Button } from '@mui/material'
import { Outlet } from 'react-router'
const Contact = () => {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Outlet />
    </div>
  )
}

export default Contact
