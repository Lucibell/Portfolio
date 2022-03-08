import React from 'react'
import github from '../assets/github.png'
import css from '../assets/css.png'
import vsc from '../assets/vsc.png'
import redux from '../assets/redux.png'
import sequelize from '../assets/sequelize.png'
import postman from '../assets/postman.jpeg'
import styled from 'styled-components'
import image from '../assets/imagen.jpg'
import fondo from '../assets/fondis2.jpg'

function Aboutme() {

  const Div = styled.div `
  background-image: url(${fondo});
  background-size:cover;
  position:absolute;
  /* top:0;
  bottom:0;
  left:0;
  right:0; */
  z-index:-10; 
`
  const P = styled.p `
  color: white;
  text-align: left;
  margin-bottom: 300px;
  font-size: 20px;
  font-family: 'Montserrat';
  margin-left: 25px;
`
  const H1 = styled.h1 `
  color: white;
  position: center;
  font-family: 'Montserrat';
  text-align:left;  
  margin-left: 25px;
  margin-top:50px;
  `
  const H2 = styled.h2 `
  color: white;
  text-align:left;
  margin-left: 25px;
  margin-top:50px;
  margin-bottom: 30px;
`
  const IMG = styled.img `
  width:"200" ;
  height:"200";
  z-index:2;
`

const  DivC = styled.div `
  display: flex;
  justify-content: space-evenly;
`
const Ic = styled.img `
  margin-left: 40px;
  margin-bottom:30px;
`




  return (
    <Div>
       <H1>Hola!</H1> 
       <DivC>
       <P>
          Soy Luciana, desarrolladora Full Stack y Bioingeniera.  <br/>
          Apasionada por aprender, me uno a este mundo IT,<br/> 
          sin fronteras para crecer. <br/>
          Encuentro en este mundo la posibilidad de crear soluciones<br/>  
          a todo tipo de problemas. <br/>
          Me gusta compartir equipos de trabajo y las dinamicas ágiles <br/>
          En mi tiempo libre me gusta leer, nadar, disfrutar de mi familia <br/> 
          y viajaaar <br/>
       </P>
       <IMG src= {image} alt="perfil"  />
       </DivC>
       <H2> Tech skills </H2>
       <p align="left"> 
      
       <Ic src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="130" height="130"/> 
       <Ic src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="130" height="130"/> 
       <Ic src={redux} alt="redux" width="130" height="130"/> 
       <Ic src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="130" height="130"/> 
       <Ic src={css} alt="css" width="130" height="130"/>
       <Ic src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="130" height="130"/> 
       <Ic src={sequelize} alt="sequelize" width="130" height="130"/>
       <Ic src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="130" height="130"/> 
       <Ic src={github} alt="github" width="130" height="130"/>
       {/* <img src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" width="40" height="40"/>  */}
       <Ic src={vsc} alt="github" width="130" height="130"/>
       <Ic src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="130" height="130"/>  
       <Ic src= {postman} alt="postman" width="130" height="130"/>

       {/* <H2> Soft skills </H2>
       <ul>
       <li> Dedication </li>
       <li> Problem Solving </li>
       <li> Communicative </li>
       <li> Empathy </li>
       <li> Adaptability </li>
       <li> Curiosity </li>
       <li> Positive attitude </li>
       </ul> */}
     </p>
    </Div>

  )
}

export default Aboutme