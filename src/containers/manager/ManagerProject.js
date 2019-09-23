import React from 'react'
import ManagerTasklist from './ManagerTaskList';

class ManagerProject extends React.Component {

    mapOverPropject = () => {
        // return this.props.data.manager.projects.map((project) => {
            if(this.props.managerProjects) {
                return this.props.managerProjects.map((project) => {
                    return(
                        <div key={project.id} className="project-name-div">
                            <h3>{project.name}</h3>
                            <h5>Progress Report</h5>
                            <progress max="100" value="80"></progress>
                            <p>{project.description}</p>
                            <ManagerTasklist getNewTask={this.props.getNewTask} employees={this.props.employees} username={this.props.username} data={project}/>
                        </div>
                    )
                })
            }
    }

    render() {
        return (
            <div className="project-div">
                {this.mapOverPropject()}
            </div>
        )
    }
}

export default ManagerProject
