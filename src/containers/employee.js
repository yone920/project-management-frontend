import React from 'react'
// import Navbar from '../components/navbar';
import Sidebar from './employee/sidebar';
import  '../style/employee.css'
import ProjectList from './employee/projectList';

class Employee extends React.Component {

  state = {
      employee_data: {},
      loaded: false
  }

  componentDidMount() {
    if (!localStorage.token) {
      this.props.history.push('/')
    }
    let config = {
      headers: {
        Authorization: localStorage.token
      }
    }
    fetch(`http://localhost:3000/employees/${this.props.match.params.username}`, config)
      .then(res => res.json())
      .then(data => {
        this.setState({employee_data: data, loaded: true})
      })
  }

  updateTask = (updatedData) => {
    let config = {
      method: "PATCH",
      headers: {
        'Content-Type':'application/json',
        'Authorization': localStorage.token,
        'Accept':'application/json'
      },
      body: JSON.stringify(updatedData)
    }
    fetch(`http://localhost:3000/employee_tasks/${updatedData.id}`, config)
      .then(rsp => rsp.json())
      .then(data => this.setState({
        employee_data: data
      }))
  }


  render() {

    if (!this.state.loaded) {
      return "loading"
    }
    return (
      <div className="employee-container">
        <div className="container-employee-sidebar-project">
          <Sidebar employee={this.state.employee_data}/>
          <ProjectList updateTask={this.updateTask} data={this.state.employee_data}/>
        </div>
      </div>
    )
  }
}

export default Employee
