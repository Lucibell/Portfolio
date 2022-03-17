import React from 'react'
import img2 from '../assets/turnon/img2.png'
import img3 from '../assets/turnon/img3.png'
import img4 from '../assets/turnon/img4.png'
import img5 from '../assets/turnon/img5.png'
import 'bootstrap/dist/css/bootstrap.min.css'
// import turnon from '../assets/turnon.png'
// import styled from 'styled-components'
// import {Link} from 'react-router-dom'


function Carrusel() {
    return (
      <div>
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src= {img2} className="d-block w-100" alt="..."/> 
      </div>
      <div className="carousel-item">
        <img src={img3} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={img4} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={img5} className="d-block w-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
      </div>
    )
  }
  
  export default Carrusel





