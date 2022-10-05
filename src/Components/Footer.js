import React from 'react'
import './footer-style.css'
const Footer = () => {
  return (
    <footer className="py-2 container-fluid bg-light">
      <ul className="nav justify-content-center border-bottom pb-2 mb-2">
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Accueil</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Se connecter</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Contact</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Sitemap</a></li>
        <li className="nav-item"><a href="https://www.todayfit.fr" className="nav-link px-2 text-muted">Public Website</a></li>
      </ul>
      <p className="text-center text-muted">© 2022 TodayFit</p>
    </footer>
  )
}

export default Footer