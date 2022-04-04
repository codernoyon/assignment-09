import React from 'react';
import "./Review.css"

const Review = ({ review }) => {
    const { name, img, describe, ratings } = review;
    console.log(review);
    return (
        <div className='text-center review-box'data-aos="fade-up" data-aos-duration="1500">
            <div className='reviewer-img mx-auto mb-3'>
                <img className='w-full' src={img} alt="" />
            </div>
            <p className='describe'>
                {
                    describe.length > 30 ? describe.slice(0, 120) + "..." : describe
                }
            </p>
            <h3 className="text-2xl">{name}</h3>
            <small>Ratings: {ratings}</small>
        </div>
    );
};  

export default Review;