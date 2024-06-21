import React, { useEffect, useState } from 'react'
import './About.css'
import './Control.css'

import Swiper from 'swiper';
import { EffectFade, Autoplay, Thumbs } from "swiper";

function About({ initial }: any) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const numberOfPhotos = 3

    useEffect(() => {
        const galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 0,
            slidesPerView: 3, // Update the number of slides per view here
        });
        const galleryTop = new Swiper('.gallery-top', {
            effect: 'fade',
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            modules: [EffectFade, Autoplay, Thumbs],
            thumbs: {
                swiper: galleryThumbs,
            },

        });

        return () => {
            galleryTop.destroy();
        };
    }, []);


    return <section className="about section container" id="about">
        <div className="swiper-container gallery-top">
            <div className="swiper-wrapper my-swiper">
                {
                    [...Array(numberOfPhotos)].map((_, i) => (
                        <img key={i} src={`/bch/${i + 1}.jpg`} alt="" className="about__bg swiper-slide" />
                    ))
                }
            </div>
        </div>

        <div className="about__container grid">
            <div className="about__data">
                <h2 className="section__title about__title">
                    Tran Dai Nghia<br /> High School For The Gifted <br /> Youth Union
                </h2>

                <p className="about__description">
                    Trần Chuyên là Nhà,
                    <br />
                    Văn phòng Đoàn là Nhà trong Nhà
                </p>
                <a href="/doantruong" className="button button--flex">
                    More info <i className="ri-arrow-right-down-line button__icon"></i>
                </a>
            </div>
        </div>
        {/* <!--=============== CONTROLS ===============--> */}
        <div className="controls gallery-thumbs">
            <div className="controls__container swiper-wrapper">
                {
                    [...Array(numberOfPhotos)].map((_, i) => (
                        <img key={i} src={`/bch/${i + 1}.jpg`} alt="" className="controls__img swiper-slide" />
                    ))
                }
            </div>
        </div>
    </section>
}

export default About


