import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__conteiner">
                <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/29/digital/video/gateway/placement/launch/TheWildsS1/WLDS_S1_GWBleedingHero_ENG_COVIDUPDATE_XSite_1500X600_PV_it-IT._CB413398084_.jpg" alt="" />
                

                <div className="home__row">
                    <Product 
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={19.97}
                    image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UL800_FMwebp_QL65_.jpg"
                    rating={5}
                    />
                    <Product 
                    title="PlayStation 4 Pro 1TB Console"
                    price={450.00}
                    image="https://images-na.ssl-images-amazon.com/images/I/41GGPRqTZtL._AC_.jpg"
                    rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product 
                    title="REVLON One-Step Hair Dryer And Volumizer Hot Air Brush, Black, Packaging May Vary"
                    price={39.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/71aXzv34N%2BL._SX522_.jpg"
                    rating={1}
                    />
                    <Product 
                    title="NUBWO Gaming headsets PS4 N7 Stereo Xbox one Headset Wired PC Gaming Headphones with Noise Canceling Mic , Over Ear Gaming Headphones for PC/MAC/PS4/Xbox one"
                    price={26.98}
                    image="https://images-na.ssl-images-amazon.com/images/I/61LnVrrFyhL._AC_SX522_.jpg"
                    rating={5}
                    />
                    <Product 
                    title="Blendtec Total Classic Original Blender - WildSide plus Jar (90 oz) - Professional-Grade Power - 6 Pre-programmed Cycles - 10-speeds - Black (Renewed)"
                    price={279.95}
                    image="https://images-na.ssl-images-amazon.com/images/I/71zrQU%2ByLvL._AC_SX569_.jpg"
                    rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product 
                    title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
                    price={339.00}
                    image="https://images-na.ssl-images-amazon.com/images/I/61JnrafZ7zL._AC_SX679_.jpg"
                    rating={3}
                    />
                </div>
            </div>

            
        </div>
    )
}

export default Home
