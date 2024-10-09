import React from 'react'
import Hero from './Hero'
import LeftImage from './LeftImage'
import RightImage from './RightImage'
import Universe from './Universe'


function Product() {
  return (
  <div>
    <Hero/>
    <LeftImage imgURL="media/images/kite.png" ProductTitle="Kite" ProductDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." TryDemo="" Trydemotxt="Try Demo" lftarrow="fa fa-long-arrow-right" rtarrow="fa fa-long-arrow-right" LearnMore="" LearnMoretxt={"Learn More"}GooglePlay="" AppStore=""/>
    <RightImage ProductTitle="Console" ProductDesc="The central dashboard for your ShivaTrades account. Gain insights into your trades and investments with in-depth reports and visualisations." imgURL="media/images/console.png" Trydemotxt="Learn More " lftarrow="fa fa-long-arrow-right"/>
    <LeftImage imgURL="media/images/coin.png" ProductTitle="Coin" ProductDesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." TryDemo="" Trydemotxt="Coin" lftarrow="fa fa-long-arrow-right" LearnMore="" GooglePlay="" AppStore=""/>
    <RightImage ProductTitle="Kite Connect API" ProductDesc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." imgURL="media/images/kiteconnect.png" Trydemotxt="Kite Connect " lftarrow="fa fa-long-arrow-right"/>
    <LeftImage imgURL="media/images/varsity.png" ProductTitle="Varsity mobile" ProductDesc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." TryDemo="" LearnMore="" GooglePlay="" AppStore=""/>
    <span style={{margin:"0 30%"}}>Want to know more about our technology stack? Check out the ShivaTrades.tech blog.</span>
    <Universe/>
  </div>
  )
}

export default Product
