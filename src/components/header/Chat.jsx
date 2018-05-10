import React from 'react'
import { Link } from 'react-router-dom'
import { Glyphicon } from 'react-bootstrap'

export const Chat = () => (
  <Link to='/chat'>
    <Glyphicon glyph='envelope' />
  </Link>
)
