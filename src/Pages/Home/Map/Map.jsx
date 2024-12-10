import React from 'react';

import mapCSS from './map.module.css';

import group1 from '../../../assets/Images/Group 140.png';
import group2 from '../../../assets/Images/Group 152.png';
import group3 from '../../../assets/Images/Group 1020.png';

export default function Map() {

    const data = [

        {
            id: 1,
            img: group1,
            class: mapCSS.step_1,
            title: 'Super Fast Delivery',
            desc: `We only need 45-60 minutes to get your product into your customer's hands.`,
        },

        {
            id: 2,
            img: group2,
            class: mapCSS.step_2,
            title: 'Real Time Tracking',
            desc: `Check in any time to see where your delivery is & when it well reach your customer.`,
        },

        {
            id: 3,
            img: group3,
            class: mapCSS.step_3,
            title: 'Discounts',
            desc: `Growing from 30 to 300 delivers a week ? Take advantage of our volume-based discounts.`,
        },

    ]

    return <React.Fragment>

        <div className={mapCSS.container}>

            {data.map(step => <div key={step.id} className={`${mapCSS.step_box} ${step.class}`}>

                <img className={mapCSS.layer_img} src={step.img} alt={step.title} />

                <h3>{step.title}</h3>

                <p>{step.desc}</p>

            </div>)}

        </div>

    </React.Fragment>

}
