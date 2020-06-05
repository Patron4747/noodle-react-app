import React from "react";
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <h3>Noodles</h3>
            <ul className="nav-links">
                <Link to="/sign-in">
                    <li>Sign in</li>
                </Link>
                <li>Login</li>
                <li>Logout</li>
            </ul>
        </nav>
    )
}

export default NavBar