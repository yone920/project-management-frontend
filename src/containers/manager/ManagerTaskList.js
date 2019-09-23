import React from 'react'
import ManagerTask from '../../components/ManagerTask';
import NewTaskForm from '../manager/NewTaskForm'

class ManagerTaskList extends React.Component {

    state = {
        seen: false,
        tasks: []
    };

    togglePop = () => {
        this.setState({
            seen: !this.state.seen
        });
    };

    mapOverTasks = () => {
        return this.props.data.tasks.map((task) => {
            return <ManagerTask key={task.id} task={task}/>
        })

    }



    render() {
        return (
            <div className="tasklist-div">
                <h3>Tasks </h3>
                <table className="ui single fixed striped table">
                    <thead>
                        <tr>
                        <th>Task Name</th>
                        <th>Total Working Hours</th>
                        <th>Total Work Done</th>
                        <th>Task Progress</th>

                        </tr>
                    </thead>
                        {this.mapOverTasks()}
                </table>
                <div>
                    <button id="myBtn" className="create-project-button create-task-btn" onClick={this.togglePop}>Add Task</button>
                </div>
                {this.state.seen ? <NewTaskForm getNewTask={this.props.getNewTask} employees={this.props.employees} projectId={this.props.data.id} toggle={this.togglePop} /> : null}
            </div>
        )
    }
}

export default ManagerTaskList
