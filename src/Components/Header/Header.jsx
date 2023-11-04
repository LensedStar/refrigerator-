import React from "react";

import "./HeaderStyle.scss";

import mailLogo from "../../Images/emailLogo.svg";
import phoneLogo from "../../Images/phoneLogo.svg";
export default function Header() {
    return (
    <header className="header">
        <nav className="navigation">
            <a href="#brands" className="nav__link">Brands</a>
            <a href="#about" className="nav__link">About</a>
            <a href="#contact" className="nav__link">Home</a>
        </nav>
        <aside>
            <article className="head__number">
                <img src={phoneLogo} alt="phone"/>
                <a href="tel:+1123456789">+1-123-456-789-456</a>
            </article>
            <article className="head__email">
                <img src={mailLogo} alt="mail"/>
                <a href="mailto:example@gmail.com">example@gmail.com</a>
            </article>
        </aside>
    </header>
  );
}