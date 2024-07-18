import React from "react";
import Rating from "./Rating";

const ReviewCard = ({ rating = 4, title, comment, animal, reviewer }) => {
  return (
    <div>
      <a
        href="#"
        class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {reviewer}
        </h5>
        <Rating rating={rating} />
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {animal}
        </h5>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>

        <p class="font-normal text-gray-700 dark:text-gray-400">{comment}</p>
      </a>
    </div>
  );
};

export default ReviewCard;
