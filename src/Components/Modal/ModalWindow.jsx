import React from "react";

import FormModal from "./FormModal/FormModal";

import "./ModalWindow.scss"

import iconP from "../../Images/phoneIconBlack.svg";
import iconM from "../../Images/mailIconBlack.svg";
import close from "../../Images/closeIcon.svg";


export default function ModalWindow() {
    return(
        <article className="modal">
            <img src={close} alt="close button"/>
            <div className="modal__form">
                <FormModal/>
            </div>
            <div className="modal__contact">
                <span className="modal__phone">
                    <img src={iconP} alt="phone logo" />
                    <a href="tel:+1-1234-567-890">+1-123-456-7890</a>
                </span>
                <h1 className="modal_or">OR</h1>
                <span className="modal__mail">
                    <img src={iconM} alt="mail logo"/>
                    <a href="mailto:example@mail.com">+1-123-456-7890</a>
                </span>
            </div>
        </article>
    )
}