import React, {Component} from 'react'
import Page1 from "../../components/Page1/Page1"
import ContactUs from "../../containers/ContactUs"
import Table from 'react-bootstrap/Table'
import logo from './banner.jpg'; 

class Home extends Component {
 
  render() {
   

    return (
      <div>
     <div className="container-fluid"> 
      <div className="home mt-2">
        <div className="header">
       
        <center>
            <img
              alt=""
              src={logo}
              height="20"
            />
            </center>
          <div><center>Personal finance information center and do it yourself planning tool. </center></div>
    
          <div className="service-div">
           <div className="row">
             
              <div className="col-md-6 col-sm-6">
              <div className="sec">
               <h3> <a href="/TaxCalculation">Do it yourself income tax planning tool</a></h3>
               </div>
              </div> 
             
              <div className="col-md-6 col-sm-6">
              <div className="sec">
               <h3><a href="/FinanceInfo">Personal finance information center</a></h3>
               </div>
              </div>
              
           </div>
          </div> 


          <div className="row">
          <div className="col-md-4 col-sm-4"> 

        <table className="table table-bordered first"  style= {{ 'background':'rgba(40, 167, 69, 0.25)' }}>
          <thead>
                <tr>
                  <th className="padding0.75" colSpan="5"><center>Income Tax slabs for individuals</center></th>
                </tr>    
                <tr>
                  <th className="padding0.75"><center>From</center></th>
                  <th className="padding0.75"><center>Upto</center></th>
                  <th className="padding0.75"><center>Income tax slab</center></th>
                  <th className="padding0.75"><center>Cess</center></th>
                  <th className="padding0.75"><center>Effective Slab</center></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td><center>-</center></td>
                  <td><center>250,000</center></td>
                  <td><center>0.00%</center></td>
                  <td><center>4.00%</center></td>
                  <td><center>0.00%</center></td>
                </tr>
                <tr>
                  <td><center>250,000</center></td>
                  <td><center>500,000</center></td>
                  <td><center>5.00%</center></td>
                  <td><center>4.00%</center></td>
                  <td><center>5.20%</center></td>
                </tr>
                <tr>
                  <td><center>500,000</center></td>
                  <td><center>1,00,0000</center></td>
                  <td><center>20.00%</center></td>
                  <td><center>4.00%</center></td>
                  <td><center>20.80%</center></td>
                </tr>
                <tr>
                  <td><center>10,00,000</center></td>
                  <td><center>Above</center></td>
                  <td><center>30.00%</center></td>
                  <td><center>4.00%</center></td>
                  <td><center>31.20%</center></td>
                </tr>
            </tbody>  
        </table>
          </div>
          <div className="col-md-4 col-sm-4"> 
              <table className="second table table-bordered"  style= {{ 'background':'rgba(40, 167, 69, 0.25)' }}>
               <thead>
               <tr>
                  <th colSpan="3"><center>Benefit of tax planning</center></th>
               </tr>
                <tr>
                  <th></th>
                  <th><center>Without plan</center></th>
                  <th><center>With plan</center></th>
                </tr>
              </thead>
              <tbody>
                <tr>  
                  <td>Every year investment</td>
                  <td>100,000</td>
                  <td>100,000</td>
                </tr>
                <tr>
                  <td>Start age</td>
                   <td>25</td>
                   <td>25</td>
                </tr>
                <tr>   
                  <td>Compounded ROI (i.e. CAGR)</td>
                   <td>9%</td>
                   <td>10%</td>
                </tr>
                <tr>   
                  <td>Retirement age</td>
                  <td>55</td>
                  <td>55</td>
                </tr>  
                <tr>
                  <td>Fund value at the time of retirement</td>
                   <td>14,857,522</td>
                   <td>18,094,342</td>
                </tr>
                <tr>   
                  <td>Difference at the time of retirement</td>
                   <td colSpan="2"><center>3,236,821</center></td>
                </tr>
             
              </tbody>
              </table>  

         </div>
         <div className="col-md-4 col-sm-4"> <center  style= {{ 'background':'rgba(40, 167, 69, 0.25)' }}><p> <b>Rule of investments</b></p>                  
              
              <p> RISK = RETURNS</p>                  
              <p> Only 2 exceptions, </p>               
              <p>1) Time - Longer the time a person can hold his investment lesser is risk and better returns </p>                  
              <p>2) Knowledge - Same investment opportunity can be very risky for someone and less risky for some other person .                  
      </p>
      <br />
      </center>

      </div>
         </div>
       <br />
          <div className="table-footer"><center>While it is unpredictable which investment will give higher returns, but we can reduce the cost, manage risks and get better results.</center></div>
        </div>
        <br />
        <div className="body">
          <div className="body-first"><center> "If you are unwilling to take risks, then you have not found a way to manage risks, with right information and experienced guidance you can learn to manage risks and maximise your potential."</center></div>
          <br />
        </div>
      </div>  
    </div>   
    <ContactUs />
    </div>  
    )
  }
}

export default Home