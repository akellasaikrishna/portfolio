import React, {Component} from 'react';

class About extends Component{
  render(){
    return(
      <div className="container">
            <div className="col-lg-4">
               <img className="profile" src="img/about/about.jpg" alt="myimg"/>
               <h1 className="name">SAI KRISHNA AKELLA</h1>
            </div>
            <div className="col-lg-7">
            <h1 className="ab">ABOUT</h1>
            <div className="description">
            <p>
            My name is Sai Krishna and I am a Content creator, web developer, photo and video editor. Along with all
            those PC building and photography has always been my best loved hobbies.
            </p>
            <p>
            ***
            </p>
            <p>
            This website came into existence from all my love towards technologies and also through interest towards
            providing people with content and also help with differant technology related stuff, queries they required.
            </p>
            <p>
            ***
            </p>
            <p>
            Currently Ian uploading content on my YouTube channel "GORANDOMKRISHNA". You can find the page intro
            and also link to the channel and my content in the navigation bar.
            </p>
            <p>
            ***
            </p>
            <p>
            Also in this website you can find navigation to an e-market containing technology related products
            which you can buy through direct links. Also I will be updating this website every once in a while
            with new products.
            </p>
            <p>
            ***
            </p>
            <p>
            You can find links to all my social
            profiles through this website.
            </p>
            </div>
            </div>
      </div>
    );
  }
}

export default About;
