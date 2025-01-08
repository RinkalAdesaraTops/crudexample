import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import {Stack} from 'react-bootstrap'
const Home = () => {
    const myStyle = {
        color:"blue",
        backgroundColor:"grey"
    }
  return (
    <div>
      <h3 style={{color:"red",backgroundColor:"yellow"}}>CSS Example</h3>
      <p style={myStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quia, reprehenderit tempora necessitatibus recusandae et ipsa consequatur atque. Quaerat accusantium, iste dolorem necessitatibus quibusdam repellat odio quidem provident veritatis reiciendis!</p>

      <Stack direction="horizontal" gap={2}>
  <Button as="a" variant="primary">
    Button as link
  </Button>
  <Button as="a" variant="success">
    Button as link
  </Button>
</Stack>
    </div>
  )
}

export default Home
