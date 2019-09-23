import React, { Fragment, Component } from 'react'


class Task extends React.Component {

  state = {
    progress: 0
  }

  handleChange = (event) => {
    this.setState({
      progress: event.target.value
    })
  }

  handleSubmit = event => {
      event.preventDefault()
      // let id = this.props.task.id
      // console.log(hoursDone);
      // fetch(`http://localhost:3000/tasks/${id}`, {
      //     method: 'PATCH',
      //     headers: {'Content-Type': 'application/json'},
      //     body: JSON.stringify(
      //
      //         total_working_done: this.state.progress
      //     )
      // })


  }

  singleTask = () => {
    return(
      <tbody>
        <tr>
          <td>{this.props.task.name}</td>
          <td>{this.props.task.total_working_time}</td>
          <td>{this.props.task.total_working_done}</td>
          <td><progress max="100" value="80"></progress></td>
          <td>
            <form className="progress-form" onSubmit={this.handleSubmit}>
              <input type="number" name="progress" value={this.state.progress} onChange={this.handleChange}></input>
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
