import React from 'react'
import { Col, Image } from 'react-bootstrap'
import { SendMessage } from './SendMessage'

export const User = ({foto, name}) => {
  return (
    <div>
      <Col xs={12} sm={4}>
        <div id='content-people-face'><Image src='/static/thumbnail.png' rounded /></div>
        <div>{name}</div>
      </Col>
      <Col xs={12} sm={8} id='content-people-about'>
        <h2>About me</h2>
        {
          `Hi All,
				I want to write a medium-lenght piece about the history
				of the "about me". I'm having trouble finding sources
				of information about it. If anyone knows or can point
				me in the right direction, it would be great, and if
				anyone is interested in collaborating,
				I'd love to work together with someone on this!`
        }
      </Col>
      <Col xs={12} sm={12}>
        <div id='content-people-send-message'>
          <SendMessage />
        </div>
      </Col>
    </div>
  )
}
