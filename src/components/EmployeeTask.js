import React, { Fragment } from 'react'


class Task extends React.Component {

    state = {
        id: this.props.task.id,
        hours_done: 0
    }

    handleChange = (event) => {
      // console.log(event.target.value);
        this.setState({
            hours_done: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.updateTask(this.state)
    }

    singleTask() {
            return(
                <tbody>
                    <tr>
                        <td>{this.props.task.name}</td>
                        <td>{this.props.task.total_working_time}</td>
                        <td>{this.props.task.total_working_done}</td>
                        <td>{this.props.employeeTask.hours_done}</td>
                        <td><progress max={this.props.task.total_working_time} value={this.props.task.total_working_done}></progress></td>
                        <td>
                            <form className="progress-form" onSubmit={this.handleSubmit}>
                                <input type="number" name="progress" value={this.state.hours_done} onChange={this.handleChange}></input>
                                <input type="submit" value="Update"></input>
                            </form>
                        </td>
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

export default Task
