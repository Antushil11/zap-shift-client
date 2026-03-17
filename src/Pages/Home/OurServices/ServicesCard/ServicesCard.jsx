import React from "react";
import serviceImg from "../../../../assets/service.png";

const ServicesCard = () => {
  return (
    <div className=" grid grid-cols-3 gap-6">
      <div className="bg-white">
        <div className="rounded-2xl">
          <img src={serviceImg} alt="" />
        </div>
        <h2 className="text-2xl font-bold text-[#03373D]">
          Express & Standard Delivery
        </h2>
        <p>
          We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
          Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6
          hours from pick-up to drop-off.
        </p>
      </div>
      <div className="bg-white">
        <div className="rounded-2xl">
          <img src={serviceImg} alt="" />
        </div>
        <h2 className="text-2xl font-bold text-[#03373D]">
          Express & Standard Delivery
        </h2>
        <p>
          We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
          Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6
          hours from pick-up to drop-off.
        </p>
      </div>
      <div className="bg-white">
        <div className="rounded-2xl">
          <img src={serviceImg} alt="" />
        </div>
        <h2 className="text-2xl font-bold text-[#03373D]">
          Express & Standard Delivery
        </h2>
        <p>
          We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
          Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6
          hours from pick-up to drop-off.
        </p>
      </div>
      <div className="bg-white">
        <div className="rounded-2xl">
          <img src={serviceImg} alt="" />
        </div>
        <h2 className="text-2xl font-bold text-[#03373D]">
          Express & Standard Delivery
        </h2>
        <p>
          We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
          Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6
          hours from pick-up to drop-off.
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
