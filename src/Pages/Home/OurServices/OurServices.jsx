import React from "react";
import ServicesCard from "./ServicesCard/ServicesCard";

const OurServices = () => {
  return (
    <div className="bg-[#03373D]">
      <h1 className="text-center text-[#FFFFFF] text-4xl font-bold">Our Services</h1>
      <p className="text-center max-w-3xl mx-auto text-[#DADADA]">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
        
      </p>
      <div className=" max-w-7xl mx-auto">

      <ServicesCard></ServicesCard>
      </div>
    </div>
  );
};

export default OurServices;
