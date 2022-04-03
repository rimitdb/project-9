import React from 'react';
import useReveiws from '../../hook/useReveiws';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useReveiws();

    return (
        <div className='reviews'>
            <h1>Customer Reviews</h1>
            <div className='review-container'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;