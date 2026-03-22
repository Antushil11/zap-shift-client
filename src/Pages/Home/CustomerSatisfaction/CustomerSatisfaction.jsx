import React from "react";
import bgimage from "../../../assets/be-a-merchant-bg.png";
import location from "../../../assets/location-merchant.png";

const CustomerSatisfaction = () => {
  return (
    <div className="bg-[#03373D] relative max-w-7xl mx-auto rounded-2xl overflow-hidden my-8">
      <img className="  absolute h-60" src={bgimage} alt="" />
      <div className="md:flex items-center  border  py-16 justify-center top-0 ">
        <div className=" text-white px-8 ">
          <h1 className="font-extrabold text-4xl">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="text-[#DADADA] py-6 ">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>

          <div className="md:flex  md:items-center md:gap-4">
            <button className="btn bg-[#CAEB66] rounded-4xl border-none px-8 py-6 text-[20px]">
              Become a Merchant
            </button>
            <button className="btn md:mt-0 md:mb-0 mt-4 mb-6 text-[#CAEB66]  bg-[#03373D] rounded-4xl border border-[#CAEB66] px-8 py-6 text-[20px]">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>
        <img src={location} alt="" />
      </div>
    </div>
  );
};

export default CustomerSatisfaction;
