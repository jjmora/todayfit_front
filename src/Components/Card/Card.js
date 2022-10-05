import React from 'react'
import CardUI from './CardUI'
import image1 from '../../assets/images/gym1.jpg'
import image2 from '../../assets/images/gym2.jpg'
import image3 from '../../assets/images/gym3.jpg'

const Card = () => {
  return (
    <section className='container card-section d-flex justify-content-center my-5'>
      <div className='row'>
        <div className='d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between mb-4'>
          <div className='d-flex flex-column flex-lg-row'>
            <h2 className="fw-bold lh-1 mb-0 me-md-3 text-uppercase">LE CLUB</h2>
            <h2 className="fw-bold lh-1 mb-4 mb-sm-0 text-uppercase strokeme">PROCHE DE TOI</h2>
          </div>
          <form className="d-flex mb-0 align-items-center">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit"><i className="bi bi-search"></i></button>
          </form>
        </div>
        <div className='col-md-6 col-lg-4'>
          <CardUI 
            imagesrc={image1} 
            title="Lyon"
            address="rue Prié, 25"
            text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
          />
        </div>
        <div className='col-md-6 col-lg-4'>
          <CardUI 
            imagesrc={image2} 
            title="Lyon"
            address="rue Prié, 25"
            text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. "
          />
        </div>
        <div className='col-md-6 col-lg-4'>
          <CardUI 
            imagesrc={image3} 
            title="Lyon"
            address="rue Prié, 25"
            text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. "
          />
        </div>
        <div className='col-md-6 col-lg-4'>
          <CardUI 
            imagesrc={image1} 
            title="Lyon"
            address="rue Prié, 25"
            text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
          />
        </div>
        <div className='col-md-6 col-lg-4'>
          <CardUI 
            imagesrc={image2} 
            title="Lyon"
            address="rue Prié, 25"
            text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. "
          />
        </div>
      </div>
    </section>
  )
}

export default Card