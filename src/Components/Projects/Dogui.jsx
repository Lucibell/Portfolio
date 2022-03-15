import React from 'react'
import styled from 'styled-components'
import dogui from '../../assets/dogui/Dogui App.mp4'
import fondo from '../../assets/fondis2.jpg'

function Dogui() {
   
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
        <h1>Doggie App</h1>
         <p>Desarrollo de una SPA (Single Page Application) utilizando React para el FrontEnd y Redux como gestor de estados.<br/> 
            Se utilizó CSS puro sin librerías externas para estilizar los componentes de React.
            La SPA trae la información desde una API de razas de perros a través de un BackEnd desarrollado en NodeJs usando Express.<br/> 
            Determinada información fue guardada en una base de datos relacional usando PostgresSQL-PgAdmin y Sequelize. <br/>
            <br/>
            <u>Principales funciones:</u> Barra de navegación, búsqueda de una raza de perro en particular, filtros, ordenamiento 
            y un formulario controlado para la creación de una nueva raza de perro. 
             
       
        </p> 
        </Div1> 
        <Div2>
        <video height='500px' width="750px" controls>
        <source src={dogui}   type='video/mp4'  />
        </video>

             {/* <Carrusel/> */}
        </Div2>

               
    </Div>
  )
  
}

export default Dogui