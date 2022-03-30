import React from 'react'
import styled from 'styled-components'
// import Carrusel from '../Carrusel'
import turnonvideo from '../../assets/turnon/turnonvideo.mp4'
import fondo from '../../assets/fondis2.jpg'
import { FormattedMessage } from 'react-intl'


function Turnon() {

     
  return (
      <Div>
        <Div1>
        <h1>Turn On</h1>
            <p>
                <FormattedMessage id="turnon.info" defaultMessage= "Desarrollo de una aplicación móvil para la reserva de canchas deportivas.   Desarrollo de una SPA para el registro de los centro deportivos que incluye la creación de canchas, gestión de turnos e historial de reservas. Desarrollo de una SPA con la función de administrador con acceso a todas las funcionalidades de los usuarios y proveedores.Mi Contribución: BackEnd: Configuración inicial de Express - Armado de modelos de la base de datos y sus relaciones - Controladores y rutas.FrontEnd: Uso de la librería de material table para el armado del SPA del administrador y aplicación de CSS en la Web Page. Tecnologías utilizadas: React - React Native - Redux - Node Js - Express - PostgreSQL. - CSS.Metodologías ágiles aplicada: Scrum "
            />
            </p> 
        </Div1> 
        <Div2>
        <Video controls>
        <source src={turnonvideo}  type='video/mp4'  />
        </Video>

             {/* <Carrusel/> */}
        </Div2>

               
    </Div>
  )
}

export default Turnon

const Div = styled.div `
         background-image: url(${fondo});
        background-size:cover;
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

        @media screen and (max-width:480px){
        bottom:auto;
        padding-bottom:20%;}    
        

        h1 {
            margin-top:30px

        }
              
        p {
            text-align: start;
            margin-left:30px;
            margin-top:30px;
            font-size:20px;
            @media screen and (max-width:615px){
            font-size:16px;}
           
        }
        u {
            text-decoration:underline;
        }
        @media screen and (max-width:1300px){
  
        grid-template-columns: repeat(1, 1fr);
         padding-top:15%  }
       
        }
     
     `

    const Div1 = styled.div `
        margin-right: 40px;
        /* @media screen and (max-width:1100px){
            margin-top: 50px;} */

    `

    const Div2 = styled.div `
        margin-right: 40px;
        margin-top:40px;
   
        /* @media screen and (max-width:1310px){
            margin-top: -10px;}
        @media screen and (max-width:590px){
            margin-left:15px;
        } */
        `
    const Video = styled.video `
     height:500px ;
     width:750px ;
     @media screen and (max-width:1100px){
     height:400px ;
     width:650px ;
     @media screen and (max-width:715px){
     height:300px ;
     width:550px ;
     @media screen and (max-width:590px){
     height:auto ;
     width:350px ;
     margin-left:15px;
 }


 `

   
    
       




