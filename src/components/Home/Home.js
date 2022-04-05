import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Reviews from '../Reviews/Reviews';

import './Home.css';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    const navigate = useNavigate();
    const seeMore = () => {
        const path = `/reviews`;
        navigate(path);
    }
    return (
        <div>
            <div className="home-container">
                <div className="text-container">
                    <h1>SOUND TRAP</h1>
                    <p className='headphone'>Explore our extensive range of over-ear headphones including Bluetooth & wireless headphones designed to help you enjoy your favourite music on the go.</p>
                    <button className='btn'><a href="https://www.youtube.com/watch?v=nCX8ukHBmu0">Live Demo</a></button>
                </div>
                <div className="image-container">
                    <img src="lenovo-removebg-preview.png" alt="" />
                </div>
            </div>
            <div >
                <h1 className='customer'>Customer Reviews</h1>
                <div className='review'>
                    {
                        reviews.slice(0, 3).map(review => <Reviews key={review.id} review={review}></Reviews>)
                    }
                </div>
                <div>
                    <button onClick={seeMore} className="se-more">See All Customers</button>
                </div>
            </div>
        </div>

    );
};

export default Home;