import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import backvideo from '../assets/video2.mp4'

const Video = styled.video `
 position:absolute; 
top: 0;
left: 0;
width:100%;
height:auto;
z-index:-1;
  
`

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
margin-top:160px;
font-size:60px;


`
const H2 = styled.h2 `
color:#2C2FF0; 
/* color:#6365E7; */
text-align:left;
margin-left:200px;
font-size:60px;

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
    top:73%;
    opacity:0.85;
    transition:background-color .3s ease;
  
    &:hover {
    background-color: #2C2FF0;
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
  font-size:50px;
  animation:spin_words 6s infinite;

 @keyframes spin_words {
  38%   {transform: translateY(-112%);}  
  40%  {transform: translateY(-100%);} 
  60%  {transform: translateY(-212%);}
  80%  {transform: translateY(-200%);}
  100% {transform: translateY(-312%);}
}
`
 
function Home() {
  return (
    <header classname="header content">
      <div classname="header-video">  
      <Video autoPlay loop muted>
        <source src={backvideo} type='video/mp4' />
      </Video>  
      </div>
   
      <DivContenido>
      <H1>
        Luciana Belleggia
      </H1>
      <Div1>
        <Span>Bioingeniera</Span>
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
     
     
    </header>
   
  )
}





export default Home