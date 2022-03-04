import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {

return (
    <header className="navbar">
        {/* <div>
            <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
        </div> */}
        <nav>
            <ul className="list">
                <li className="list-item">
                    <Link to="/" >Home</Link>
                    <Link to="/aboutme"> About me</Link>
                    <Link to="/projects"> Proyectos</Link>
                    <Link to="/contact"> Contacto</Link>
                </li>
            </ul>
        </nav>
    </header>
)
    }


export default Navbar