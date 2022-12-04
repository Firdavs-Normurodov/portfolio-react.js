import React from 'react'
import "./section.css"
const Section = () => {
  return (
    <div>
      <section className='container-fluid pt-5 mt-5'>
        <div className="row">
          <div className="col-lg-6 col-sm-12 img-about">
            <img className='img-fluid' src="https://firdavs-dev.vercel.app/assets/images/about-banner.png" alt=""/>
          </div>
          <div className="col-lg-6 col-sm-12 text">
            <h1>Hi i'm frontend <br /> developer</h1>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Section
