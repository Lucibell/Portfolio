import React from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'

function Navbar() {

    const Li = styled.li `
    color:white;
    text-align:left;
    font-size:25px;
    /* background-color:black; */
    list-style:none;
    display:flex;
    flex-direction:row;
            
    `

    const Div = styled.div `
    background-color: #101010;
    height: 70px;
    display:flex;
    opacity:0.60; 
   
    
    `
    const Divl = styled.div `
    margin-right: 30px;
    /* color:white; */
    `


return (
    <header className="navbar">
        {/* <div>
            <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
        </div> */}
        <Div>
            <ul className="list">
                <Li className="list-item">
                    <Divl>
                        <Link to="/" style={{textDecoration:"none" , color:"white"}} >Home</Link>
                    </Divl>
                    <Divl> 
                    <Link to="/aboutme" style={{textDecoration:"none" , color:"white"}}> About me</Link>
                    </Divl>
                    <Divl> 
                    <Link to="/projects" style={{textDecoration:"none" , color:"white"}}> Proyectos</Link>
                    </Divl>
                    <Divl> 
                    <Link to="/contact" style={{textDecoration:"none" , color:"white"}}> Contacto</Link>
                    </Divl>
                </Li>
            </ul>
        </Div>
    </header>
)
    }


export default Navbar