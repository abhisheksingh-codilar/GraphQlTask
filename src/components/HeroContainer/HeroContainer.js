import React, { Component } from 'react'
import Card from '../Card/Card'
import './HeroContainer.css'
import { Link } from 'react-router-dom'


export default class heroContainer extends Component {
  render() {
    let { products } =this.props;
    return (
      <>
      <div className="heroContainerWrapper">

        <div className="heroContainerInner">
      {
        products.map((item) =>{
          return(
            // <Link to={item.sku}>
            <Card name ={item.name} specialPrice ={item.price_range.minimum_price.final_price.value} originalPrice={item.price_range.minimum_price.regular_price.value} image ={item.thumbnail.url} sku={item.sku} id={item.id} thumbnail={item.media_gallery_entries}/> /* </Link> */
          )
        })
      }
      
         
        </div>

         
      </div>
      </>
    )
  }
}
