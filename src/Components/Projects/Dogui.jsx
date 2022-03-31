import React from 'react'
import styled from 'styled-components'
import dogui from '../../assets/dogui/Dogui App.mp4'
import fondo from '../../assets/fondis2.jpg'
import { FormattedMessage } from 'react-intl'

function Dogui() {
   
    
  return (
      <Div>
        <Div1>
        <h1>Doggie App</h1>
         <p>
         <FormattedMessage id="dogui.info" defaultMessage="Desarrollo de una SPA (Single Page Application) utilizando React para el FrontEnd y Redux como gestor de estados. Se utilizó CSS puro sin librerías externas para estilizar los componentes de React.La SPA trae la información desde una API de razas de perros a través de un BackEnd desarrollado en NodeJs usando Express. Determinada información fue guardada en una base de datos relacional usando PostgresSQL-PgAdmin y Sequelize. Principales funciones: Barra de navegación, búsqueda de una raza de perro en particular, filtros, ordenamiento y un formulario controlado para la creación de una nueva raza de perro."/>
            
               </p> 
        </Div1> 
        <Div2>
        <Video  controls>
        <source src={dogui}   type='video/mp4'  />
        </Video>

             {/* <Carrusel/> */}
        </Div2>

               
    </Div>
  )
  
}

export default Dogui


const Div = styled.div `
         background-image: url(${fondo});
        background-size:cover;
        position:absolute;
        bottom:0;
        top:0;
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
        padding-bottom:50px;}
       

        h1 {
            margin-top:30px

        }
              
        p {
            text-align: start;
            margin-left:30px;
            margin-top:30px;
            font-size:20px;
            @media screen and (max-width:615px){
            font-size:18px;}
           
        }
        u {
            text-decoration:underline;
        }
        @media screen and (max-width:1310px){
  
        grid-template-columns: repeat(1, 1fr);
  
    }
     
     `

    const Div1 = styled.div `
        margin-right: 40px;
        @media screen and (max-width:1310px){
        margin-top: 50px;}
       
    `

const Div2 = styled.div`
        margin-right: 40px;
        margin-top:40px;

        @media screen and (max-width:1310px){
        margin-top: -30px;
           
    }
        @media screen and (max-width:590px){
        margin-left:15px;
    }
    `
    const Video = styled.video `
        height:500px ;
        width:750px ;
        @media screen and (max-width:1100px){
        height:400px ;
        width:650px ;}
        @media screen and (max-width:715px){
        height:300px ;
        width:550px ;}
        @media screen and (max-width:590px){
        height:250px ;
        width:350px ;
    }

    `
