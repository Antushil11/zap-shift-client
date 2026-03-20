import React from "react";
import serviceImg from "../../../../assets/service.png";

const ServicesCard = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 text-center">
      <div className="bg-white transition transform hover:scale-105 hover:shadow-xl duration-400 hover:bg-[#CAEB66] hover: flex flex-col items-center justify-center  p-8 rounded-2xl">
        <div className="rounded-2xl">
          <img className="rounded-2xl " src={serviceImg} alt="" />
        </div>
        <h2 className="text-2xl font-bold text-[#03373D] py-4">
          Express & Standard Delivery
        </h2>
        <p>
          We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
          Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6
          hours from pick-up to drop-off.
        </p>
      </div>
      <div className="bg-white transform transition hover:scale-106  hover:shadow-2xl duration-400 hover:bg-[#CAEB66]  flex flex-col items-center justify-center  p-8 rounded-2xl">
        <div className="rounded-2xl">
          <img className="rounded-2xl " src={serviceImg} alt="" />
        </div>
        <h2 className="text-2xl font-bold text-[#03373D] py-4">
          Nationwide Delivery
        </h2>
        <p>
          We deliver parcels nationwide with home delivery in every district,
          ensuring your products reach customers within 48–72 hours.
        </p>
      </div>
      <div className="bg-white transform transition hover:scale-106  hover:shadow-2xl duration-400 hover:bg-[#CAEB66] flex flex-col items-center justify-center  p-8 rounded-2xl">
        <div className="rounded-2xl">
          <img className="rounded-2xl " src={serviceImg} alt="" />
        </div>
        <h2 className="text-2xl font-bold text-[#03373D] py-4">
          Fulfillment Solution
        </h2>
        <p>
          We also offer customized service with inventory management support,
          online order processing, packaging, and after sales support.
        </p>
      </div>
      <div className="bg-white transform transition hover:scale-106  hover:shadow-2xl duration-400 hover:bg-[#CAEB66] flex flex-col items-center justify-center  p-8 rounded-2xl">
        <div className="rounded-2xl">
          <img className="rounded-2xl " src={serviceImg} alt="" />
        </div>
        <h2 className="text-2xl font-bold text-[#03373D] py-4">
          Cash on Home Delivery
        </h2>
        <p>
          100% cash on delivery anywhere in Bangladesh with guaranteed safety of
          your product.
        </p>
      </div>
      <div className="bg-white transform transition hover:scale-106  hover:shadow-2xl duration-400 hover:bg-[#CAEB66] flex flex-col items-center justify-center  p-8 rounded-2xl">
        <div className="rounded-2xl">
          <img className="rounded-2xl " src={serviceImg} alt="" />
        </div>
        <h2 className="text-2xl font-bold text-[#03373D] py-4">
          Corporate Service / Contract In Logistics
        </h2>
        <p>
          Customized corporate services which includes warehouse and inventory
          management support.
        </p>
      </div>
      <div className="bg-white transform transition hover:scale-106  hover:shadow-2xl duration-400 hover:bg-[#CAEB66] flex flex-col items-center justify-center  p-8 rounded-2xl">
        <div className="rounded-2xl">
          <img className="rounded-2xl " src={serviceImg} alt="" />
        </div>
        <h2 className="text-2xl font-bold text-[#03373D] py-4">
          Parcel Return
        </h2>
        <p>
          Through our reverse logistics facility we allow end customers to
          return or exchange their products with online business merchants.
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
