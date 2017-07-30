import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar';
import Gallery from './gallery';
import Logo from './logo';
import About from './about';
import Footer from './footer';
import Contact from './contact';
import Market from './market';
import Youtube from './youtube';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const Home = () =>
<div>
<Logo />
<Navbar />
<About />
<Footer />
</div>

const Gallery1 = () =>
<div>
<Logo />
<Navbar />
<Gallery />
<Footer />
</div>

const Contact1 = () =>
<div>
<Logo />
<Navbar />
<Contact />
</div>

const Market1 = () =>
<div>
<Logo />
<Navbar />
<Market />
<Footer />
</div>

const Youtube1 = () =>
<div>
<Logo />
<Navbar />
<Youtube />
<Footer />
</div>

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path='/' component={Home}/>
        <Route exact path='/gallery' component={Gallery1}/>
        <Route exact path='/contact' component={Contact1}/>
        <Route exact path='/market' component={Market1}/>
        <Route exact path='/youtube' component={Youtube1}/>
      </div>
      </Router>
    );
  }
}

export default App;
