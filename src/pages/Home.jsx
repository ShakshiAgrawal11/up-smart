import React from 'react'
import Navbar from '../componenets/Navbar/Navbar'
import Announcement from '../componenets/Announcement/Announcement'
import Slider from '../componenets/Slider/Slider'
import Slide from '../componenets/Slider/Slide'
import Categories from '../componenets/Categories/Categories'
import Products from "../componenets/Products/Products"
import Newsletteer from '../componenets/Newsletter/Newsleteer'
import Footer from '../componenets/Footer/Footer'
import { products } from '../data'

const Home = () => {
  return (

    <div style={{overflowX:"hidden"}}>
      <Navbar/>
      <Announcement/>
      <Slider/>
      <Categories/>
      <Products product={products}/>
      <Newsletteer/>
      <Footer/>
    </div>
  )
}

export default Home
