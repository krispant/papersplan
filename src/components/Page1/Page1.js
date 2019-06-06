import React, { Component } from "react";

 
class Page1 extends Component {
  render() {
    return (
      <div>
        <h5><b>Why are you using this website?</b></h5>
        <p>To optimize your income tax benefits and Increase your ROI on tax investments</p>
 
 		<h5><b>What are you going to do on this website?</b></h5>
        <p>Study unbiased information, plan your income taxes to optimize benefits and maximise ROI while understanding and managing risks involved to create a strong financial base.</p>

        <h5><b>How are you going to to this?</b></h5>
        <p>In following steps,

        Step 1 - Claim all tax benefits on expeses, like HRA, LTA, Standard deduction, employment tax etc.															
		Step 2 - Learn all tax benefits of buying a house property, calculate optimum loan amount for you, which is an act of balance between minimal cost of borrowing through tax planning and maximising loan amount to get maximum rate of returns, while understanding and managing risks involved.															
															
		Step 3 - Caluculate income from capital gains or carry forward of capital loss, income from profession or business and other income.															
		Step 4 - Claim chapter VI A benefits as follows (i.e. tax benefits of 150,000/- and 50,000/- NPS tax benefit),															
				 A - Claim benefits on all expenses according to personal needs, like life insurnace, health insurance, children tution fees, medical expenses etc. 														
				 B - Refer to preference list created by us, chose how much percent of your remaining limit from 150,000 would you like to invest in debt investment and how much in equity. (For understanding difference between debt and equity please see our video)														
						I)    Debt investment - Like PF, PPF, Bank FD, Sukanya samridhhi scheme etc.													
						II)   Equity investment - Like ELSS, ULIP etc.													
						III) NPS (CCD 1) - For extra benefit of 50,000 above 150,000													
						IV) Infrastructure bonds (CCF) - For extra benefit of 20,000 above 150,000 + 50,000													
		</p>
		<ul>
			<li> Our aim is to study, eperience, analyze, organize and persent personal finance information.</li>
			<li> We present information as it is without any bias, so you can take an informed decision.</li>
			<li> In a series of complete personal financial planning information center, our first step is to present you with income tax information for individuals.</li>
			<li> Please note we are not income tax or investment advisors, we are merely an information center, we do not cross sell or advertise or suggest any financial products, in future we may build a fee based personal financial planning business, but for now are just conducting a research on how we can help tax payers plan and implement their taxes.</li>
			<li>We do not store your personal financial information, however you may opt to participate in our research by providing your financial information but this will not be shared with a third party.</li>
		</ul>

		<center><a href>YouTube Video On How to file ITR for salaried individuals</a></center>
			<br />
		<div className="row">

			<div className="col-6">
			
       	<b>Income Tax slabs for individuals</b>
       	<table className="table table-bordered"  style= {{ 'background':'lightgrey' }}>
       		<thead>  
                <tr>
                  <th>From</th>
                  <th><center>Upto</center></th>
                  <th><center>Income tax slab</center></th>
                  <th><center>Cess</center></th>
                  <th><center>Effective Slab</center></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td>-</td>
                  <td>250,000</td>
                  <td>0.00%</td>
                  <td>4.00%</td>
                  <td>0.00%</td>
                </tr>
                <tr>
                  <td>250,000</td>
                  <td>500,000</td>
                  <td>5.00%</td>
                  <td>4.00%</td>
                  <td>5.20%</td>
                </tr>
                <tr>
                  <td>500,000</td>
                  <td>1,00,0000</td>
                  <td>20.00%</td>
                  <td>4.00%</td>
                  <td>20.80%</td>
                </tr>
                <tr>
                  <td>10,00,000</td>
                  <td>Above</td>
                  <td>30.00%</td>
                  <td>4.00%</td>
                  <td>31.20%</td>
                </tr>
            </tbody>  
       	</table>
      </div>

<div />
			<div className="col-6">
			<div>
			<br /> 
			<center style= {{'background':'lightgrey' ,'float' : 'right'}}><p> <b>Rule of investments</b></p>									
							
							<p>	RISK = RETURNS</p>									
							<p>	Only 2 exceptions, </p>								
							<p>1) Time - Longer the time a person can hold his investment lesser is risk and better returns </p>									
							<p>2) Knowledge - Same investment opportunity can be very risky for someone and less risky for some other person .									
 			</p></center>
 			</div>
 			</div>
 			<br />

		</div>

		<br />
      </div>
    );
  }
}
 
export default Page1;
