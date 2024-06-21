import React, { useEffect, useState } from 'react'
import mixitup from 'mixitup';
import { DataClb } from '../../../../store';

import './CLB_DA.css'
function CLB_DA({ initial }: any) {
    useEffect(() => {
        let mixerPortfolio = mixitup('.clbdas__container', {
            selectors: {
                target: ".clbdas__card"
            },
            animation: {
                duration: 300,
                nudge: true,
                reverseOut: true,
                effects: "fade scale(0.01)"
            },
        })
        // Clean up the MixItUp instance when the component unmounts
        return () => {
            mixerPortfolio.destroy();
        };
    }, [])
    useEffect(() => {
        const linkClbdas = document.querySelectorAll('.clbdas__item');

        function activeCladas(event: any) {
            linkClbdas.forEach((l) => l.classList.remove('active-clbdas'));
            event.target.classList.add('active-clbdas');
        }

        linkClbdas.forEach((l) => l.addEventListener('click', activeCladas));

        // Clean up the event listeners when the component unmounts
        return () => {
            linkClbdas.forEach((l) => l.removeEventListener('click', activeCladas));
        };
    }, []);

    const [scroll, setScroll] = useState(0);
    const handlePrevClick = () => {
        setScroll((prevScroll) => {
            if (prevScroll - 100 < 0) {
                return 0;
            } else {
                return prevScroll - 100
            }
        });
    };
    const handleNextClick = () => {
        setScroll((prevScroll) => {
            const slider = document.querySelector('.clbdas__slider') as HTMLElement,
                sliderWidth = slider.offsetWidth;

            if (prevScroll + 100 > sliderWidth) {
                return sliderWidth + 200;
            } else {
                return prevScroll + 100
            }
        });
    };

    useEffect(() => {
        const slider = document.querySelector('.clbdas__slider');
        if (slider) {
            slider.scrollLeft = scroll;
        }
    }, [scroll]);
    const { clbinfo } = DataClb();
    return <section className="clbdas section" id="clbda">
        <h2 className="section__title-center clbdas__title container">
            CLUBS - PROJECTS
        </h2>
        <div className='clbdas__filters'>
            <button
                onClick={handlePrevClick}
                className='button button--flex clbdas__filters-btn'
                id='prev-btn'
            >
                <i className="ri-arrow-left-s-line clbdas__filters-icon"></i>
            </button>
            <div className='clbdas__slider'>
                <span className="clbdas__item active-clbdas" data-filter="all">ALL</span>
                <span className="clbdas__item" data-filter=".vh">CULTURE</span>
                <span className="clbdas__item" data-filter=".knnt">SKILL - ART</span>
                <span className="clbdas__item" data-filter=".httt">ACADEMIC - INFORMATIVE</span>
                <span className="clbdas__item" data-filter=".khxhda">SOCIAL SCIENCE - PROJECTS</span>
            </div>
            <button
                onClick={handleNextClick}
                className='button button--flex clbdas__filters-btn'
                id='next-btn'>
                <i className="ri-arrow-right-s-line clbdas__filters-icon"></i>
            </button>
        </div>
        <div className="clbdas__container container grid">
            {
                clbinfo.map((data: any, index: any) => (
                    <a key={index} href={`clbinfo/` + data.id.replace(/\./g, "-")} className={`clbdas__card mix ${data.tag}`}>
                        <img src={`/clbinfo/${data.id}/banner.png`} alt="" className="clbdas__img" />
                    </a>
                ))
            }
        </div>
    </section>
}

export default CLB_DA