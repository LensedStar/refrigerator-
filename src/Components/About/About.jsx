import React from 'react';
import './AboutStyle.scss';

import AboutPhoto from "../../Images/aboutPhoto.svg";

export default function About() {
    return (
        <div className="about__container__background">
            <section className="about__container">
            <h1 className="about__title">About us</h1>
            <article className="about__desc">
                <div className="about__description__container">
                <p className="about__text">
                    With a distinguished track record for delivering exceptional refrigerator repair services, our team of expert technicians is well-equipped to handle issues in any make or model with precision and expertise. We remain committed to staying at the forefront of industry trends, ensuring you receive the latest and most cutting-edge solutions.
                    When you choose [Your Company Name], you're opting for a proven and professional solution, backed by a history of excellence and the satisfaction of countless customers who have experienced our superior service. Your trust is our most cherished reward.
                </p>
                </div>
                <img className="abot__image" src={AboutPhoto} alt="photo of repair"/>
            </article>
            </section>
        </div>
    )
}