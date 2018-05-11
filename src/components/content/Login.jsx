import React from 'react'
import { Col, Button, FormGroup, FormControl, ProgressBar } from 'react-bootstrap'

export class Login extends React.Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      value: '',
      disabled: true,
      progress: false,
      now: 0
    }
  }

  getValidationState () {
    const length = this.state.value.length
    if (length >= 4) {
      return 'success'
    } else if (length !== 0 && length < 4) return 'warning'
    return null
  }

  handleChange (e) {
    this.setState({ value: e.target.value }, () => {
      if (this.state.value.length >= 4) this.setState({ disabled: false })
      else this.setState({ disabled: true })
    })
  }

  handleSubmit (e) {
    let i = 100
    let now = this.state.now
    e.preventDefault()
    this.setState({ progress: true })
    while (i > 0) {
      setTimeout(() => {
        this.setState({ now: this.state.now + 1 })
        if (this.state.now > 99) {
          setTimeout(() => {
            this.setState({
              progress: false
            })
            this.props.changeLoginState(this.state.value)
            window.localStorage.user = this.state.value
            window.localStorage.logined = true
          }, 1000)
        }
      }, 100 + now)
      i--
    }
  }

  render () {
    return (
      !this.props.logined
        ? !this.state.progress
          ? <Col xs={12} sm={12} id='content-login'>
            <form>
              <FormGroup controlId='formBasicText' validationState={this.getValidationState()}>
                <FormControl
                  type='text'
                  value={this.state.value}
                  placeholder='Enter name'
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
              </FormGroup>
              <Button type='submit' bsStyle='info' disabled={this.state.disabled} onClick={this.handleSubmit}>Login</Button>
            </form>
          </Col>
          : <ProgressBar active style={{height: '5px'}} bsStyle='info' now={this.state.now} label={`${this.state.now}%`} srOnly />
        : <div>Login successful!</div>
    )
  }
}
