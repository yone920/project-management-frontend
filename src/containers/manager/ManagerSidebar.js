import React from 'react'
import CooworkerList from '../../components/cooworkerlist';
import NewProjectForm from './NewProjectForm'

class ManagerSidebar extends React.Component {

    state = {
        seen: false
    };

    togglePop = () => {
        this.setState({
            seen: !this.state.seen
        });
    };

    render() {
        return (
            <div className="container-sidebar">
                <div className="employee-name">
                <img alt={this.props.manager.name} src="/images/avatar/helen.jpg"></img>
                    <h3>{this.props.manager.name}</h3>
                </div>
                <div className="create-button-div">
                    <button id="myBtn" className="create-project-button" onClick={this.togglePop}>Create Project</button>
                </div>
                {this.state.seen ? <NewProjectForm getNewProjectInfo={this.props.getNewProjectInfo} managerId={this.props.manager.id} toggle={this.togglePop} /> : null}
                <CooworkerList coworkers={this.props.manager.employees}/>
            </div>
        )
    }
}

export default ManagerSidebar
