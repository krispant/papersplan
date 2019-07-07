import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import logo from './logo.jpg'; 
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'

export default class HeaderNavigation extends React.Component {

constructor() {
    super();

    this.state = {
      activeKey: '1'
    }
  }


 handleSelect(eventKey) {
    this.setState({
      activeKey : eventKey
      }); 
  }


  render() {
    return (   
      
      <Navbar className="navBarClr" collapseOnSelect expand="sm">
         <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="270"
              height="70"
              className="d-inline-block align-center padding-50-left"

            />
          </Navbar.Brand> 
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto" activeKey={this.state.activeKey} onSelect={k => this.handleSelect(k)}>
         <Nav.Item className="padding-20-right">
          <Nav.Link eventKey="1" href="/">Home</Nav.Link>
          </Nav.Item>
          <NavDropdown eventKey="2"  title="Services" id="collasible-nav-dropdown padding-20-right">
          <NavDropdown.Item href="/TaxCalculation">Do it your self income tax planning tool</NavDropdown.Item>
         {/* <NavDropdown title="Personal finance information center" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/FinanceInfo">Do it your self income tax planning tool</NavDropdown.Item>

          </NavDropdown> */}
       
        <NavDropdown.Item href="/FinanceInfo">Personal finance information center</NavDropdown.Item>
      </NavDropdown>
       <Nav.Item className="padding-20-right">
        <Nav.Link   eventKey="3" href="#aboutUs">About us</Nav.Link>
         </Nav.Item>
          <Nav.Item className="padding-20-right">
         <Nav.Link   eventKey="4" href="/ContactUs">Contact us</Nav.Link>
          </Nav.Item>
           <Nav.Item className="padding-20-right">
         <Nav.Link  eventKey="5" href="/Help">Help</Nav.Link>
          </Nav.Item>
      </Nav> 
       </Navbar.Collapse>

        </Navbar>
      
    );
  }
}
