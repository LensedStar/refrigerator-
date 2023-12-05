import React,{useState} from "react";
import {Link} from "react-scroll";

import "./HeaderStyle.scss";

import mailLogo from "../../Images/mailHeaderIcon.svg";
import phoneLogo from "../../Images/phoneHeaderIcon.svg";
import menu from "../../Images/menu.svg";
import close from  "../../Images/closeIcon.svg"

import {Drawer} from "@mui/material";

export default function Header() {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    return (
    <header className="header">
        { window.innerWidth > 1000 ?
       <nav className="navigation">
            <Link to="brands" smooth duration={500} className="nav__link">Brands</Link>
            <Link to="about" smooth duration={500} className="nav__link">About</Link>
            <Link to="contacts" smooth duration={500} className="nav__link">Contact</Link>
        </nav>
            :
            <>
                <button className="nav__menu" onClick={()=>setOpen(true)}>
                    <img src={menu} className="header__menu" alt="open side menu"/>
                </button>
                <Drawer
                    open={open}
                    onClose={() => setOpen(false)}
                    anchor="left"
                >

                    <nav className="navigation__menu">
                        <img className="menu__close" src={close} alt="close menu bar icon" role="button" onClick={()=>handleClose()} />
                        <Link to="brands" smooth duration={500} className="nav__link" onClick={()=>handleClose()}>Brands</Link>
                        <Link to="about" smooth duration={500} className="nav__link" onClick={()=>handleClose()}>About</Link>
                        <Link to="contacts" smooth duration={500} className="nav__link" onClick={()=>handleClose()}>Contact</Link>
                    </nav>
                </Drawer>
            </>
        }
        <aside className="contacts__header">
            <article className="head__number">
                <img src={phoneLogo} alt="phone"/>
                <a href="tel:+1123456789">+1-347-510-2738</a>
            </article>
            <article className="head__email">
                <img src={mailLogo} alt="mail"/>
                <a href="mailto:wolfsubzero.servis@gmail.com">wolfsubzero.servis@gmail.com</a>
            </article>
        </aside>
    </header>
  );
}