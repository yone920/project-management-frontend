import React, { Component } from "react";
import  '../../style/manager.css'

export default class NewProjectForm extends Component {

    state = {
        name: "",
        description: "",
        manager_id: this.props.managerId
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
        this.props.getNewProjectInfo(this.state)
    }

render() {
  return (
    <div id="myModal" className="modal">
        <div className="modal-content">

            <div className="modal-header">
                <span className="close" onClick={this.handleClick}>&times;</span>
                <h2>Create Project</h2>
            </div>
            <div className="modal-body">
                <div className="form-div">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.name} name="name"  onChange={this.handleChange} placeholder="Project name.." />
                        <input type="text" value={this.state.description} name="description"  onChange={this.handleChange} placeholder="Description.." />
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
