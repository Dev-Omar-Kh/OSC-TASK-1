import React from 'react';

import footerCSS from './footer.module.css';

import customer from '../../assets/Images/customer.png';
import googlePlay from '../../assets/Images/play-store.png';
import appStore from '../../assets/Images/apple.png';
import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';

export default function Footer() {

    const getApp = [

        {
            id: 1,
            name: 'Google Paly',
            img: googlePlay
        },

        {
            id: 2,
            name: 'App Stor',
            img: appStore
        },

    ]

    return <React.Fragment>

        <div className={footerCSS.container}>

            <div className={footerCSS.footer_content}>

                <div className={footerCSS.content_side}>

                    <div className={footerCSS.download_app}>

                        {getApp.map( store => <div key={store.id} className={footerCSS.store_cont}>

                            <img src={store.img} alt={store.name} />

                            <p>{store.name}</p>

                        </div>)}

                    </div>

                    <div className={footerCSS.social_media}>

                        <Link>
                            <FaInstagram />
                        </Link>

                        <Link>
                            <FaWhatsapp />
                        </Link>

                        <Link>
                            <FiFacebook />
                        </Link>

                    </div>

                    <ul className={footerCSS.nav}>

                        <li>
                            <Link>Home</Link>
                        </li>

                        <li>
                            <Link>Services</Link>
                        </li>

                        <li>
                            <Link>About Us</Link>
                        </li>

                        <li>
                            <Link>Help Center</Link>
                        </li>

                    </ul>

                </div>

                <div className={footerCSS.img_side}>
                    <img src={customer} alt="customer" />
                </div>

            </div>

        </div>

    </React.Fragment>

}
