import React, {Component} from 'react';

class Shop extends Component{
  render(){
    return(
      <div className="container">
        <div className="col-lg-4">
          <img src="img/shop/pcmech.png" alt="pcmech"/>
        </div>
        <div className="col-lg-7">
          <div className="ab">
            <div className="description">
              <p>
              I am a professional PC builder profecient in both PC hardware and software.
              </p>
              <p>
              ***
              </p>
              <p>
              My Hardware works include building custom Computers like complete Water Cooled Computers,
              Liquid Cooled Computers, Gaming Computers, Complete RGB Builds, Small Form Factor Computers and others.
              </p>
              <p>
              ***
              </p>
              <p>
              My Software works include Software Troubleshooting, Rectifying Software Issues in Operating System,
              Solving Driver Specific Issues, Operating System installations, Dual Booting and others.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <img className="shopimg" src="img/shop/watercooledpc.jpg" alt="water"/>
        </div>
        <div className="col-lg-3">
          <h1>COMPLETE WATER COOLED PC</h1>
        </div>
        <div className="col-lg-8">
          <img className="shopimg" src="img/shop/liquidcooledpc.jpg" alt="liquid"/>
        </div>
        <div className="col-lg-3">
          <h1>COMPLETE LIQUID COOLED PC</h1>
        </div>
        <div className="col-lg-8">
          <img className="shopimg" src="img/shop/sff.png" alt="small"/>
        </div>
        <div className="col-lg-3">
          <h1>SMALL FORM FACTOR PC</h1>
        </div>
        <div className="col-lg-8">
          <img className="shopimg" src="img/shop/win_ubuntu.jpg" alt="OS"/>
        </div>
        <div className="col-lg-3">
          <p className="matter">Operating system related tweaks and troubleshootings are done by
          identifying the specific needs or the problems.
          </p>
        </div>
      </div>
    );
  }
}

export default Shop;
