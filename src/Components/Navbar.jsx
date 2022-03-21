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
    <header className="navbar">
        {/* <div>
            <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
        </div> */}
        <Div>
            <ul className="list">
                <Li className="list-item">
                    <Divl>
                        <Link to="/" style={{textDecoration:"none" , color:"white"}} >
                            <FormattedMessage id="nav.home" defaultMessage="Inicio" />
                        </Link>
                    </Divl>
                    <Divl> 
                    <Link to="/aboutme" style={{textDecoration:"none" , color:"white"}}> 
                            <FormattedMessage id="nav.aboutme" defaultMessage="Sobre mi" />
                    
                    </Link>
                    </Divl>
                    <Divl> 
                    <Link to="/projects" style={{textDecoration:"none" , color:"white"}}> 
                            <FormattedMessage id="nav.projects" defaultMessage="Proyectos"/>
                   </Link>
                    </Divl>
                    <Divl> 
                    <Link to="/contact" style={{textDecoration:"none" , color:"white"}}> 
                            <FormattedMessage id="nav.contact" defaultMessage="Contacto"/>
                    </Link>
                    </Divl>
                    <Div3>
                     <Button onClick = { () => lang.setLanguage("en-US")} ><Img src={reinounido} alt="" height="40px" width="auto" /></Button>
                     <Button onClick = { () => lang.setLanguage("es-AR")} ><Img src={argentina} alt="" height="40px" width="auto" /></Button>
                    </Div3>
                </Li>
            </ul>
        </Div>
    </header>
)
    }


export default Navbar

const Li = styled.li`
    color:white;
    text-align:left;
    font-size:25px;
    /* background-color:black; */
    list-style:none;
    display:flex;
    align-items:center;
    flex-direction:row;
    
    `

const Div = styled.div`
    background-color: #101010;
    height: 70px;
    width:100%;
    display:flex;
    opacity:0.60; 
    align-items:center;
    margin-top:-10px;
      
    `
const Divl = styled.div`
    margin-right: 30px;
    /* color:white; */
    `
const Div3 = styled.div`
        position:absolute;
        /* display:flex; 
        justify-content:flex-end; */
        margin-left:1150px;
    `
const Img = styled.img`
        margin-top:0px;
        padding:0px;
      
        

    `
const Button = styled.button `
    padding:0px;  
    margin-top: 0px;
    height:40px;    
    background-color: transparent;
    width:auto;
    margin-right:5px;

`
