import React from "react";
import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav>
            <h3>PINKYS SHOWROOM</h3>
            <div>
                <button>Indumentaria</button>
                <button>Accesorios</button>
                <button>Para el mate</button>
            </div>
            <CartWidget />

        </nav>
    )
}

export default NavBar;