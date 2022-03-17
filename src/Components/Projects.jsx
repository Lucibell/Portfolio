import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import fondo from '../assets/fondis2.jpg'
import turnon from '../assets/turnon.png'
import dogapp from '../assets/dogspa.png'
import pixabay from '../assets/pixabay.png'
import cotizador from '../assets/cotizador.png'
import Carrusel from './Carrusel'

const Div = styled.div `
  background-image: url(${fondo});
  background-size:100%;
  position:absolute;
  top:0;
  /* bottom:0;
  left:0;
  right:0;  */
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  z-index:-3;  
  color:white;
  justify-items: center;
  align-items: center;

`

const Div2= styled.div `
  /* justify-items: center; */
  height:450px;
  display:grid;
  justify-items:center;


  h2 {
    margin-top: 140px;
    font-size: 30px;
  }

  p {  
    font-size: 25px;
    margin-top: -60px;
    margin-right:10px;
  }

`
const Div3= styled.div `
  justify-items: center;
  margin-top: 50px;

`

const Boton = styled.button `
    font-family:"Montserrat", cursive;
    margin-top:20px;
    font-weight:bold;
    font-size:15px;
    padding: 10px;
    background-color: transparent;
    width:auto;
    border-radius:10px;
    color:#E2E2EC;
    position:absolute;
  
    opacity:0.85;
    transition:background-color .3s ease;
  
    &:hover {
    background-color: #2C2FF0;
    }
`

const Button1 = styled(Boton) `
  left:22%;
  top:16%;
`
const Button2 = styled(Boton) `
  left:72%;
  top:42%;
`
const Button3 = styled(Boton) `
  left:21%;
  top:66%;
`
const Button4 = styled(Boton) `
  left:72%;
  top:90%;
`
const Img1 = styled.img`
height: 320px;
width:auto;
margin-right:-10px;
  
`


function Projects() {
  return (
    <Div>
    {/* <Div1>
    <h1>Proyectos: </h1>
    </Div1>
    <Div2></Div2> */}
    
    <Div2>
    <h2> Turn On App</h2>
    <p> Desarrollo de una SPA (Single Page Application) y APP mobile para la reserva de turnos de canchas deportivas</p>
    <Link to = "/projects/1" >
    <Button1>Detalles</Button1>
    </Link>
    </Div2>
    
    <Div3> <Img1 src={turnon} alt = "turnon"/></Div3>
    {/* <Carrusel/> */}

    <Div3> <Img1 src={dogapp} alt = "dogapp"/> </Div3>
    
    <Div2>
    <h2> Doggie App</h2>
    <p> Desarrollo de una SPA (Single Page Application) que muestras caracteristicas de razas de perros y otras funcionalidades  </p>
    <Link to = "/projects/2" >
    <Button2>Detalles</Button2>
    </Link>
    </Div2>

    <Div2>
    <h2> Cotizador de criptomonedas </h2> 
    <p> Desarrollo de una SPA que cotiza diversas criptomonedas en tiempo real </p>
    <Link to = "/projects/3" >
    <Button3>Detalles</Button3>
    </Link>
    </Div2>
    
    <Div3><Img1 src={cotizador} alt = "cotizador"/></Div3>
    <Div3><Img1 src={pixabay} alt = "pixabay"/></Div3>
    
    <Div2>
    <h2> Buscador de imagenes </h2> 
    <p> Desarrollo de una SPA que busca imagenes de Pixabay </p>
    <Link to = "/projects/4" >
    <Button4>Detalles</Button4>
    </Link>
    </Div2>

    </Div>
    
  )
}

export default Projects