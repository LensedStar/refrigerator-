import React,{useState} from "react";
import "./FormModalStyle.scss";
import {ErrorMessage} from "@hookform/error-message";
import {useForm} from "react-hook-form";

import {motion} from "framer-motion";
import {AnimatePresence} from "framer-motion";
import done from "../../../Images/doneFormIcon.svg"

export default function FormModal() {
    const [send, setSend] = useState(false)
    const { register, formState:{ errors}, handleSubmit } = useForm();
    const onSubmit = data =>{
        setSend(true)
        console.log(data)
    }
    return(
        <AnimatePresence mode="wait">
        { send ?
            <motion.div
                className="form__send__modal"
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{
                    duration: 0.5,
                }}
            >
                <img className="done__form" src={done} alt="done icon"/>
                <h2>Thank you for your request</h2>
                <p>We will contact you as soon as possible</p>
            </motion.div>
            :
            <motion.form
                className="form__modal"
                onSubmit={handleSubmit(onSubmit)}
                key="form"
                initial={{opacity:1 , y:0}}
                exit={{opacity:0 , y:-500}}
                transition={{
                    duration: 0.5,
                }}
            >
            <div className="form__input">
                <label>Full name</label>
                <input type="text" id="name" placeholder="Name Surname" {...register("name",{
                    required:"This field is required",
                    minLength:{value:4, message:"Full name must be at least 4 characters long"},
                    maxLength:{value:60, message:"Full name must be less than 60 characters long"},
                    pattern:{value:/^[A-Za-z]+\s[A-Za-z]+$/,message:"Name can include only letters"}})}/>
                <ErrorMessage errors={errors} name={"name"} render={({message})=><p className="error" >{message}</p>} />
            </div>
            <div className="form__input">
                <label>Email</label>
                <input id="mail" type="text" placeholder ="exapmple@mail.com" {...register("mail",{
                    required:"This field is required",
                    minLength:{value:4, message:"Email must be at least 4 symbols long"},
                    maxLength:{value:60, message:"Email must be less than 60 characters long"},
                    pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Email is invalid"}})}/>
                <ErrorMessage errors={errors} name={"mail"} render={({message})=><p className="error" >{message}</p>} />
            </div>
            <div className="form__input">
                <label>Phone number</label>
                <input id="number" type="phone" placeholder="+1-123-456-7890" {...register("phone",{
                    required:"This field is required",
                    minLength:{value:10, message:"Number is to short"},
                    maxLength:{value:14, message:"Number is to long"},
                    pattern:{value:/^(?:\+?1[.-]?)?(?:\d{3}[.-]?)?\d{3}[.-]?\d{4}$/,message:"Phone number is invalid"}})}/>
                <ErrorMessage errors={errors} name={"phone"} render={({message})=><p className="error">{message}</p>} />
            </div>
            <div className="form__input__submit">
                    <span className="form__input__test">
                    <label htmlFor="test" >5+3=?</label>
                     <input type="text" placeholder="Answer" id="test" {...register("test",{
                         required:"This field is required",
                         pattern:{value:/^[8]$/,message:"Answer is incorect"}
                     })} />
                        <ErrorMessage errors={errors} name={"test"} render={({message})=><p className="error error__test__modal">{message}</p>} />
                    </span>
                <button className="submit-button" type="submit">Send</button>
            </div>
        </motion.form>
        }
        </AnimatePresence>
    )
}