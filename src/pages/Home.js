import React, { useContext, useEffect } from 'react'
import Card from '../components/Card/Card'
import { Hero } from '../components/Hero/Hero'
import Features from '../components/Features/Features'
import Pagination from '../components/Pagination'
import image1 from '../assets/images/gym1.jpg'
import { ApiContext } from '../contexts/ApiContext'


const Home = () => {
  
  const [data, setData] = useContext(ApiContext)

  useEffect( () => {
    console.log(data)
  }, [data])

  return (
    <section>

      <div>
        <h2 className="mb-4">
          React Handle REST API Global State with Context Hook Example
        </h2>
        {data.map((res, idx) => {
          return (
            <div className="card mb-2" key={idx}>
              <div className="card-body">
                <h5 className="card-title">{res.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{res.username}</h6>
                <p className="card-text">{res.company.catchPhrase}</p>
                <a href="#" className="card-link">
                  {res.website}
                </a>
              </div>
            </div>
          )
        })}
      </div>



      {/* HERO SECTION */}
      <Hero 
        header="LES CLUBS"
        header_stroke="PLUS DE 100 EN FRANCE"
        image={image1}
        text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
        button_text="Explorer les clubs"
      />
      {/* HERO SECTION  */}

      {/* FEATURES SECTION */}
      <Features />
      {/* FEATURES SECTION */}

      {/* CARD SECTION */}
      <Card 
        header="le club"
        header_stroke="PROCHE DE TOI"
      />
      {/* CARD SECTION */}

      {/* CARD SECTION */}
      <Pagination />
      {/* CARD SECTION */}
    </section>
  )
}

export default Home