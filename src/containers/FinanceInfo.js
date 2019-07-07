import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import logo from './logo.jpg'; 
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'

export default class FinanceInfo extends React.Component {
  render() {
    return (   
      <div>
      <br />
      <center>No cross sale, no advertisement, no commision, no advise. Just clear and unbiased information</center>


      <div className="service-div">
           <div className="row">
             
              <div className="col-md-4 col-sm-4">
              <div className="sec">
               <h3> Income Management</h3>
               </div>
              </div> 
             
              <div className="col-md-4 col-sm-4">
              <div className="sec">
               <h3>Tax and loan management</h3>
               </div>
              </div>

                <div className="col-md-4 col-sm-4">
              <div className="sec">
               <h3>Insurance management</h3>
               </div>
              </div>
              
           </div>
           </div>
           <div className="service-div1">
           <div className="row">
             
              <div className="col-md-4 col-sm-4 sec1">
              <div className="sec">
               <h3> Budgeting</h3>
               </div>
              </div> 
             
              <div className="col-md-4 col-sm-4">
              <div className="sec">
               <h3>Savings management</h3>
               </div>
              </div>

                <div className="col-md-4 col-sm-4">
              <div className="sec">
               <h3>Investment management</h3>
               </div>
              </div>
              
           </div>

          </div> 

          </div>
      
    );
  }
}
