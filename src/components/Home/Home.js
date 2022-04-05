import React from 'react';
// import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Reviews from '../Reviews/Reviews';

import './Home.css';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className="home-container">
            <div className="text-container">
                <h1>SOUND TRAP</h1>
                <p className='headphone'>Explore our extensive range of over-ear headphones including Bluetooth & wireless headphones designed to help you enjoy your favourite music on the go.</p>
                <button className='btn'><a href="https://www.youtube.com/watch?v=nCX8ukHBmu0">Live Demo</a></button>
            </div>
            <div className="image-container">
                <img src="lenovo-removebg-preview.png" alt="" />
                <h1 className='customer'>Customer Reviews(3)</h1>
                <h3>{reviews.length}</h3>
            </div>
            <div className='review'>
                {
                    reviews.slice(0, 3).map(review => <Reviews key={review.id} review={review}></Reviews>)
                }
            </div>
        </div>

    );
};

export default Home;