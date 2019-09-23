import React, { Fragment } from 'react'


class ManagerTask extends React.Component {
    
    state = {
        progress: 0
    }

    handleChange = (event) => {
        this.setState({
            progress: event.target.value
        })
    }

    singleTask() {
            return(
                <tbody>
                    <tr>
                        <td>{this.props.task.name}</td>
                        <td>{this.props.task.total_working_time}</td>
                        <td>{this.props.task.total_working_done}</td>
                        <td><progress max="100" value="10"></progress></td>
                    </tr>
                </tbody>
            )
    }

    render() {
        return (
            <Fragment >
                {this.singleTask()}
            </Fragment>
        )
    }
}

export default ManagerTask