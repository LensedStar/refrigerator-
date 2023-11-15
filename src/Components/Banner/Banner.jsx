import React from "react";

import Button from "../Button/Button";

import "./BannerStyle.scss";
import ModalWindow from "../Modal/ModalWindow";

export default function Banner() {
     return(
         <section className="banner">
             <article className="banner__description">
                    <aside className="banner__description__text">
                    <h1 className="banner__title">NY Refrigerator repair specialists </h1>
                    <p className="banner__text">
                        Fast & Reliable
                        Refrigerator Repairs - Get Your Cool Back!
                        Professional Services for Subzero Wolf and Viking kitchen appliances.
                    </p>
                    </aside>

             </article>
         </section>
     )
}