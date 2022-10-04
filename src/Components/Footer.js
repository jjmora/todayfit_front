import React from 'react'
import './footer-style.css'
const Footer = () => {
  return (
    <footer class="py-2 container-fluid bg-light">
      <ul class="nav justify-content-center border-bottom pb-2 mb-2">
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Accueil</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Se connecter</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Contact</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Sitemap</a></li>
        <li class="nav-item"><a href="https://www.todayfit.fr" class="nav-link px-2 text-muted">Public Website</a></li>
      </ul>
      <p class="text-center text-muted">© 2022 TodayFit</p>
    </footer>
  )
}

export default Footer