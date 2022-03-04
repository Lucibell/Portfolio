import React from 'react'
import github from '../assets/github.png'
import css from '../assets/css.png'
import vsc from '../assets/vsc.png'
import redux from '../assets/redux.png'
import sequelize from '../assets/sequelize.png'
import postman from '../assets/postman.jpeg'


function Aboutme() {
  return (
    <div>
       <h1>About me</h1> 
       <p>
           Apasionada por aprender, incursioné por primera vez en la programación en la carrera de BioIngeniería, mundo nuevo que me encanto.
           Hoy, encuentro en este mundo sin fronteras la posibilidad de aprender y crear soluciones a todo tipo de problemas.
       </p>

       <h2> Tech skills </h2>
       <p align="left"> 
     
 
       <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="150" height="150"/> 
       <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="150" height="150"/> 
       <img src={redux} alt="redux" width="150" height="150"/> 
       <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="150" height="150"/> 
       <img src={css} alt="css" width="150" height="150"/>
       <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="150" height="150"/> 
       <img src={sequelize} alt="sequelize" width="180" height="150"/>
       <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="150" height="150"/> 
       <img src={github} alt="github" width="150" height="150"/>
       {/* <img src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" width="40" height="40"/>  */}
       <img src={vsc} alt="github" width="150" height="150"/>
       <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="150" height="150"/>  
       <img src= {postman} alt="postman" width="180" height="150"/>

       <h2> Soft skills </h2>
       <ul>
       <li> Dedication </li>
       <li> Problem Solving </li>
       <li> Communicative </li>
       <li> Empathy </li>
       <li> Adaptability </li>
       <li> Curiosity </li>
       <li> Positive attitude </li>
       </ul>
     </p>
    </div>

  )
}

export default Aboutme