import React from 'react'
import { Row, Col, Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'

export class Login extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length >= 4) return 'success';
    else if (length > 0 && length < 4) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
	    <Col  xs={12} sm={12} id="content-login">
	      <form>
	        <FormGroup
	          controlId="formBasicText"
	          validationState={this.getValidationState()}
	        >
	          <FormControl
	            type="text"
	            value={this.state.value}
	            placeholder="Enter name"
	            onChange={this.handleChange}
	          />
	          <FormControl.Feedback />
	        </FormGroup>
	        <Button bsStyle="info">Login</Button>
	      </form>
	    </Col>
    )
  }
}