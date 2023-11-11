import React,{useState} from "react";
import {Modal} from "@mui/material";

import FormModal from "./FormModal/FormModal";
import Button from "../Button/Button";

import "././ModalWindowStyle.scss"

import iconP from "../../Images/phoneIconBlack.svg";
import iconM from "../../Images/mailIconBlack.svg";
import iconClose from "../../Images/closeIcon.svg";



export default function ModalWindow({children}) {
    const [modalOpen,setModalOpen] = useState(false);

    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);

    return(
        <>
        <Button property={{
            width: "254px",
            height: "61px"
        }}
                handleClick={handleOpen}
        >
            <h2>{children}</h2>
        </Button>
        <Modal
            open={modalOpen}
            onClose={handleClose}
        >
        <article className="modal">
            <img role="button"  onClick={()=>handleClose()} src={iconClose} className="modal__close" alt="x button to close modal window"/>
            <div className="modal__form">
                <FormModal/>
            </div>
            <h1 className="modal__or">OR</h1>
            <div className="modal__contact">
                <span className="modal__phone">
                    <img src={iconP} alt="phone logo" />
                    <a href="tel:+1-1234-567-890">+1-123-456-7890</a>
                </span>
                <span className="modal__mail">
                    <img src={iconM} alt="mail logo"/>
                    <a href="mailto:example@mail.com">+1-123-456-7890</a>
                </span>
            </div>
        </article>
        </Modal>
        </>
    )
}