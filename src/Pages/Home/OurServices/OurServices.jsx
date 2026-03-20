import React from "react";
import ServicesCard from "./ServicesCard/ServicesCard";

const OurServices = () => {
  return (
    <div className="bg-[#03373D] rounded-2xl mt-16">
      <h1 className="text-center text-[#FFFFFF] text-4xl font-bold pt-16">Our Services</h1>
      <p className="text-center max-w-3xl mx-auto text-[#DADADA] py-4">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
        
      </p>
      <div className=" max-w-7xl mx-auto pb-16">

      <ServicesCard></ServicesCard>
      </div>
    </div>
  );
};

export default OurServices;
