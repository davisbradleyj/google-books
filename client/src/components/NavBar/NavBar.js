import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-secondary mb-2 fixed-top">
            <a className="navbar-brand text-white" href="/">Google Books</a>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link text-light" href="/">Search</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" href="/saved">Saved</a>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;