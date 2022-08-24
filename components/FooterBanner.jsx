import React from 'react'
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { discount, desc, largeText1, largeText2, saleTime, smallText, midText, product, buttonText, image } }) => {
    return (
        <div className='footer-banner-container'>
            <div className='banner-desc'>
                <div className='left'>
                    <h3>{largeText1}</h3>
                    <h3>{largeText2}</h3>
                    <p>{discount}</p>
                </div>
                <div className='right'>
                    <p>{saleTime}</p>
                    <h3>{midText}</h3>
                    <p>{desc}</p>
                    <Link href={`/product/${product}`}>
                        <button type='button'>{buttonText}</button>
                    </Link>
                </div>
                <img src={urlFor(image)} width="300" height="300" className='footer-banner-image'></img>
            </div>
        </div>
    )
}

export default FooterBanner