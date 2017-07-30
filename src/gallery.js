import React, {Component} from 'react';

class Gallery extends Component{
  render(){
    return(
      <div className="container">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img className="gal_img" src="Img/gallery/1.jpg" alt="sample1"/>
          </div>
          <div className="item">
            <img className="gal_img" src="Img/gallery/2.jpg" alt="sample2"/>
          </div>
          <div className="item">
            <img className="gal_img" src="Img/gallery/3.jpg" alt="sample3"/>
          </div>
          <div className="item">
            <img className="gal_img" src="Img/gallery/4.jpg" alt="sample4"/>
          </div>
          <div className="item">
            <img className="gal_img" src="Img/gallery/5.jpg" alt="sample5"/>
          </div>
          <div className="item">
            <img className="gal_img" src="Img/gallery/6.jpg" alt="sample6"/>
          </div>
          <div className="item">
            <img className="gal_img" src="Img/gallery/7.jpg" alt="sample7"/>
          </div>
          <div className="item">
            <img className="gal_img" src="Img/gallery/8.jpg" alt="sample8"/>
          </div>
        </div>
        <div>
        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
        </div>
      </div>
    </div>
    );
  }
}

export default Gallery;
