import React from 'react'
import { Col, Button, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'

export class SendMessage extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      value: ''
    }
  }

  getValidationState () {
    const length = this.state.value.length
    if (length > 10) return 'success'
    else if (length > 5) return 'warning'
    else if (length > 0) return 'error'
    return null
  }

  handleChange (e) {
    this.setState({ value: e.target.value })
  }

  render () {
    return (
      <form>
        <FormGroup
          controlId='formBasicText'
          validationState={this.getValidationState()}
        >
          <ControlLabel>The message must be more then 10 letters...</ControlLabel>
          <FormControl
            componentClass='textarea'
            type='text'
            value={this.state.value}
            placeholder='Enter text'
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <Button type='submit' bsStyle='info'>Send</Button>
        </FormGroup>
      </form>
    )
  }
}
