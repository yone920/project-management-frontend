import React from 'react'
import { Button, Form, Grid, Header, Segment, Label } from 'semantic-ui-react'

class Signup extends React.Component{
  state = {
    inviteToggle: "mag",
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    inviteCode: ""
  }
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
  handelSubmit = (event) => {
    let config = {
      method: "POST",
      headers: {
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body: JSON.stringify(this.state)
    }
    fetch("http://localhost:3000/signup", config)
      .then(rsp => rsp.json())
      .then(this.props.history.push('/'))
    event.target.reset()
  }

  ifEmployee = () => {
    if (this.state.inviteToggle === "emp") {
      return (
        <Form.Field>
          <input name="inviteCode" onChange={this.handleChange} placeholder='Invite Code' />
        </Form.Field>
      )
    }
  }

  render() {
    return(
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                 Sign Up
            </Header>
            <Form onSubmit={this.handelSubmit}>
              <Segment raised>
                <Form.Field>
                  <div>
                    <Label as='p' basic>
                      Sign Up as
                    </Label>
                    <input type="radio" id="manager" name="inviteToggle" value="mag" onChange={this.handleChange}/>
                    <label htmlFor="manager"> Manager </label>
                    <input type="radio" id="employee" name="inviteToggle" value="emp" onChange={this.handleChange}/>
                    <label htmlFor="employee"> Employee </label>
                  </div>
                </Form.Field>
                <Form.Field>
                  <input name="username" onChange={this.handleChange} placeholder='Username' />
                </Form.Field>
                <Form.Field>
                  <input name="firstName" onChange={this.handleChange} placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                  <input name="lastName" onChange={this.handleChange} placeholder='Last name' />
                </Form.Field>
                <Form.Field>
                  <input type="password" name="password" onChange={this.handleChange} placeholder='Password' />
                </Form.Field>
                <Form.Field>
                  <input type="password" name="confirmPassword" onChange={this.handleChange} placeholder='Confirm Password' />
                </Form.Field>
                {this.ifEmployee()}
                <Button type='submit'>Submit</Button>
              </Segment>
            </Form>
          </Grid.Column>
      </Grid>
    )
  }


}

export default Signup
