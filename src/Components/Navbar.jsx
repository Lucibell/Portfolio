import React, {useContext} from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'
import {FormattedMessage} from 'react-intl'
import argentina from '../assets/argentina.png'
import reinounido from '../assets/reino-unido.png'
import {langContext} from './../context/langContext.js'


function Navbar() {

    const lang = useContext(langContext)
        
return (
  
        <Div>
                    <Span>
                        <Link to="/" style={{textDecoration:"none" , color:"white"}} >
                            <FormattedMessage id="nav.home" defaultMessage="Inicio" />
                        </Link>
                    </Span>
                    <Span> 
                    <Link to="/aboutme" style={{textDecoration:"none" , color:"white"}}> 
                            <FormattedMessage id="nav.aboutme" defaultMessage="Sobre mi" />
                    
                    </Link>
                    </Span>
                    <Span> 
                    <Link to="/projects" style={{textDecoration:"none" , color:"white"}}> 
                            <FormattedMessage id="nav.projects" defaultMessage="Proyectos"/>
                   </Link>
                    </Span>
                    <Span> 
                    <Link to="/contact" style={{textDecoration:"none" , color:"white"}}> 
                            <FormattedMessage id="nav.contact" defaultMessage="Contacto"/>
                    </Link>
                    </Span>
                
            <Div3>
                     <Button onClick = { () => lang.setLanguage("en-US")} ><Img src={reinounido} alt=""  /></Button>
                     <Button onClick = { () => lang.setLanguage("es-AR")} ><Img src={argentina} alt=""  /></Button>
            </Div3>
            
        </Div>

)
    }


export default Navbar

const Div = styled.div`
    background-color: #101010;
    height: 70px;
    width:100%;
    display:flex;
    opacity:0.60; 
    align-items:center;
    margin-top:-10px;
    `

const Span = styled.span`
    margin-right: 30px;
    margin-left:8px;
    @media screen and (max-width:480px){
    margin-right:5px;
    }
    
    `
const Div3 = styled.div`
    display:flex; 
    margin-left:63%;
 
    @media screen and (max-width:480px){
    margin-left:0px;
    display:flex;
        }
    `
const Img = styled.img`
    margin-top:-7px;
    padding:0px;
    height:40px; 
    width:auto;
    `

const Button = styled.button `
    padding:0px;  
    margin-top: 0px;
    background-color: transparent;
    margin-right:5px;
    height:30px; 
    width:auto;

`


