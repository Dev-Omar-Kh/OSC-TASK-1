import React from 'react';

import mainCSS from './main.module.css';

import rsBgImg from '../../../assets/Images/landing_bg.png';
import rsPersonImg from '../../../assets/Images/Mask Group 1.png';
import rsCloud from '../../../assets/Images/clouds.png';
import waves from '../../../assets/Images/waves.png';

export default function Main() {

    return <React.Fragment>

        <div className={mainCSS.container}>

            <div className={mainCSS.left_side}>

                <h3>You sell it We <span>Deliver</span> it</h3>

                <p>leave the logistics to us, while you focus on your customers & your Products</p>

            </div>

            <div className={mainCSS.right_side}>

                <div className={`${mainCSS.img_layer} ${mainCSS.layer_1}`}>
                    <img className={mainCSS.first_img} src={rsBgImg} alt="background" />
                </div>

                <div className={`${mainCSS.img_layer} ${mainCSS.layer_2}`}>
                    <img className={mainCSS.seconde_img} src={rsPersonImg} alt="person" />
                </div>

                <img className={mainCSS.after} src={waves} alt="waves" />

                <div className={`${mainCSS.img_layer} ${mainCSS.layer_3}`}>
                    <img className={mainCSS.third_img} src={rsCloud} alt="cloud" />
                </div>

            </div>

        </div>

    </React.Fragment>

}
