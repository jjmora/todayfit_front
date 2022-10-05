import React from 'react'
import './hero-style.css'

export const Hero = (props) => {
  return (
    <section className='hero-section pt-md-5 d-flex mx-auto'>
      <div className="px-md-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 pb-5">
          <div className="col-12 col-md-10 col-lg-6">
            <img src={props.image} className="img-fluid" alt="Today Fit Clubs Hero Picture" loading="lazy"/>
          </div>
          <div className="col-lg-6">
            { props.header ? 
              (<h1 className="display-5 fw-bold lh-1 mb-2 mx-3 text-uppercase">{props.header}</h1>)
              :
              (null)
            }
            <h1 className="display-5 fw-bold lh-1 mb-2 mx-3 text-uppercase strokeme">{props.header_stroke}</h1>
            <p className="lead text-justify mx-3">{props.text}</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mx-3">
              <button type="button" className="btn btn-outline-success btn-lg px-4 me-md-2">{props.button_text}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
