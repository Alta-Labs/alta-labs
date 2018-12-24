import React from "react";

import Header from '../components/header'
import Footer from '../components/footer'
import Hero from '../components/hero'
import MediaControlCard from '../components/mediaCard'
import SEO from '../components/seo'

export default () => (
  <div style={{ maxWidth: '2048px', margin: '0 auto' }}>
    <SEO title="Business marketplace" keywords={[`marketplace`, `alta labs`, `service pros`]} />
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

          <h1 style={{ textAlign: 'center',}}>Our products</h1>
          <MediaControlCard></MediaControlCard>
        </div>
    

    </div>
    <Footer></Footer>
  </div>)
