import React from 'react'
import CooworkerList from '../../components/cooworkerlist';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="container-sidebar">
                <div className="employee-name">
                <img alt={this.props.employee.name} src="/images/avatar/helen.jpg"></img>
                    <h3>{this.props.employee.name}</h3>
                    <p>{this.props.employee.username}</p>
                </div>
                <div className="manager-name">
                    <p>Manager:</p>
                    <h3>{this.props.employee.manager.name}</h3>

                </div>
                <CooworkerList coworkers={this.props.employee.coworkers}/>
            </div>
        )
    }
}

export default Sidebar
