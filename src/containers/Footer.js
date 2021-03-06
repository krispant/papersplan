import React, {Component} from 'react';


import Container from 'react-bootstrap/Container'

export default class Footer extends React.Component {
  render() {
    return (   
      
      <div>
 <div className="row" style={{'padding':'25px','background':' #212832','color':'#fff'}}>
<div className="col-md-6 col-sm-6" style={{'padding-left':'60px'}}>
<div>
<h4>Our Contact</h4>
<hr />
<p> 530 Test Test<br />Hadapsar <br />Hyd <br /><br />
     <i className="fa fa-phone" aria-hidden="true"><a href="tel:91-20-6727-8567" style={{'font-size':'15px','color':'#fff'}}> +91-99-9999-9999</a></i><br /><br / >
     <i className="fa fa-envelope" aria-hidden="true"><a href="mailto:feedback@papersplans.com" style={{'font-size':'15px','color':'#fff'}}> feedback@papersplans.com</a></i> <br /><br /> </p>
</div>
</div>
<div className="col-md-6 col-sm-6" style={{'border-left':'2px solid #cbc8c8','padding':'0 40px'}}>
<h4>Get in touch</h4>
<hr />


    <form id="myf" className="appnitro" method="post">
     <label for="fname">First Name</label>
    <input type="text" id="firstname"  className="form-control" style={{'color':'#000'}} name="firstname" placeholder="Your name.." required="" />

    <label for="lname">Last Name</label>
    <input type="text" id="lastname" className="form-control" style={{'color':'#000'}} name="lastname" placeholder="Your last name.." required="" />

    <label for="lname">Email</label>
    <input type="email" id="email" className="form-control" style={{'color':'#000'}} name="email" placeholder="Your email.." required="" />


    <label for="lname">Contact No</label>
    <input type="text" id="phone" className="form-control" style={{'color':'#000'}} name="phone" placeholder="Your phone no.." required="" />
    
    
    <label for="subject">Message</label>
    <textarea id="subject" name="subject" className="form-control" style={{'color':'#000'}} placeholder="Write something.." required=""></textarea><br />

    <input type="submit" value="Submit" className=" btn btn-primary"/>
    <div className="result" id="result" style={{'margin-top':'20px','color':'#FF0000','font-weight':'600'}}></div>
  </form>

</div>
</div>

<footer>
<div className="row">
<p style={{'text-align':'center','background':'#000','padding':'25px','color':'#fff'}}>Note: We are not tax or investment advisors or planners. We do not cross sale or advertise or advise any financial products, in future we aim to provide fee based unbiased information and planning services for our users. Currently we are conducting a research and we do not assume any liability on use of this website. <br /><br />By providing links to any other sites, we do not guarantee, approve, or endorse the information or products available on these sites.</p>
</div>
</footer>
</div>
    );
  }
}
