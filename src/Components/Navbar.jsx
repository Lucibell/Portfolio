import React from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'
import {FormattedMessage} from 'react-intl'
import argentina from '../assets/argentina.png'
import reinounido from '../assets/reino-unido.png'


function Navbar() {
    
return (
    <header className="navbar">
        {/* <div>
            <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
        </div> */}
        <Div>
            <ul className="list">
                <Li className="list-item">
                    <Divl>
                        <Link to="/" style={{textDecoration:"none" , color:"white"}} >Home
                            {/* <FormattedMessage id="nav.home" defaultMessage="probandoestamierda"/> */}
                        </Link>
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
                    <Div3>
                    <Button> <img src={reinounido} alt="" /></Button>
                    <Button> <img src={argentina} alt="" /></Button>
                    </Div3>
                </Li>
            </ul>
        </Div>
    </header>
)
    }


export default Navbar

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
    width:100%;
    display:flex;
    opacity:0.60; 
    align-items:center;
   margin-top:-10px;
      
    `
    const Divl = styled.div `
    margin-right: 30px;
    /* color:white; */
    `
    const Div3 = styled.div `
        display:flex;
        flex-direction:row;


    `
    const Button = styled.button `
        height:5px;
        width:5px;

    `
