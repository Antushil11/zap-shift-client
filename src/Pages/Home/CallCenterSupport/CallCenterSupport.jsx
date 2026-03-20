import React from "react";
import serverlogo from "../../../assets/live-tracking.png";

const CallCenterSupport = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-center">
        
          <img src={serverlogo} alt="" />
           <div className="flex-1  h-[2px] bg-gray-400"> </div>
        

        <div>
          <h1>Live Parcel Tracking</h1>
          <p>
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallCenterSupport;
