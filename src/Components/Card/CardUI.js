import React from 'react'
import PermissionCard from '../Permission/PermissionCard'
import './card-style.css'

const CardUI = (props) => {
  return (
    <div className={props.active ? ('card shadow') : ('card shadow no-active')}>
      <div className="overflow image-container">
        {props.active ? ("") :(<p className='no-active-message fs-3 text-dark'>Non Active</p>)}
        <img src={props.imagesrc} alt='' className={props.active ? ("card-img-top") : ("card-img-top no-active-image")} />
      </div>
      <div>

      </div>
      <div className='box-over d-flex flex-row' >
        <div className='card-body box-over-item'></div>
        <div className={props.active ? ('box-over-item-white px-4 py-3 box-over-active') : ('box-over-item-white px-4 py-3 no-active')}>
          <h4 className='card-title'>{props.title}</h4>
        </div>
      </div>
      <div className='card-body'>
        <h5 className='text-center'>{props.address}</h5>
        <p className='card-text pt-4 text-justify'>
          {props.text}
        </p>
        
        <div className="d-flex flex-row flex-wrap">
          
          {/* > PERMISSION CARD  */}
            <PermissionCard 
              
              class="fa-solid fa-dumbbell text-primary fs-4"
              text="Salle de Sport"
            />
          {/* < PERMISSION CARD  */}

          {/* > PERMISSION CARD  */}
            <PermissionCard 
              class="fa-solid fa-dumbbell text-primary fs-4"
              text="Salle de Sport"
            />
          {/* < PERMISSION CARD  */}

                    {/* > PERMISSION CARD  */}
                    <PermissionCard 
              class="fa-solid fa-dumbbell text-primary fs-4"
              text="Salle de Sport"
            />
          {/* < PERMISSION CARD  */}

                    {/* > PERMISSION CARD  */}
                    <PermissionCard 
              class="fa-solid fa-dumbbell text-primary fs-4"
              text="Salle de Sport"
            />
          {/* < PERMISSION CARD  */}

                    {/* > PERMISSION CARD  */}
                    <PermissionCard 
              class="fa-solid fa-dumbbell text-primary fs-4"
              text="Salle de Sport"
            />
          {/* < PERMISSION CARD  */}

        </div>

        <div className='d-flex justify-content-between px-4'>
          <small>{props.email}</small>
          <small>{props.active}</small>
          <a href={props.link} className='btn btn-outline-success'>
            Go  
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-right-circle ms-2" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 5.146a.5.5 0 1 0-.708.708L9.243 9.95H6.475a.5.5 0 1 0 0 1h3.975a.5.5 0 0 0 .5-.5V6.475a.5.5 0 1 0-1 0v2.768L5.854 5.146z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default CardUI