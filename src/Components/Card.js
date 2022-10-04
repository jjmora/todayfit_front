import React from 'react'
import CardUI from './CardUI'
import image1 from '../assets/images/gym1.jpg'
import image2 from '../assets/images/gym2.jpg'
import image3 from '../assets/images/gym3.jpg'

const Card = () => {
  return (
    <section className='container card-section d-flex justify-content-center my-5'>
      <div className='row'>
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