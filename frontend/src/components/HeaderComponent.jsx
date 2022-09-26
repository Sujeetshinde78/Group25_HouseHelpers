/* import { render } from '@testing-library/react';
import { useState } from 'react';  */
import React  from 'react'
import { Component } from 'react';
/* import { Modal } from 'react-bootstrap'; */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/Logo.png'


class HeaderComponent extends Component {
  /* constructor(props) {
    super(props)

    this.state = {
      customer: false,
      helper: false,

    }
  }

  onOpenModalEmp = () => {
    this.setState({ customer: true });
  };

  onOpenModalLogin = () => {
    this.setState({ helper: true });
  };

  onCloseModalEmp = () => {
    this.setState({ customer: false });
  };

  onCloseModalclose = () => {
    this.setState({ helper: false });
  }; */
  render() {
    /* const { customer, helper } = this.state; */
    return (
      <div>
        <Navbar bg='dark' className='navbar navbar-expand-lg navbar-dark' expand="lg">
          <Container>
            <Navbar.Brand href="/home"><img src={logo} width={200} height={50} alt='HouseHelpers'/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/about">About</Nav.Link>
                <NavDropdown title="Services" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/nanny">Nanny</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/maid">
                    Maid
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/gardener">Gardener</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/petcare">
                    Petcare
                  </NavDropdown.Item>
                </NavDropdown>
                {/* <Nav.Link href="/custlist">Customers</Nav.Link>
                <Nav.Link href="/helplist">Helpers</Nav.Link> */}
                {/* <Nav.Link href="/ordlist">Orders</Nav.Link> */}
              </Nav>
              <Nav>
              <NavDropdown title="Signup" id="basic-nav-dropdown" >
                  <NavDropdown.Item href='/custreg'>Customer</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/helpreg">
                    Helper
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Login" id="basic-nav-dropdown" >
                  <NavDropdown.Item href='/custlogin'>Customer</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/helplogin">
                    Helper
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/adminlogin">
                    Admin
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* <Modal open={customer} onClose={this.onCloseModalEmp}>
          <div className="modal-body">
            <h2>Login and Get <span>Started</span></h2>
            <span className="subtitle">Just fill in the form below</span>
            <form className="contact-form form-validate4" novalidate="novalidate">
              <div className="form-group">
                <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autocomplete="off" aria-required="true" />
              </div>
              <div className="form-group">
                <input type="password" name="pass" className="form-control" placeholder="Password" required="" autocomplete="off" aria-required="true" />
              </div>
              <input className="btn btn-md btn-primary btn-center" id="login_btn" type="button" value="Login" />
            </form>
          </div>
        </Modal> */}
      </div>
    )
  }
}

export default HeaderComponent