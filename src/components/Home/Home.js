import React from 'react';
import "./Home.css";
import Watch from "../../Assets/img/watch.png";

const Home = () => {
    return (
        <section className='mt-6 w-5/6 mx-auto grid lg:grid-cols-2 items-center -z-10'>
            <div className='order-2 lg:order-1'>
                <h2 className="text-4xl lg:text-6xl">
                    The Best <span className="highlight">Watch</span> <br />
                    For Your Daily Life
                </h2>
                <p className="product-details my-3">
                    The Fitbit Sense smartwatch has a variety of sensors, including the EDA Scan app, skin temperature sensor, blood oxygen sensor, and a heart rate monitor. The EDA Scan app detects electrodermal activity to help you manage stress, while the skin temperature sensor lets you see how your temperature varies while you sleep at night. 
                </p>
                <button className="btn">Read More</button>
            </div>
            <div className='w-5/6 mx-auto order-1 lg:order-2 mb-3 lg:mb-0'>
                <img className='w-full' src={Watch} alt="" />
            </div>
        </section>
    );
};

export default Home;