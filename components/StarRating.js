import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating=false, onRatingChange }) => {
    const totalStars = 5;
    const [hoveredStar, setHoveredStar] = useState(rating?rating:0);

    const handleStarClick = (clickedStar) => {
        onRatingChange(clickedStar);
        setHoveredStar(clickedStar);

    };

    return (
        <div>
            {Array.from({ length: totalStars }).map((_, index) => {
                const starValue = index + 1;
                const isFilled =  hoveredStar >= starValue;

                return (
                    <span
                        key={index}
                        style={{ cursor: 'pointer' }}
                        // onMouseEnter={() => setHoveredStar(starValue)}
                        // onMouseLeave={() => setHoveredStar(0)}
                        onClick={() => {
                            if (!rating){
                            handleStarClick(starValue)}}}
                    >
            {isFilled ? (
                <FaStar color="#FFD700" className="h1"/>
            ) : (
                <FaStar color="#DCDCDC" className="h3" />
            )}
          </span>
                );
            })}
        </div>
    );
};

export default StarRating;
