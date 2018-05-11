import React from 'react'
import { Link } from 'react-router-dom'
import { Glyphicon, Button } from 'react-bootstrap'

export const Chat = ({logined}) => {
  return (
    <Button bsStyle='link' disabled={!logined}>
      <Link to='/chat'>
        <Glyphicon glyph='envelope' />
      </Link>
    </Button>
  )
}
