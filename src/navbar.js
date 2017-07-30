import React, {Component} from 'react';

class Navbar extends Component{
  render(){
    return(
      <nav className="navbar navbar-inverse">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
           <span className="sr-only">Toggle navigation</span>
           <span className="icon-bar"></span>
           <span className="icon-bar"></span>
           <span className="icon-bar"></span>
           <span className="icon-bar"></span>
     </button>
      </div>

      <div className="collapse navbar-collapse">
        <div className="navbar-header">
          <h3 className="brand">MY PORTFOLIO</h3>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><a href="/">Home</a></li>
          <li onclick="this.blur()"><a href="/gallery">Instagram</a></li>
          <li onclick="this.blur()"><a href="/youtube">YouTube</a></li>
          <li onclick="this.blur()"><a href="/market">Market</a></li>
          <li className="dropdown">
            <a href="" className="btn btn-inverse dropdown-toggle" type="button" data-toggle="dropdown">Direct Social Links  <span className="caret"></span></a>
            <ul className="dropdown-menu">
              <li><a href="http://www.instagram.com/askrishna96/" target="_blank" rel="noreferrer noopener">Instagram<img className="dropicons" src="img/insta.png" alt="instagram.jpg"/></a></li>
              <li className="divider"></li>
              <li><a href="https://plus.google.com/u/2/109440565943174760322/" target="_blank" rel="noreferrer noopener">Google+<img className="dropicons" src="img/googleplus.png" alt="googleplus.jpg"/></a></li>
              <li className="divider"></li>
              <li><a href="https://www.youtube.com/channel/UCWScXFXrWVcMYMh6Xw-4-XA/" target="_blank" rel="noreferrer noopener">YouTube<img className="dropicons" src="img/youtube.png" alt="youtube.jpg"/></a></li>
              <li className="divider"></li>
              <li><a href="https://www.linkedin.com/in/sai-krishna-akella-233641102/" target="_blank" rel="noreferrer noopener">LinkedIn<img className="dropicons" src="img/linkedin.png" alt="linkedin.jpg"/></a></li>
              <li className="divider"></li>
              <li><a href="https://www.facebook.com/profile.php?id=100003710533766/" target="_blank" rel="noreferrer noopener">Facebook<img className="dropicons" src="img/facebook.png" alt="facebook.jpg"/></a></li>
            </ul>
          </li>
        </ul>
      </div>
  </nav>
    );
  }
}

export default Navbar;
