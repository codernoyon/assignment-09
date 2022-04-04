import React from 'react';
import "./Home.css";
import Watch from "../../Assets/img/watch.png";
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import { useNavigate } from 'react-router-dom';
const Home = () => {

    const [reviews, ] = useReviews();

    // console.log(reviews)
    const navigate = useNavigate();

    const goReviews = () => {
        const path = '/reviews';
        navigate(path);
    }

    return (
        <section>
            <div className='mt-6 w-5/6 mx-auto grid md:grid-cols-2 items-center -z-10 py-6'>
                <div className='order-2 md:order-1' data-aos="fade-right" data-aos-duration="1500">
                    <h2 className="text-4xl lg:text-6xl">
                        The Best <span className="highlight">Watch</span> <br />
                        For Your Daily Life
                    </h2>
                    <p className="product-details my-3">
                        The Fitbit Sense smartwatch has a variety of sensors, including the EDA Scan app, skin temperature sensor, blood oxygen sensor, and a heart rate monitor. The EDA Scan app detects electrodermal activity to help you manage stress, while the skin temperature sensor lets you see how your temperature varies while you sleep at night. 
                    </p>
                    <button className="btn">Read More</button>
                </div>
                <div className='watch-img w-5/6 mx-auto order-1 md:order-2 mb-3 lg:mb-0' data-aos="fade-left" data-aos-duration="1500" >
                    <img className='w-full' src={Watch} alt="" />
                </div>
            </div>
            <div className='w-5/6 mx-auto py-10 pb-20'>
                <h2 className="text-4xl text-center section-title mb-5">Customer Reviews</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 mb-8'>
                    {
                        reviews.slice(0, 3).map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
                <div className='text-center'>
                    <button onClick={goReviews} className="btn">See All Reviews</button>
                </div>
            </div>
        </section>
    );
};

export default Home;