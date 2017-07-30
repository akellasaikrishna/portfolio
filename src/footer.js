import React, {Component} from 'react';

class Footer extends Component{
  render(){
    return(
      <div className="panel panel-inverse">
        <div className="panel-footer box">Contact details</div>
        <p className="link">
          <a href="/contact"><img src="img/contact.png" alt="contact.jpg"/></a>
        </p>
      </div>
    );
  }
}

export default Footer;
