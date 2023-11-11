import React,{useState} from "react";

import "./BrandsStyle.scss";

import vikingLogo from "../../Images/vikingLogo.svg"
import wolfLogo from "../../Images/wolfLogo.svg"
import subzLogo from "../../Images/subzLogo.svg"
import listDec  from "../../Images/listDec.svg"
import Button from "../Button/Button";

import {Modal} from "@mui/material";
import iconClose from "../../Images/closeIcon.svg";
import ModalWindow from "../Modal/ModalWindow";

export default function Brands() {
    const [modalOpen,setModalOpen] = useState(false);
    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);
    return (
        <article className="brands" id="brands">
            <h1 className="brands__title">Brands we work with</h1>
            <article className="brands__list">
                <section className="brand brand__viking">
                    <article>
                    <img className="logoimg viking__logo" src={vikingLogo} alt="viking logo"/>
                    <ul>
                        <li><img className="dot" src={listDec} alt="list decoration" />All types of refrigerators </li>
                        <li><img className="dot" src={listDec} alt="list decoration" />All types of ovens</li>
                        <li><img className="dot" src={listDec} alt="list decoration" />Ice machines</li>
                    </ul>
                    </article>
                    <span className="brand__button">
                        <ModalWindow>
                            <h2>Book now</h2>
                        </ModalWindow>
                    </span>
                </section>
                <section className="brand brand__wolf">
                    <article>
                    <img className="logoimg wolf__logo" src={wolfLogo} alt="wolf logo"/>
                    <ul>
                        <li><img className="dot" src={listDec} alt="list decoration" />Cooktops & Rangetops</li>
                        <li><img className="dot" src={listDec} alt="list decoration" />Built in ovens</li>
                        <li><img className="dot" src={listDec} alt="list decoration" />Ranges</li>
                    </ul>
                    </article>
                    <span className="brand__button">
                     <ModalWindow>
                            <h2>Book now</h2>
                        </ModalWindow>
                    </span>
                </section>
                <section className="brand brand__subz">
                    <article>
                    <img className=" logoimg subz__logo" src={subzLogo} alt="subzero logo"/>
                    <ul>
                        <li><img className="dot" src={listDec} alt="list decoration" />All types of refrigerators</li>
                        <li><img className="dot" src={listDec} alt="list decoration" />Wine storage</li>
                    </ul>
                    </article>
                    <span className="brand__button">
                    <ModalWindow>
                            <h2>Book now</h2>
                    </ModalWindow>
                    </span>
                </section>
            </article>
        </article>
    )
}