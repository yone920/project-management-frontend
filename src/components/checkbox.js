import React from 'react'

class Checkbox extends React.Component {

    state = {
        checked: false
    }

    handleChange = (event) => {
        this.setState({
            id: this.state.id,
            checked: !this.state.checked
        }, this.updateForm)

    }

    updateForm = () => {
        if (this.state.checked) {
            this.props.addEmployee(this.props.employee.id)
        } else {
            this.props.removeEmployee(this.props.employee.id)
        }
    }


    render() {
        return (
            <div>
                <input type="checkbox" checked={this.state.checked} value={this.props.employee.id} id={this.props.employee.name} name={this.props.employee.name}  onChange={this.handleChange}></input>
                <label htmlFor={this.props.employee.name}>{this.props.employee.name}</label>
            </div>
        )
    }
}

export default Checkbox
