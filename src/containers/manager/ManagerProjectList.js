import React from 'react'
import ManagerProject from './ManagerProject';


class ManagerProjectList extends React.Component {

    render() {
        return (
            <div className="container-projects">
                <ManagerProject getNewTask={this.props.getNewTask} employees={this.props.data.employees} username={this.props.data.username} managerProjects={this.props.data.projects}/>
            </div>
        )
    }
}

export default ManagerProjectList
