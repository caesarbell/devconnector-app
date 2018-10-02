import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

export default class NavbarComponent extends Component {
    constructor(props) {
        super(props); 

        this.toggle = this.toggle.bind(this); 

        this.state = {
            isOpen: false
        }
    }


    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


  render() {
    return (
        <Navbar className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
            <div className="container">
                <NavbarBrand href="/">DevConnector</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="navbar-nav mr-auto">
                        <NavItem>
                            <NavLink className="nav-link" href="profiles.html">Developers</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="navbar-nav ml-auto">
                        <NavItem>
                            <NavLink className="nav-link" href="register.html">Sign Up</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" href="login.html">Login</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    )
  }
}
