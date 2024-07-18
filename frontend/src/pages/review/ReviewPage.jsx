import React from "react";
import Rating from "./Rating";
import ReviewCard from "./ReviewCard";
import { reviews } from "../../data/pet-reviews";

const ReviewPage = () => {
  return (
    <div className="p-6 grid grid-cols-4 gap-10">
      {reviews.map((review, index) => {
        return (
          <div key={index}>
            <ReviewCard
              reviewer={review.review.name}
              rating={review.rating}
              title={review.title}
              comment={review.review.comment}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ReviewPage;
