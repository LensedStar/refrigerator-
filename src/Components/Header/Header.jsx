import React,{useState} from "react";

import "./HeaderStyle.scss";

import mailLogo from "../../Images/mailHeaderIcon.svg";
import phoneLogo from "../../Images/phoneHeaderIcon.svg";
import menu from "../../Images/menu.png";
import close from  "../../Images/closeIcon.svg"

import {Drawer} from "@mui/material";

export default function Header() {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    return (
    <header className="header">
        { window.innerWidth > 1000 ?
       <nav className="navigation">
            <a href="#brands" className="nav__link">Brands</a>
            <a href="#about" className="nav__link">About</a>
            <a href="#contacts" className="nav__link">Contact</a>
        </nav>
            :
            <>
                <button className="nav__menu" onClick={()=>setOpen(true)}>
                    <img src={menu} alt="open side menu"/>
                </button>
                <Drawer
                    open={open}
                    onClose={() => setOpen(false)}
                    anchor="left"
                >

                    <nav className="navigation__menu">
                        <img className="menu__close" src={close} alt="close menu bar icon" role="button" onClick={()=>handleClose()} />
                        <a onClick={()=>handleClose()} href="#brands" className="nav__link">Brands</a>
                        <a onClick={()=>handleClose()} href="#about" className="nav__link">About</a>
                        <a onClick={()=>handleClose()} href="#contacts" className="nav__link">Contact</a>
                    </nav>
                </Drawer>
            </>
        }
        <aside className="contacts__header">
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