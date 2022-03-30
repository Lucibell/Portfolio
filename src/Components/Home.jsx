import React  from 'react'
import {Link} from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import backvideo from '../assets/video2.mp4'
import fondo from '../assets/fondis2.jpg'

 
function Home() {
 
 return (
  
    <Div classname="header content">
      <div classname="header-video">  
      <video autoPlay loop muted>
        <source src={backvideo} type='video/mp4' />
      </video>  
      </div>
   
      <DivContenido>
      <H1>
        Luciana Belleggia
      </H1>
      <Div1>
        <Span>
          <FormattedMessage
            id="home.career" 
            defaultMessage="Inicio"
          />
        </Span>
        <Span>Full Stack Developer</Span>
        <Span>FrontEnd Developer</Span>
        <Span>BackEnd Developer</Span>
      </Div1>


      {/* <H2>
        FullStack Developer
      </H2> */}
      <H4></H4>
      <Link to = "/aboutme" >
            <Boton>Portfolio</Boton>
      </Link>
      </DivContenido>
     
     
    </Div>
   
   
  )
}


export default Home


const Div = styled.div`
   background-size:contain;
  
video {
    position:absolute; 
    top: 0;
    left: 0; 
    width:100%;
    height:auto;
    z-index:-1;
  

  @media screen and (max-width:1160px){
    display:none;
  
  } 
}
  @media screen and (max-width:1160px){
    background-image: url(${fondo}); 
    background-size:100%;
    position:fixed;
    bottom:0;
    top:0;
    right:0;
    left:0;
    /* height:100vh; */
    z-index:-1;
  } 
   /* color:white;
   justify-items: center;
   align-items: center;
   color:white;
   font-family:"Montserrat", cursive; */
  


`

/* @media screen and (max-width:1024px){
  
  width:100%;
  height:100%;
} */
  


const DivContenido = styled.div `
  z-index:2;
  text-align: center;
  line-height: 1;
  font-family: 'Montserrat';
`
 
const H1 = styled.h1 `
color:#ECECF4;
/* color:#E2E2EC; */
text-align:left;
margin-left:200px;
margin-top:170px;
font-size:80px;

@media screen and (max-width:860px){
  font-size:60px;
  margin-left:48px;

}

`

const H4 = styled.h4`
color: white;
margin-left:0px;
`
const Boton = styled.button `
    font-family:"Montserrat", cursive;
    margin-top:20px;
    font-weight:bold;
    font-size:30px;
    padding: 10px;
    background-color: transparent;
    width:auto;
    border-radius:10px;
    color:#E2E2EC;
    position:absolute;
    left:28%;
    top:70%;
    opacity:0.85;
    transition:background-color .3s ease;
  
    &:hover {
    background-color: #2C2FF0;
    }

    @media screen and (max-width:860px){
    top:65%;
}
`
  
const Div1 = styled.div `
  margin-top:0;
  padding-left:110px;
  text-align:left;
  list-style:none;
  overflow:hidden;
  /* display:flex; */
  box-sizing:content-box;
  /* background-color:white; */
  height:70px;
  width:700px;

`

const Span = styled.span `
  display:block;
  /* line-height:40px; */
  height:100%;
  margin:0;
  color:#2C2FF0;
  font-weight:bold; 
/* color:#6365E7; */
  text-align:left;
  margin-left:90px;
  font-size:55px;
  animation:spin_words 6s infinite;

 @keyframes spin_words {
  38%   {transform: translateY(-112%);}  
  40%  {transform: translateY(-100%);} 
  60%  {transform: translateY(-212%);}
  80%  {transform: translateY(-200%);}
  100% {transform: translateY(-312%);}
}
@media screen and (max-width:860px){
 
    font-size:30px;
    margin-left:-60px;
    margin-top:30px;
    color:#1F81E4;
    /* color:#1284F7; */

    @keyframes spin_words {
      30%   {transform: translateY(-170%);}  
      40%  {transform: translateY(-150%);} 
      60%  {transform: translateY(-340%);}
      80%  {transform: translateY(-320%);}
      100% {transform: translateY(-470%);}
}



}
`


