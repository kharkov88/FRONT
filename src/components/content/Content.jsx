import './content.css'

import React from 'react'
import { Row } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import { Login } from './Login'
import { Chatroom } from './Chatroom'

export const Content = () => (
  <Row className='show-grid'>
    <Route exact path='/' component={Login} />
    <Route exact path='/chat' component={Chatroom} />
  </Row>
)
