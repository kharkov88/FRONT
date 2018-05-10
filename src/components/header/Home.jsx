import React from 'react'
import { Link } from 'react-router-dom'
import { Glyphicon } from 'react-bootstrap'

const Home = () => (
  <Link to='/'>
    <Glyphicon glyph='home' />
  </Link>
)

export default Home
