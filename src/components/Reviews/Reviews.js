import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, ] = useReviews()
    return (
        <section className='w-5/6 mx-auto py-6'>
            <h2 className="text-4xl text-center mb-8">What Customers Say</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                    {
                        reviews.map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
        </section>
    );
};

export default Reviews;