import React from 'react'
import {Link} from 'react-router-dom'
import Imagenes from './Imagenes'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to='/'>
                <img src={Imagenes.navbarimagen} width='70'/>
                </Link>
                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                 </button>
                     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                         <div className="navbar-nav m-auto">
                             <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                             <a className="nav-link" href="../pages/Compras.js">Compras</a>
                             <a className="nav-link" href="../pages/Acerca.js">Acerca de</a>

                         </div>
                     </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar