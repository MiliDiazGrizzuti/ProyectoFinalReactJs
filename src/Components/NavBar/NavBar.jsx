import React from "react";
import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="Nav-Bar">
            <h3 className="Tittle-NavBar">PINKYS SHOWROOM</h3>
            <div className="div-navbar">
                <button className="btn-navbar">Indumentaria</button>
                <button className="btn-navbar">Accesorios</button>
                <button className="btn-navbar">Home Deco</button>
                <button className="btn-navbar">Todo para el mate</button>
                <button className="btn-navbar">Preguntas frecuentes</button>
                <button className="btn-navbar">Contacto</button>
            </div>
            <CartWidget />

        </nav>
    )
}

export default NavBar;