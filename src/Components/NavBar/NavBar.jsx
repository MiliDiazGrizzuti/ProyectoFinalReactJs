import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="Nav-Bar">
            <Link to='/' className="logo">
                <h3 className="Tittle-NavBar">PINKYS SHOWROOM</h3>
            </Link>
            <div className="categories">
                <NavLink to={'/category/indumentaria'} className= {({ isActive }) => isActive ? "ActiveOption" : "Option"}> Indumentaria </NavLink>
                <NavLink to={'/category/accesorios'} className= {({ isActive }) => isActive ? "ActiveOption" : "Option"}> Accesorios </NavLink>
                <NavLink to={'/category/homedeco'} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}> Home Deco </NavLink>
                <NavLink to={'/category/mate'} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}> Todo para el mate </NavLink>
                <NavLink to={'/category/preguntas'} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}> Preguntas frecuentes </NavLink>
                <NavLink to={'/category/contacto'} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}> Contacto </NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;