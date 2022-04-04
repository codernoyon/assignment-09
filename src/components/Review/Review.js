import React from 'react';

const Review = ({ review }) => {
    const { name, img, describe, ratings } = review;
    console.log(review);
    return (
        <div className='text-center'>
            <div className='w-1/6 mx-auto'>
                <img className='w-full' src={img} alt="" />
            </div>
            <p>{describe.length > 30 ? describe.slice(0, 120) : describe }</p>
            <h3 className="text-2xl">{name}</h3>
        </div>
    );
};  

export default Review;