import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import fondo from '../assets/fondis2.jpg'
import turnon from '../assets/turnon.png'
import dogapp from '../assets/dogspa.png'
import pixabay from '../assets/pixabay.png'
import cotizador from '../assets/cotizador.png'
import detalles from '../assets/detalles.png'
// import Carrusel from './Carrusel'


function Projects() {
  return (
    <Div>
        <Div2>
        <h2> Turn On App</h2>
        <p>
          <FormattedMessage id="projects.turnon" defaultMessage="Desarrollo de una SPA (Single Page Application) y APP mobile para la reserva de turnos de canchas deportivas" />
        </p>
        <Link to="/projects/1" >
          <Button1>
            <Img2 src={detalles} alt = "detalles"  />
          </Button1>
        </Link>
      </Div2>
    
    <Div3> <Img1 src={turnon} alt = "turnon"/></Div3>
    {/* <Carrusel/> */}

    
    
      <Div2>
        <h2> Doggie App</h2>
        <p>
        <FormattedMessage id="projects.doguiapp" defaultMessage="Desarrollo de una SPA (Single Page Application) que muestras caracteristicas de razas de perros y otras funcionalidades" />
        </p>
        <Link to="/projects/2" >
          <Button2>
            <Img2 src={detalles} alt = "detalles"  />
          </Button2>
        </Link>
      </Div2>

      <Div3> <Img1 src={dogapp} alt = "dogapp"/> </Div3>

      <Div2>
        <h2>
          <FormattedMessage id="projects.titcripto" defaultMessage="Cotizador de criptomonedas" />
        </h2>
        <p>
          <FormattedMessage id="projects.crypto" />
        </p>
        <Link to="/projects/3" >
          <Button3>
            <Img2 src={detalles} alt = "detalles"  />
          </Button3>
        </Link>
      </Div2>
    
    <Div3><Img1 src={cotizador} alt = "cotizador"/></Div3>
    
      <Div2>
        <h2>
          <FormattedMessage id="projects.titimages" defaultMessage="Buscador de imágenes" />
        </h2>
        <p>
          <FormattedMessage id="projects.images" />
        </p>
        <Link to="/projects/4" >
          <Button4>
            <Img2 src={detalles} alt = "detalles"  />
          </Button4>
        </Link>
      </Div2>
      <Div3><Img1 src={pixabay} alt = "pixabay"/></Div3>

    </Div>
    
  )
}

export default Projects

const Div = styled.div `
  background-image: url(${fondo});
  background-size:100%;
  position:absolute;
  top:0;
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  z-index:-3;  
  color:white;
  justify-items: center;
  align-items: center;
  padding-right:65px;
  padding-left:20px;

  @media screen and (max-width:1200px){
  grid-template-columns: repeat(1, 1fr);
    
  }

`

const Div2= styled.div `
  height:450px;
  display:grid;
  justify-items:center;

  h2 {
    margin-top: 140px;
    font-size: 30px;
    @media screen and (max-width:480px){
    font-size:20px;
    margin-top: 90px;
    
}

  }

  p {  
    font-size: 25px;
    margin-top: -60px;
    margin-right:10px;
    @media screen and (max-width:480px){
    font-size:15px;
    margin-top: -80px;
    
}
  }
`

const Div3= styled.div `
  justify-items: center;
  margin-top: 50px;
`

const Boton = styled.button `
    padding: 0px;
    margin-top:20px;
    background-color: transparent;
    color:#E2E2EC;
    position:absolute;
    opacity:0.85;
    transition:background-color .3s ease;
    border-radius:3px;
    left:22%;
    
    @media screen and (max-width:1200px){
    left:38%;
    
}
  
    &:hover {
    background-color: #2C2FF0;
    }
    
`

const Button1 = styled(Boton) `
  top:16%;
  @media screen and (max-width:1200px){
  top:10%

  }
`
const Button2 = styled(Boton) `
  top:42%;
  @media screen and (max-width:1200px){
  top:35%;
    
}
`
const Button3 = styled(Boton) `
  top:66%;
  @media screen and (max-width:1200px){
  top:59%
    
}
`
const Button4 = styled(Boton) `
  top:90%;
  @media screen and (max-width:1200px){
  top:84%
    
}
`
const Img1 = styled.img`
  height: 320px;
  width:auto;
  margin-right:-10px;

@media screen and (max-width:1200px){
  margin-top:-200px;
  height: auto;
  width:350px;
}  
`
const Img2 = styled.img `
  width:40px;
  height:"auto";
  background-color: white;
  padding:5px;
  border-radius:3px;
 
`