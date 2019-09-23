import React from 'react'
import { Input, Menu } from 'semantic-ui-react'

class Navbar extends React.Component {

    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    getSearch = (event) => {
      console.log(event.target.value);
    }

    getClicked = (event) => {
      console.log(event);
    }

    render() {
        const { activeItem } = this.state
        return (

            <div className="container-navbar">
                <Menu pointing>
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                    <Menu.Item
                        name='Login'
                        active={activeItem === 'messages'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Signup'
                        active={activeItem === 'friends'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>

            </div>

        )
    }
}

export default Navbar
