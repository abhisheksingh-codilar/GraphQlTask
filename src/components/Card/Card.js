import React, { Component } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

export default class card extends Component {

  render() {
    let {name ,specialPrice,originalPrice,image,sku} =this.props
  
    
    return (
      <>
      <div className="cardOuter">

        <div className="cardInner">

        <Link to={(sku).replaceAll(" ","+")}>
            <div className="image">
                
                <img src={image} alt="img" />
                
            </div>
            </Link>

            <div className="cardContent">

               <h6>{name}</h6> 
               <div className="priceContent">
                 <div className="prices">
                   <span className='specialPrice'>₹{specialPrice}</span>
                 { !(originalPrice == specialPrice) && <span className='regularPrice'>₹{originalPrice}</span>}
                 </div>
                   { !(originalPrice == specialPrice) && <p className='savedPrice'>You save {originalPrice - specialPrice}</p>}
                   <div className="rating">
                     
                   </div>
                   {/* <div className="emiContent">
                     <span className='emiCost'>EMI from ₹800</span>
                     <div className='emiImage'>55%</div>
                   </div> */}
               </div>

            </div>

            <div className="cardButtons">
             
              <div className="refreshIcon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="grey" width="16" height="16" viewBox="0 0 24 24"><path d="M5 10v7h10.797l1.594 2h-14.391v-9h-3l4-5 4 5h-3zm14 4v-7h-10.797l-1.594-2h14.391v9h3l-4 5-4-5h3z"/></svg>
              </div>
            
              <div className='favIcon'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="grey" width="15" height="15" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>
              </div>
            </div>
        </div>

      </div>
      </>
    )
  }
}
