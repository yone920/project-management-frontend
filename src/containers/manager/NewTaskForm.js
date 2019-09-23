import React, { Component } from "react";
import Checkbox from '../../components/checkbox'

export default class NewTaskForm extends Component {

    state = {
        name: "",
        total_working_time: "",
        checked_employee: [],
        project_id: this.props.projectId
    }

    addEmployee = (employee_id) => {
        this.setState({
            checked_employee: [ ...this.state.checked_employee, employee_id ]
        })
    }

    removeEmployee = (employee_id) => {
        this.setState({
            checked_employee: this.state.checked_employee.filter(emp => emp !== employee_id)
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = (event) => {
        this.props.toggle();
    };

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.getNewTask(this.state)
    }

    checkbox = () => {
        return this.props.employees.map((employee) => {
            return(
               <Checkbox key={employee.id} employee={employee} addEmployee={this.addEmployee} removeEmployee={this.removeEmployee}/>
            )
        })

    }


    render() {
        return (
            <div id="myModal" className="modal">
                <div className="modal-content">

                    <div className="modal-header">
                        <span className="close" onClick={this.handleClick}>&times;</span>
                        <h2>Create Task</h2>
                    </div>
                    <div className="modal-body">
                        <div className="form-div">
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" value={this.state.name} name="name"  onChange={this.handleChange} placeholder="Task name.." />
                                <input type="number" value={this.state.description} name="total_working_time"  onChange={this.handleChange} placeholder="Total Working Time.." />
                                {this.checkbox()}
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                    <div className="modal-footer">
                    </div>
                </div>
        </div>
        );
 }
}
