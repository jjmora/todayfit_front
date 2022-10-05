import React from 'react'
import CardUI from '../../components/Card/CardUI'
import image1 from '../../assets/images/gym1.jpg'

const Club = () => {
  return (
    <section className='container card-section d-flex justify-content-center my-5'>

      <div className='col-md-8 col-lg-6'>
        <CardUI 
          imagesrc={image1} 
          title="Lyon"
          address="rue Prié, 25"
          text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
          link=""
        />
      </div>
    </section>
  )
}

export default Club