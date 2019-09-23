import React from 'react'
// import Navbar from '../components/navbar';
import ManagerSidebar from './manager/ManagerSidebar';
import  '../style/employee.css'
import  '../style/manager.css'
import ManagerProjectList from './manager/ManagerProjectList';

class Manager extends React.Component {

  state = {
    manager_data: {},
    loaded: false
  }

  componentDidMount() {
    if (!localStorage.token) {
      this.props.history.push('/')
      return
    }
    let config = {
      headers: {
        Authorization: localStorage.token
      }
    }
    fetch(`http://localhost:3000/managers/${this.props.match.params.username}`, config)
      .then(res => res.json())
      .then(data => {
        console.log(data);
          this.setState({manager_data: data, loaded: true})
      })
  }
  getNewTask = (newTaskData) => {
    let config = {
      method: "POST",
      headers: {
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body: JSON.stringify(newTaskData)
    }
    fetch("http://localhost:3000/tasks", config)
      .then(rsp => rsp.json())
      .then(data => this.setState({
        manager_data: data
      }))
  }
  getNewProjectInfo = (newProjectData) => {
    let config = {
      method: "POST",
      headers: {
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body: JSON.stringify(newProjectData)
    }
    fetch("http://localhost:3000/projects", config)
      .then(rsp => rsp.json())
      .then(data => this.setState({
        manager_data: data
      }))
  }
  render() {
    if (!this.state.loaded) {
      return "loading"
    }
    return (
      <div className="employee-container">
        <div className="container-employee-sidebar-project">
          <ManagerSidebar getNewProjectInfo={this.getNewProjectInfo} manager={this.state.manager_data}/>
          <ManagerProjectList getNewTask={this.getNewTask} data={this.state.manager_data}/>
        </div>
      </div>
    )
  }
}

export default Manager
