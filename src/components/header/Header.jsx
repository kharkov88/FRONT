import './header.css'

import React from 'react'
import Home from './Home'
import {Chat} from './Chat'
import {About} from './About'
import { Row, Col } from 'react-bootstrap'

export let Header = () => (

  <Row className='show-grid' id='header'>
    <Col xs={12} sm={4}>
      <Col xs={12} sm={4} md={4}>
        <Home />
      </Col>
      <Col xs={12} sm={4} md={4}>
        <Chat />
      </Col>
      <Col xs={12} sm={4} md={4}>
        <About />
      </Col>
    </Col>
    <Col xs={12} sm={4} />
    <Col xs={12} sm={4} />
  </Row>

)
