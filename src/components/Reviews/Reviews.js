import React from 'react';
import './Reviews.css';
// import useReviews from '../../hooks/useReviews';


const Reviews = (props) => {
    // const [reviews, setReviews] = useReviews();
    const { image, name, text, ratings } = props.review;
    return (

        <div className='customer-review'>
            <img src={image} alt='' />
            <h3>{name}</h3>
            <p>Review:{text}</p>
            <h4>Ratings:{ratings}</h4>

            {/* {
                reviews.map(review => <Reviews key={review.id} review={review}></Reviews>)
            } */}
        </div>
    );
};

export default Reviews;