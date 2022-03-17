import React from 'react'
import styled from 'styled-components'
import Carrusel from '../Carrusel'
import turnonvideo from '../../assets/turnon/turnonvideo.mp4'
import fondo from '../../assets/fondis2.jpg'


function Turnon() {

     const Div = styled.div `
         background-image: url(${fondo});
        background-size:100%;
        position:absolute;
        bottom:0;
        top:0;
        /* left:0;
        right:0;  */
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        z-index:-3;  
        color:white;
        justify-items: center;
        align-items: center;
        color:white;
        font-family:"Montserrat", cursive;
        z-index:-1;  

        h1 {
            margin-top:30px

        }
              
        p {
            text-align: start;
            margin-left:30px;
            margin-top:30px;
           
        }
        u {
            text-decoration:underline;
        }
     
     `

    const Div1 = styled.div `
        margin-right: 40px;
    `

    const Div2 = styled.div `
        margin-right: 40px;
        margin-top:40px;
    `

  return (
      <Div>
        <Div1>
        <h1>Turn On</h1>
            <p>Desarrollo de una aplicación móvil para la reserva de canchas deportivas.
            Desarrollo de una SPA para el registro de los centro deportivos que incluye la
            creación de canchas, gestión de turnos e historial de reservas. Desarrollo de una
            SPA con la función de administrador con acceso a todas las funcionalidades de los
            usuarios y proveedores.<br/>
            <u>Mi Contribución:</u> <br/>
            BackEnd: Configuración inicial de Express - Armado de modelos de
            la base de datos y sus relaciones - Controladores y rutas. <br/>
            FrontEnd: Uso de la librería
            de material table para el armado del SPA del administrador y aplicación de CSS en
            la Web Page. <br/> 
           <u> Tecnologías utilizadas:</u> React - React Native - Redux - Node Js - Express -
            PostgreSQL. - CSS. <br/>
            <u>Metodologías ágiles aplicada:</u> Scrum <br/>
        </p> 
        </Div1> 
        <Div2>
        <video controls>
        <source src={turnonvideo}  type='video/mp4'  />
        </video>

             {/* <Carrusel/> */}
        </Div2>

               
    </Div>
  )
}

export default Turnon



