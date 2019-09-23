import React from 'react'


class CooworkerList extends React.Component {

    coworkersMap = () => {
        if(this.props.coworkers) {
            return this.props.coworkers.map((coworker) => {
                return (
                    <div key={coworker.id} className="cooworkers-info"> 
                    <img alt={coworker.name} src="/images/avatar/helen.jpg"></img>
                    <p>{coworker.name}</p>
                  </div>
                )
            })
        } 
    }


    render() {
        return (
            <div className="container-cooworker">
                Coworkers:
                {this.coworkersMap()}
            </div>
        )
    }
}

export default CooworkerList
