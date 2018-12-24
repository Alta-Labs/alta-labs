import React from "react";

import Header from '../components/header'
import Footer from '../components/footer'
import Hero from '../components/hero'
import SimpleCard from '../components/card'

export default () => (
  <div>
    <Header></Header>
    <div id="main">
      <Hero></Hero>
      
      <div className="content"
          style={{
            margin: '0 auto',
            maxWidth: '900px',
            padding: '30px 0',
          }}
        >
          <SimpleCard></SimpleCard>
          <SimpleCard></SimpleCard>
        </div>
    

    </div>
    <Footer></Footer>
  </div>)