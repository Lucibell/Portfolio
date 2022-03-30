import React from 'react'
import styled from 'styled-components'
import buscador from '../../assets/buscador/buscador.mp4'
import fondo from '../../assets/fondis2.jpg'
import { FormattedMessage } from 'react-intl'

function Buscador() {


    return (
        <Div>
            <Div1>
                <h1>Buscador de Imágenes de Pixabay</h1>
                <p><FormattedMessage id="image.info" defaultMessage="Desarrollo de una SPA (Single Page Application) utilizando React para el FrontEnd.La SPA consume la información desde la API de Pixabay.Principal función: Búsqueda de imágenes y visualización en calidad máxima de las mismas. Muestra los Me gusta y la cantidad de visualizaciones." />

                </p>
            </Div1>
            <Div2>
                <Video height='500px' width="750px" controls>
                    <source src={buscador} type='video/mp4' />
                </Video>

                {/* <Carrusel/> */}
            </Div2>


        </Div>
    )


}
export default Buscador

const Div = styled.div`
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
  
   @media screen and (max-width:480px){
    bottom:auto;
    padding-bottom:100%;}    

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
  
   @media screen and (max-width:1310px){
      grid-template-columns: repeat(1, 1fr);

}

`

const Div1 = styled.div`
   margin-right: 40px;
   @media screen and (max-width:1310px){
   margin-top: 50px;}
`

const Div2 = styled.div`
    margin-right: 40px;
    margin-top:40px;
    @media screen and (max-width:1310px){
   margin-top: 0px; 
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
   width:650px ;
   @media screen and (max-width:715px){
   height:300px ;
   width:550px ;
   @media screen and (max-width:590px){
   height:250px ;
   width:350px ;
   }
   `


