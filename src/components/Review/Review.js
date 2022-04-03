import React from 'react';
import './Review.css';

const Review = (props) => {

    const { name, rating, text_ } = props.review
    return (
        <div className='review'>
            <h4>{name}</h4>
            <p>{text_}</p>
            <p><small>Rating: {rating}</small></p>

        </div>
    );
};

export default Review;