import React from "react";
import { VscLinkExternal } from "react-icons/vsc";

const Frequently = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 flex flex-col gap-6 py-8">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl text-[#03373D] font-extrabold ">
          Frequently Asked Question (FAQ)
        </h1>
        <p className="text-center text-[#606060] py-6">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      <div>
        <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
          <input type="checkbox" />
          <div className="collapse-title text-2xl font-bold  text-[#03373D]">
            How does this posture corrector work?
          </div>
          <div className="collapse-content text-sm text-[#606060]">
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day. Here’s how it typically
            functions: A posture corrector works by providing support and gentle
            alignment to your shoulders.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
          <input type="checkbox" />
          <div className="collapse-title text-2xl font-bold  text-[#03373D]">
            Is it suitable for all ages and body types?
          </div>
          <div className="collapse-content text-sm text-[#606060]">
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day. Here’s how it typically
            functions: A posture corrector works by providing support and gentle
            alignment to your shoulders.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
          <input type="checkbox" />
          <div className="collapse-title text-2xl font-bold  text-[#03373D]">
            Does it really help with back pain and posture improvement?
          </div>
          <div className="collapse-content text-sm text-[#606060]">
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day. Here’s how it typically
            functions: A posture corrector works by providing support and gentle
            alignment to your shoulders.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
          <input type="checkbox" />
          <div className="collapse-title text-2xl font-bold  text-[#03373D]">
            Does it have smart features like vibration alerts?
          </div>
          <div className="collapse-content text-sm text-[#606060]">
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day. Here’s how it typically
            functions: A posture corrector works by providing support and gentle
            alignment to your shoulders.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
          <input type="checkbox" />
          <div className="collapse-title text-2xl font-bold  text-[#03373D]">
            How will I be notified when the product is back in stock?
          </div>
          <div className="collapse-content text-sm text-[#606060]">
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day. Here’s how it typically
            functions: A posture corrector works by providing support and gentle
            alignment to your shoulders.
          </div>
        </div>
      </div>
      <div className="w-48  mx-auto flex items-center gap-1 justify-center">
        <button className="btn rounded-2xl bg-[#CAEB66] font-bold ">
          See More FAQ’s{" "}
        </button>
        <a className="bg-black w-40 link link-hover no-underline  rounded-full h-10 flex items-center justify-center ">
          <VscLinkExternal className="text-[#CAEB66] " size={20} />
        </a>
      </div>
    </div>
  );
};

export default Frequently;
