import React from 'react';
import './Home.css'
import Place from '../../Assets/Image/place.jpg'
import useReveiws from '../../hook/useReveiws';
import Review from '../Review/Review';

const Home = () => {
    const [reviews, setReviews] = useReveiws();
    return (
        <div>
            <div className='body-first'>
                <div className='title'>
                    <h1>Travel Your Destination</h1>
                    <p>We will help you to visit your dream place within your budget rang! <br></br>We received many 5 star reviews form our customer for the service we provided. <br></br>Hope you will rate us same. Don't bee late. Book your seat now!!!</p>
                    <button className='btn'>Book Now</button>
                </div>
                <div>
                    <img src={Place} alt="" />
                </div>

            </div>
            <div className='body-last'>
                <h2 className='h2'>Customer Reviews</h2>
                <h5> Total Review Received: {reviews.length}</h5>
                <div className='review-container'>
                    {
                        reviews.map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
                <div>
                    <button>Read All Reviews</button>
                </div>
            </div>
        </div>
    );
};

export default Home;