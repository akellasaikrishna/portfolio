import React, {Component} from 'react';

class Youtube extends Component{
  render(){
    return(
      <div className="container">
      <div className="embed-responsive embed-responsive-4by3">
          <iframe title="Youtube Page" width="300" height="200" src="https://www.youtube.com/embed/dU1iTKCNpSQ" frameborder="0" allowfullscreen></iframe>
      </div>
      <div>
      <a href="https://www.youtube.com/channel/UCWScXFXrWVcMYMh6Xw-4-XA/" target="_blank" rel="noreferrer noopener"><h1 className="ytbtn">Click here to visit YouTube channel</h1></a>
      </div>
      </div>
    );
  }
}

export default Youtube;
