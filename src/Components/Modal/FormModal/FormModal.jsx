import React from "react";
import "./FormModalStyle.scss";

//import {useForm} from "react-hook-form";


export default function FormModal() {
    return(
        <form className="form__modal">
            <div className="form__input">
                <label for="name">Full name</label>
                <input type="text" id="name" placeholder="Name Surname"/>
            </div>
            <div className="form__input">
                <label for="mail">Email</label>
                <input id="mail" type="email" placeholder ="exapmple@mail.com" required/>
            </div>
            <div className="form__input">
                <label for="number">Phone number</label>
                <input id="number" type="number" placeholder="+1-123-456-7890" required/>
            </div>
            <div className="form__input__submit">
                    <span className="form__input__test">
                    <label htmlFor="test" >5+3=?</label>
                    <input type="text" placeholder="Answer" id="test" required />
                    </span>
                <button className="submit-button" type="submit">Send</button>
            </div>
        </form>
    )
}