import './content.css'

import React from 'react'
import { Row } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import { Login } from './Login'
import { Search } from './Search'
import { User } from './User'

export const Content = ({logined, changeLoginState}) => (
  <Row className='show-grid'>
    <Route exact path='/' render={
    	props => <Login logined={logined} changeLoginState={changeLoginState} />
    } />
    <Route path='/search' component={Search} />
    <Route path='/people/:id' component={User}/>
  </Row>
)
const Data = () => (
	<p>User's data</p>
	)