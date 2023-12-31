import React, {useState} from "react";
import "./ReviewStyle.scss";
import comments from "./comments";
import arrow from "../../Images/arrowNext.svg"

import threeStars from "../../Images/three_stars.svg"
import fourStars from "../../Images/four_stars.svg"
import fiveStars from "../../Images/five_stars.svg"


export default function Reviews() {
    const [commentId, setComentId] = useState(1);

            function handleStars(stars) {
                if(parseInt(stars) === 3){
                    return <img src={threeStars} alt="three stars"/>
                }else if(parseInt(stars) === 4){
                    return <img src={fourStars} alt="four stars"/>
                }
                return <img src={fiveStars} alt="five stars"/>
            }
            function handleCommentIdPlus() {
                commentId === comments.length - 1 ? setComentId(0) : setComentId(commentId + 1);
            }
            function handleCommentIdMinus(){
                commentId === 0 ? setComentId(comments.length - 1) : setComentId(commentId - 1);
            }
            function handleComments() {
            if (commentId === 0){
                return(
                    <article className="review__comments">
                        <span className="review__before review">
                            <h2>{comments[comments.length - 1].name}</h2>
                            {handleStars(comments[comments.length - 1].stars)}
                            <p>{comments[comments.length - 1].text.length > 5 ? comments[comments.length - 1].text.split(" ").slice(0,5).join(" ")+ "..." : comments[comments.length - 1].text}</p>
                        </span>
                        <span className="review__main review">
                            <h2>{comments[commentId].name}</h2>
                            {handleStars(comments[commentId].stars)}
                            <p>{comments[commentId].text}</p>
                        </span>
                        <span className="review__after review">
                            <h2>{comments[commentId + 1].name}</h2>
                            {handleStars(comments[commentId + 1].stars)}
                            <p>{comments[commentId + 1].text.length > 5 ? comments[commentId + 1].text.split(" ").slice(0,5).join(" ")+ "..." : comments[commentId + 1].text}</p>
                        </span>
                    </article>
                )
            }
            else if (commentId === comments.length - 1){
                return(
                    <article className="review__comments">
                        <span className="review__before review">
                           <h2>{comments[commentId - 1].name}</h2>
                            {handleStars(comments[commentId - 1].stars)}
                            <p>{comments[commentId - 1].text.length > 5 ? comments[commentId - 1].text.split(" ").slice(0,5).join(" ")+ "..." : comments[commentId - 1].text}</p>
                        </span>
                        <span className="review__main review">
                            <h2>{comments[commentId].name}</h2>
                            {handleStars(comments[commentId].stars)}
                            <p>{comments[commentId].text}</p>
                        </span>
                        <span className="review__after review">
                            <h2>{comments[0].name}</h2>
                            {handleStars(comments[0].stars)}
                            <p>{comments[0].text.length > 5 ? comments[0].text.split(" ").slice(0,5).join(" ")+ "..." : comments[0].text}</p>
                        </span>
                    </article>
                )
            }
            else{
                return(
                <article className="review__comments">
                        <span className="review__before review">
                           <h2>{comments[commentId - 1].name}</h2>
                            {handleStars(comments[commentId - 1].stars)}
                            <p>{comments[commentId - 1].text.length > 5 ? comments[commentId - 1].text.split(" ").slice(0,5).join(" ")+ "..." : comments[commentId - 1].text}</p>
                        </span>
                    <span className="review__main review">
                            <h2>{comments[commentId].name}</h2>
                            {handleStars(comments[commentId].stars)}
                            <p>{comments[commentId].text}</p>
                        </span>
                    <span className="review__after review">
                          <h2>{comments[commentId + 1].name}</h2>
                            {handleStars(comments[commentId + 1].stars)}
                            <p>{comments[commentId + 1].text.length > 5 ? comments[commentId + 1].text.split(" ").slice(0,5).join(" ")+ "..." : comments[commentId + 1].text}</p>
                        </span>
                </article>
                )
            }
        }

        return(
        <div className="reviews__background">
            <section className="reviews__container__paddings">
            <h1 className="reviews__title">What people say?</h1>
            <section className="reviews__container">
                {handleComments()}
            </section>
                <section className="reviews__buttons">
                    <button className="reviews__button" onClick={()=>handleCommentIdMinus()}>
                        <img src={arrow} alt="arrow to last slide" style={{transform:"rotate(180deg)"}} /><p>Prev</p></button>
                    <button className="reviews__button" onClick={()=>handleCommentIdPlus()}>
                       <p>Next</p> <img src={arrow} alt="arrow to next slide" /></button>
                </section>
            </section>
        </div>
    )
}