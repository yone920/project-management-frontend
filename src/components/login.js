import React from 'react'
import { Button, Form, Header, Segment } from 'semantic-ui-react'

class Login extends React.Component {

  state = {
    username: "",
    password: "",
    account: ""
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
    fetch("http://localhost:3000/login", config)
      .then(rsp => rsp.json())
      .then(data => {if (data.token){
        localStorage.token = data.token
        this.redirect()
      }})
    event.target.reset()
  }

  redirect = () => {
    if (this.state.account === "emp") {
      this.props.routingProps.history.push(`/employee/${this.state.account+this.state.username}`)
    } else if (this.state.account === "mag") {
      this.props.routingProps.history.push(`/manager/${this.state.account+this.state.username}`)
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
      return (
        <div>
          <Header as='h2' color='teal' textAlign='center'>
               Log-in to your account
          </Header>
          <Form size='large' onSubmit={this.handelSubmit}>
            <Segment raised>
              <Form.Input
                fluid
                name="username"
                icon='user'
                iconPosition='left'
                placeholder='Username'
                onChange={this.handleChange}
              />
              <Form.Input
                  fluid
                  name="password"
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  onChange={this.handleChange}
              />
              <Form.Field>
                <div>
                  <input type="radio" id="manager" name="account" value="mag" onChange={this.handleChange}/>
                  <label htmlFor="manager"> Manager </label>
                  <input type="radio" id="employee" name="account" value="emp" onChange={this.handleChange}/>
                  <label htmlFor="employee"> Employee </label>
                </div>
              </Form.Field>
              <Button color='teal' fluid size='large'>
                  Login
              </Button>
            </Segment>
          </Form>
        </div>
      )
  }
}

export default Login
