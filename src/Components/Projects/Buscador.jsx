import React from 'react'
import styled from 'styled-components'
import buscador from '../../assets/buscador/buscador.mp4'
import fondo from '../../assets/fondis2.jpg'
import { FormattedMessage } from 'react-intl'

function Buscador() {
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
   <h1>Buscador de Imágenes de Pixabay</h1>
    <p><FormattedMessage id="image.info" defaultMessage="Desarrollo de una SPA (Single Page Application) utilizando React para el FrontEnd.La SPA consume la información desde la API de Pixabay.Principal función: Búsqueda de imágenes y visualización en calidad máxima de las mismas. Muestra los Me gusta y la cantidad de visualizaciones." />
     
   </p> 
   </Div1> 
   <Div2>
   <video height='500px' width="750px" controls>
   <source src={buscador}   type='video/mp4'  />
   </video>

        {/* <Carrusel/> */}
   </Div2>

          
</Div>
)


}


export default Buscador