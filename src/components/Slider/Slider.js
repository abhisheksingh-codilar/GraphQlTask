import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery';

import './Slider.css'

export default class Slider extends Component {
  render() {

    const {img}=this.props;
    const temp=[];

    img.map((val)=>{
      temp.push({original:val.thumbnail.url,thumbnail:val.thumbnail.url})
    })

    return (
      <>
     <div className="banner-container">

        <div className="carousl">
        <ImageGallery items={temp}  showBullets={true}></ImageGallery>
        </div>

      </div>
      </>
    )
  }
}
