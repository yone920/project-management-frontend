import React from 'react'
import Tasklist from './tasklist';

class Project extends React.Component {

  mapOverPropject = () => {
      return this.props.employeeProjects.map((project) => {
          return(
              <div key={project.id} className="project-name-div">
                  <h3>{project.name}</h3>
                  <h5>Progress Report</h5>
                  <progress max={project.project_total_worktime} value={project.project_total_done}></progress>
                  <p>{project.description}</p>
                  <Tasklist updateTask={this.props.updateTask} username={this.props.username} data={project}/>
              </div>
          )
      })
  }

    render() {
      console.log(this.props);
        return (
            <div className="project-div">
                {this.mapOverPropject()}
            </div>
        )
    }
}

export default Project
