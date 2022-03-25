import React, { Component } from 'react'
import Slider from '../Slider/Slider';
import './Product.css'

export default class Product extends Component {
  render() {

    let {name ,specialPrice,originalPrice,image,sku,thumbnail} =this.props
    return (
      <>

        <div className="product">

            <div className="carousel">
                
                <Slider img ={thumbnail}/>
            
            </div>

            <div className="productContent">

                <div className="title">
                    <h2>{name}</h2>
                    <strong>SKU </strong>
                    <span className='sku'>{sku}</span>
                </div>

                <div className="ratingProduct">
                            
                </div>

                <div className="pricesProduct">
                        <span className='specialPriceProduct'>₹{specialPrice}</span>
                        { !(originalPrice == specialPrice) && <span className='regularPriceProduct'>₹{originalPrice}</span>}
                        {!(originalPrice == specialPrice) && <p className='savedPrice'>You save ₹{ originalPrice - specialPrice}</p>}
                </div>

                <div className="checkForm">
                    <form action="#">
                        <input type="text" placeholder='Enter Delivery Postcode'/>
                        <button className='checkBtn'>CHECK</button>
                    </form>
                </div>

                <div className="productAdd">

                    <div className="refresh">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="grey" width="24" height="24" viewBox="0 0 24 24"><path d="M5 10v7h10.797l1.594 2h-14.391v-9h-3l4-5 4 5h-3zm14 4v-7h-10.797l-1.594-2h14.391v9h3l-4 5-4-5h3z"/></svg>
                    </div>

                    <div className="favourite">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="grey" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>
                    </div>

                </div>

                <div className="productSocial">

                    <span>Share this on your social network</span>

                    <div className="productSocialImages">
                    <img src="https://mcstaging.royaloakindia.com/static/version1647984933/frontend/Codilar/royaloak/en_US/Magenest_SocialLogin/images/facebook_share.png" alt="facebookIcon" />
                    <img src="https://mcstaging.royaloakindia.com/static/version1647984933/frontend/Codilar/royaloak/en_US/Magenest_SocialLogin/images/pinterest_share.png" alt="pinterestIcon" />
                    </div>

                </div>

                <div className="availableOffers">

                    <div className="availableOfferInner">
                    <h3>Available Offers</h3>
                    <p>
                        <img src="https://mcstaging.royaloakindia.com/media/wysiwyg/icon_offer.png" alt="%" />
                        <span >Wingreens Rewards: Register & Get Rewarded 100% Cashback!<span className='highlightText'>REGISTER NOW</span> </span>
                    </p>
                    <p>
                        <img src="https://mcstaging.royaloakindia.com/media/wysiwyg/icon_offer.png" alt="%" />
                        
                        <span > Shopping for a business?<span className='highlightText'>UNLOCK CORPORATE DEAL</span></span>
                    </p>
                    </div>
                    

                </div>

            </div>

        </div>

        {/* <div className="productData">

        <ul className="dataList">
            <li className='overview'>OVERVIEW</li>
            <li className='details'>PRODUCT DETAILS</li>
            <li className='reviews'>REVIEWS</li>
            <li className='faq'>FAQ</li>
        </ul>

        <div className="dataDetails">
            <div className='name'>{name}</div>
            <div className='overview'>SKU :{sku}</div>
            <div className='review'>No reviews yet</div>
            <div className="faq"></div>

        </div>

        </div> */}


      </>
    )
  }
}
