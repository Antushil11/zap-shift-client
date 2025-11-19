import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { userName, review: testimonial,user_photoURL } = review;
  return (
    <div className="max-w-sm p-6 rounded-xl bg-white shadow-md  ">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-3xl text-primary mb-4" />

      {/* Text */}
      <p className="text-gray-700 leading-relaxed mb-6">
       {testimonial}
      </p>

      {/* Divider */}
      <div className="border-t border-gray-300 mb-4"></div>

      {/* Profile */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary rounded-full">
            <img src={user_photoURL} alt="" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{userName}</h4>
          <p className="text-sm text-gray-500">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
