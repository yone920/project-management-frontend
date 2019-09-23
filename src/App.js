import React from 'react';
import './App.css';
import Employee from './containers/employee';
import Manager from './containers/manager';
import Frontpage from './containers/frontpage';
// import Login from './components/login';
import Signup from './components/signup'
import FourOFour from './components/fourOfour';
import { Switch, Route } from 'react-router-dom'



class App extends React.Component {
  state = {
    username: ""
  }
  componentDidMount() {
    if (localStorage.token) {
      let config = {
        headers: {
          Authorization: localStorage.token
        }
      }
      fetch('http://localhost:3000/profile', config)
      .then(res => res.json())
      .then(data => {
        this.setState({username: data.username})
      })
    }
  }
  render() {
    if (!this.state.username && localStorage.token) {
      return <h1>App Loading</h1>
    }
    return (
      <Switch>
        <Route
          path="/employee/:username"
          render={(routerProps) => <Employee {...routerProps} username={this.state.username} />}
           />
         <Route
           path="/manager/:username"
           render={(routerProps) => <Manager {...routerProps} username={this.state.username} />}
            />
        <Route path="/signup" component={Signup} />
        <Route exact path="/" component={Frontpage} />
        <Route component={FourOFour}/>
      </Switch>
    );
  }
}

export default App;
