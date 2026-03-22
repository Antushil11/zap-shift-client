import React from "react";
import serverlogo from "../../../assets/live-tracking.png";
import safedelivery from "../../../assets/safe-delivery.png";

const CallCenterSupport = () => {
  return (
    <div className="py-8">
      <div className="md:flex my-4  md:flex-row items-center p-8 justify-center max-w-7xl mx-auto bg-[#FFFFFF] rounded-2xl">
        <img className="" src={serverlogo} alt="" />

        <div className="  pl-4  ">
          <h1 className="text-2xl font-bold py-4 text-[#03373D]">
            Live Parcel Tracking
          </h1>
          <p className="text-[#606060]">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
      <div className="md:flex my-4  md:flex-row  items-center p-8 justify-center max-w-7xl mx-auto bg-[#FFFFFF] rounded-2xl">
        <img className="" src={safedelivery} alt="" />

        <div className="  pl-4  ">
          <h1 className="text-2xl font-bold py-4 text-[#03373D]">
            100% Safe Delivery
          </h1>
          <p className="text-[#606060]">
            We ensure your parcels are handled with the utmost care and
            delivered securely to their destination. Our reliable process
            guarantees safe and damage-free delivery every time.
          </p>
        </div>
      </div>
      <div className="md:flex my-4  md:flex-row  items-center p-8 justify-center max-w-7xl mx-auto bg-[#FFFFFF] rounded-2xl">
        <img className="" src={safedelivery} alt="" />

        <div className="  pl-4  ">
          <h1 className="text-2xl font-bold py-4 text-[#03373D]">
            24/7 Call Center Support
          </h1>
          <p className="text-[#606060]">
            Our dedicated support team is available around the clock to assist
            you with any questions, updates, or delivery concerns—anytime you
            need us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallCenterSupport;
