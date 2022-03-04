import React from 'react'
import styled from 'styled-components'
import backvideo from '../assets/video1.mp4'

// const Video = styled.video `
// height: 100%;
// width: 100%;
// float: left;
// top: 0;
// padding: none;
  
// `
const Video = styled.video `
position:absolute;
top: 0;
left: 0;
width: 100%;
height:100%;
z-index:-1;

  
`
// const DivOverlay = styled.div`
//   height: 100%;
//   width: 100%; 
//   float: left;
//   top: 0;
//   padding: none;
//   background:grey;
//   z-index:1;
//   opacity:0.85;
//   `

const DivContenido = styled.div `
  z-index:2;

`

const H1 = styled.h1 `
color:white;

`


function Home() {
  return (
    <header classname="header content">
      <div classname="header-video">  
            <Video autoPlay loop muted>
          <source src={backvideo} type='video/mp4' />
      </Video>  
      </div>
      {/* <DivOverlay>

      </DivOverlay> */}
      {/* <div classname="header-content"> */}
      <DivContenido>
      <H1>
            Luciana Belleggia
          </H1>
      <H1>
        Bioingeniera - FullStack Developer
      </H1>
      </DivContenido>
      {/* </div> */}
      <p>Bienvenido a mi portfolio. Aquí podrás encontrar información sobre las tecnologías que manejo, los proyectos realizados y un poquito sobre mí</p>
    </header>
   
  )
}





export default Home