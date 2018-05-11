import React from 'react'
import { Link } from 'react-router-dom'
import { Glyphicon, Button } from 'react-bootstrap'

const Home = () => (
  <Button bsStyle='link'>
    <Link to='/'>
      <Glyphicon glyph='home' />
    </Link>
  </Button>
)

export default Home
