import React, { Component } from 'react'
import HeroContainer from './components/HeroContainer/HeroContainer';
import  Navbar from './components/Navbar/Navbar';
import Product from './components/Product/Product';
import sendRequest from './request';
import './styles/App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }
  componentDidMount() {
    const query = `
    query {
      products(
        filter: {
          price:{
            gteq: "0"
          }
        }
      ) {
        total_count
        items {
          name
          sku   
         
          price_range{
            minimum_price{
               discount{
                amount_off
              }
              final_price{
                value
              }
              regular_price{
                currency
                value
              }
            }
          }  
          
        thumbnail{
          url
        }
          
          media_gallery_entries{
            thumbnail{
              url
            }
            file
          }
          
          
          
        }
      }
    }
    `
    sendRequest({
      query
    }).then(res => {
      console.log(res);
      this.setState({
        data:res,
        products:res.data.products.items,
        images:res.data.products.items.media_gallery_entries
      })
    })
  }

  render() {
    return (
      <div className="App">
        {
          !this.state.data ? (
            <p>Loading....</p>
          ) : (
            <>
             <Router>

              <Navbar/>
              <Routes>

              <Route path="/" element={<HeroContainer { ...this.state }/>}/>
              
              {
                this.state.products.map((item) =>{
                  return(
                    
                  <Route path={(item.sku).replaceAll(" ","+")} element={ <Product name={item.name} specialPrice ={item.price_range.minimum_price.final_price.value} originalPrice={item.price_range.minimum_price.regular_price.value} image ={item.thumbnail.url} sku={item.sku} thumbnail={item.media_gallery_entries}
                  />}/>
                   
                  )
                })
              }

               
            {/* <Product 
            { ...this.state }
            /> */}


            </Routes>
              </Router>

            </>
          )
        }
      </div>
    );
  }
}
