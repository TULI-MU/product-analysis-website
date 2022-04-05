import React from 'react';
import './Reviews.css';



const Reviews = (props) => {
    const { image, name, text, ratings } = props.review;
    return (
        <div className='customer-review'>
            <img src={image} alt='' />
            <h3>{name}</h3>
            <p>Review:{text}</p>
            <h4>Ratings:{ratings}</h4>



        </div>
    );
};

export default Reviews;