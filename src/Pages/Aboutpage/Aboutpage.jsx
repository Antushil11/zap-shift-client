import React from "react";
import agent from "../../assets/brands/agent-pending.png"

const Aboutpage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#03373D]">About Zap Shift</h1>
        <p className="mt-4 text-gray-600">
          Fast, reliable, and secure delivery solutions for individuals and
          businesses.
        </p>
      </div>

      {/* About Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <img
          src={agent}
          alt="delivery"
          className="rounded-xl shadow-md"
        />

        <div>
          <h2 className="text-2xl font-bold text-[#03373D] mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            Zap Shift is a modern logistics and delivery service designed to
            make shipping faster and easier. We help businesses and individuals
            send packages safely with reliable delivery options and real-time
            tracking.
          </p>
        </div>
      </div>

      {/* Mission Vision */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h3 className="text-xl font-bold text-[#03373D] mb-3">Our Mission</h3>
          <p className="text-gray-600">
            Our mission is to provide fast, secure, and affordable delivery
            services while ensuring the highest level of customer satisfaction.
          </p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h3 className="text-xl font-bold text-[#03373D] mb-3">Our Vision</h3>
          <p className="text-gray-600">
            Our vision is to become one of the most trusted logistics companies
            by delivering innovative and reliable shipping solutions.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#03373D] mb-10">
          Why Choose Zap Shift
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold text-lg mb-2">Fast Delivery</h4>
            <p className="text-gray-600">
              We ensure your packages reach their destination quickly and
              safely.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold text-lg mb-2">Secure Shipping</h4>
            <p className="text-gray-600">
              Your packages are handled with care and tracked throughout the
              journey.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold text-lg mb-2">Affordable Pricing</h4>
            <p className="text-gray-600">
              We provide competitive delivery rates for businesses and
              individuals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
