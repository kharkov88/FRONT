import './header.css'

import React from 'react'
import Home from './Home'
import {Search} from './Search'
import {About} from './About'
import { Row, Col } from 'react-bootstrap'

export let Header = ({logined, user}) => (
  <Row className='show-grid' id='header'>
    <Col xs={12} sm={4}>
      <Col xs={12} sm={4} md={4}>
        <Home />
      </Col>
      <Col xs={12} sm={4} md={4}>
        <Search logined={logined} />
      </Col>
      <Col xs={12} sm={4} md={4}>
        <About />
      </Col>
    </Col>
    <Col xs={12} sm={4} />
    <Col xs={12} sm={4} id="header-username">{user}</Col>
  </Row>
)
