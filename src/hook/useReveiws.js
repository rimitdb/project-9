import React, { useEffect, useState } from 'react';

const useReveiws = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return [reviews, setReviews]
};

export default useReveiws;