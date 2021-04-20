import React from "react";
import { Rate } from "antd";
import './Rating.css'


function Rating({setRating, rating }) {
  const handleChange = value => {
    setRating(value)
  };

  
  return (
    <span className="ratingContent">
        <Rate onChange={handleChange} value={rating} />
    </span>
  );
}

export default Rating