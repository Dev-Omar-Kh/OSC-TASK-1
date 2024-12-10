import React from 'react';

import sliderCSS from './slider.module.css';

import group1 from '../../../assets/Images/Group 1006.png';
import group2 from '../../../assets/Images/Group 1007.png';
import group3 from '../../../assets/Images/Group 1008.png';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default function Slider() {

    return <React.Fragment>

        <div className={sliderCSS.container}>

            <div className={`${sliderCSS.card} ${sliderCSS.cancel_card}`}>

                <img src={group1} alt="group1" />

            </div>

            <div className={sliderCSS.card}>

                <div className={sliderCSS.arrow}>
                    <IoIosArrowBack />
                </div>

                <div className={sliderCSS.middle_card}>

                    <img src={group2} alt="group2" />

                    <h3>Round the clock support</h3>

                    <p>We only need 45-60 minutes to get your product into your customer&apos;s hands.</p>

                </div>

                <div className={sliderCSS.arrow}>
                    <IoIosArrowForward />
                </div>

            </div>

            <div className={`${sliderCSS.card} ${sliderCSS.cancel_card}`}>

                <img src={group3} alt="group3" />

            </div>

        </div>

    </React.Fragment>

}
