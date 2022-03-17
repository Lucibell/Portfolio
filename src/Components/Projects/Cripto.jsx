import React from 'react'
import styled from 'styled-components'
import cripto from '../../assets/cripto/Cripto.mp4'
import fondo from '../../assets/fondis2.jpg'
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
font-family:"Montserrat", cursive;


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

function Cripto() {

return (
 <Div>
   <Div1>
   <h1>Cotizador de Criptomonedas</h1>
    <p>Desarrollo de una SPA (Single Page Application) utilizando React para el FrontEnd.<br/> 
       La SPA consume la información desde una API con valores de criptomonedas a valor actual a través de Axios.<br/>
       Se crearon Hooks propios. <br/> 
    <br/>
    <u>Principal función:</u> Cotizar en la moneda a seleccionar una lista de 
       criptomonedas. <br/>Brinda información del precio mas alto del día, el precio mas bajo,
       la variacion y la última actualización.
        
  
   </p> 
   </Div1> 
   <Div2>
   <video height='500px' width="750px" controls>
   <source src={cripto}   type='video/mp4'  />
   </video>

        {/* <Carrusel/> */}
   </Div2>

          
</Div>
)


}

export default Cripto
