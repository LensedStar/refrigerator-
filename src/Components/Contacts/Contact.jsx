import React from "react";

import "./ContactStyle.scss";

import Form from "./Components/Form";

import iconPhone from "../../Images/phoneHeaderIcon.svg";
import iconMail from "../../Images/mailHeaderIcon.svg";
import iconAdress from "../../Images/mailIcon.svg";

export default function Contact() {
    return(
        <article className="contact__container" id="contacts">
            <h1 className="contact__title">Contact us!</h1>
            <article className="contact__form__info">
            <Form />
            <aside className="contact__info">
                <span className="contact__phone">
                    <img src={iconPhone} alt="phone icon"/>
                    <a href="tel:+1-347-510-2738">+1-347-510-2738</a>
                </span>
                <span className="contact__email">
                    <img src={iconMail} alt="mail icon"/>
                    <a href="mailto:wolfsubzero.servis@gmail.com">wolfsubzero.servis@gmail.com</a>
                </span>
                <span className="contact__adress">
                     <img src={iconAdress} alt="adress icon"/>
                    <a href="https://maps.app.goo.gl/aKqH3yqHnTAPawQd9" >39 Lispenard St, 5 Floor, New York, NY 10013</a>
                </span>
            </aside>
            </article>
        </article>
    )
}
