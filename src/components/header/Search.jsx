import React from 'react'
import { Link } from 'react-router-dom'
import { Glyphicon, Button } from 'react-bootstrap'

export const Search = ({logined}) => {
  return (
    <Button bsStyle='link' disabled={!logined}>
      <Link to='/search'>
        <Glyphicon glyph='search' />
      </Link>
    </Button>
  )
}
