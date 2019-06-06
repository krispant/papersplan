import React, {Component} from 'react'
import Page1 from "../../components/Page1/Page1"

class Home extends Component {
 
  render() {
   

    return (
      <div className="home mt-5">
        <div className="header">
        <span className="alignRight"><a href="" data-toggle="tooltip" title="feedback@papersplans.com">contact us</a></span>
         <center><h2 className="mb-3">Paper$Plan</h2></center>
          <div className="wrapper"><center>Personal finance information center and do it yourself planning tool. </center></div>
          <br />
          <div className="row">
          <div className="col-1"> </div>
          <div className="col-10"> 

          <center> 
             <table>
               <tr>
                  <th colSpan="7"><center>Benefit of tax planning</center></th>
               </tr>
                <tr>
                  <th></th>
                  <th><center>Every year investment</center></th>
                  <th><center>Start age</center></th>
                  <th><center>Compounded ROI (i.e. CAGR)</center></th>
                  <th><center>Retirement age</center></th>
                  <th><center>Fund value at the time of retirement</center></th>
                  <th><center>Difference at the time of retirement</center></th>
                </tr>
                <tr>
                  <td>Without plan</td>
                  <td>100,000</td>
                  <td>25</td>
                  <td>9%</td>
                  <td>55</td>
                  <td>14,857,522</td>
                  <td rowSpan="2"><center>3,236,821</center></td>
                </tr>
                <tr>
                  <td>With plan</td>
                  <td>100,000</td>
                  <td>25</td>
                  <td>10%</td>
                  <td>55</td>
                  <td>14,857,522</td>
                </tr>
              </table>  
          </center> 
         </div>
         </div>
       
          <div className="table-footer"><center>While it is unpredictable which investment will give higher returns, but we can reduce the cost, manage risks and get better results.</center></div>
        </div>
        <br />
        <div className="body">
          <div className="body-first"><center> "If you are unwilling to take risks, then you have not found a way to manage risks, with right information and experienced guidance you can learn to manage risks and maximise your potential."</center></div>
          <br />
          <div>
          <Page1 />
          </div>
        </div>

        <div className="footer"> 
          <div className="row body-first"> 
             <div className="col-7"><center>You can use our "Do It Yourself" planning tool</center></div>
             <div className="col-4"><right><a href="/TaxCalculation">Plan your taxes yourself for FY 2019-20</a></right></div>
             </div>
             <br />
             <div className="body-note"><p>Note: We are not tax or investment advisors or planners. We do not cross sale or advertise or advise any financial products, in future we aim to provide fee based unbiased information and planning services for our users. Currently we are conducting a research and we do not assume any liability on use of this website.</p></div>
             <div className="body-last"><center>By providing links to any other sites, we do not guarantee, approve, or endorse the information or products available on these sites.</center></div>
             <br />
        </div>
      </div>  
         
    )
  }
}

export default Home
