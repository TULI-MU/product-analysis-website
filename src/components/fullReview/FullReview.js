import React from 'react';
import useReviews from '../../hooks/useReviews';
import Reviews from '../Reviews/Reviews';
import './FullReview.css';

const FullReview = () => {
    const [reviews, setReviews] = useReviews();
    console.log(reviews);
    return (
        <div>
            <h1>What Our <h2 className='red'>Clients</h2> Say!!</h1>
            <div className='fullreview'>
                {
                    reviews.map(review => <Reviews key={review.id} review={review}></Reviews>)
                }
            </div>
        </div>
    );
};

export default FullReview;