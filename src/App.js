import React, { Component } from 'react'
import './App.css'

//components
import { Grid } from 'react-bootstrap'
import { Header } from './components/header'
import { Content } from './components/content'

class App extends Component {
  render() {
    return (
      <Grid>
        <Header/>
        <Content/>
      </Grid>
    )
  }
}

export default App;
