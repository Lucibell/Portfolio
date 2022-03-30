import React from 'react'
import { FormattedMessage } from 'react-intl'
import github from '../assets/github.png'
import css from '../assets/css.png'
import vsc from '../assets/vsc.png'
import redux from '../assets/redux.png'
import sequelize from '../assets/sequelize.png'
import postman from '../assets/postman.jpeg'
import styled from 'styled-components'
import image from '../assets/perfil.JPG'
import fondo from '../assets/fondis2.jpg'



function Aboutme() {
  
  return (
    <Div>
       <H1>
       <FormattedMessage id="aboutme.h1" defaultMessage="Hola"/>
        </H1> 
       <DivC>
       <P>
       <FormattedMessage id="aboutme.me" defaultMessage="Hola"/>
       </P>
       <IMG src= {image} alt="perfil"  />
       </DivC>
       <H2> Tech skills </H2>
       <p align="left"> 
      
       <Ic src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" /> 
       <Ic src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" /> 
       <Ic src={redux} alt="redux" /> 
       <Ic src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" /> 
       <Ic src={css} alt="css" />
       <Ic src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" /> 
       <Ic src={sequelize} alt="sequelize" />
       <Ic src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" /> 
       <Ic src={github} alt="github" />
       {/* <img src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" width="40" height="40"/>  */}
       <Ic src={vsc} alt="github"/>
       <Ic src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" />  
       <Ic src= {postman} alt="postman" />

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



const Div = styled.div `
  background-image: url(${fondo});
  background-size:cover;
  position:absolute;
  top:0;
  /* bottom:0;
  left:0;
  right:0; */
  z-index:-10; 
 
`
  const P = styled.p `
  color: white;
  text-align: left;
  margin-bottom: 60px;
  font-size: 20px;
  font-family: 'Montserrat';
  margin-right:70px;
  margin-top:50px;

  @media screen and (max-width:480px){
    flex-direction:column;
    font-size: 15px;
  }



`
  const H1 = styled.h1 `
  color: white;
  position: center;
  font-family: 'Montserrat';
  text-align:left;  
  margin-left: 65px;
  margin-top:100px;
  `
  const H2 = styled.h2 `
  color: white;
  text-align:left;
  margin-left: 25px;
  margin-top:20px;
  margin-bottom: 30px;
`
  const IMG = styled.img `
  width:80% ;
  height:400px;
  z-index:2;
  margin-right:125px;
  margin-bottom:50px;
  margin-top:50px;

  @media screen and (max-width:600px){
    width: 320px ;
    height:auto;
    margin-top:50px;}
`

const  DivC = styled.div `
  display: flex;
  justify-content:row;
  margin-left:50px;

  @media screen and (max-width:1350px){
    flex-direction:column;
    font-size: 5px;
   
  }
`
const Ic = styled.img `
  margin-left: 40px;
  margin-bottom:30px;
  width:100px; 
  height:100px;
  @media screen and (max-width:860px){
    width:75px
    height:75px
 
`