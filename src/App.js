import './App.css'

// components
import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'
import { Header } from './components/header'
import { Content } from './components/content'

class App extends Component {
  componentDidMount () {
    let {user, logined} = window.localStorage
    this.setState({
    	user: user,
    	logined: logined
    })
  }

  constructor (props) {
    super(props)
    this.changeLoginState = this.changeLoginState.bind(this)
    this.state = {
      logined: false,
      user: ''
    }
  }

  changeLoginState (name) {
    this.setState({
      logined: true,
      user: name
    })
  }
  render () {
    let {logined, user} = this.state
    return (
      <Grid>
        <Header logined={logined} user={user} />
        <Content logined={this.state.logined} changeLoginState={this.changeLoginState} />
      </Grid>
    )
  }
}

export default App
