import React from 'react'
import image1 from '../../assets/images/gym1.jpg'
import './hero-style.css'

export const Hero = () => {
  return (
    <section className='hero-section pt-md-5 d-flex mx-auto'>
      <div className="px-md-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 pb-5">
          <div className="col-12 col-md-10 col-lg-6">
            <img src={image1} className="img-fluid" alt="Today Fit Clubs Hero Picture" loading="lazy"/>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-2 mx-3 text-uppercase">LES CLUBS</h1>
            <h1 className="display-5 fw-bold lh-1 mb-2 mx-3 text-uppercase strokeme">PLUS DE 100 EN FRANCE</h1>
            <p className="lead text-justify mx-3">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mx-3">
              <button type="button" className="btn btn-outline-success btn-lg px-4 me-md-2">Explorer les clubs</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
