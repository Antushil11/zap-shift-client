import React from 'react';
import booking from '../../../assets/bookingIcon.png'

const Work = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-3xl font-bold text-[#03373D]'>How It Works</h1>
            <div className='grid md:grid-cols-4 border-indigo-500 gap-4 mt-6'>
                <div className=' p-6  bg-[#FFFFFF] rounded-2xl'>
                    <img src={booking} alt="" />                                     
                    <h2 className='text-2xl font-bold py-2 text-[#03373D]'>Booking Pick & Drop</h2>
                    <p className='text-[#606060]'>From personal packages to business shipments — we deliver on time, every time.</p>

                </div>
                <div className='p-6 bg-[#FFFFFF] rounded-2xl'>
                    <img src={booking} alt="" />                                      
                    <h2 className='text-2xl font-bold py-2 text-[#03373D]'>Cash On Delivery</h2>
                    <p className='text-[#606060]'>From personal packages to business shipments — we deliver on time, every time.</p>

                </div>
                <div className=' p-6 bg-[#FFFFFF] rounded-2xl'>
                  <img src={booking} alt="" />                                       
                    <h2 className='text-2xl font-bold py-2 text-[#03373D]'>Delivery Hub</h2>
                    <p className='text-[#606060]'>From personal packages to business shipments — we deliver on time, every time.</p>

                </div>
                <div className=' p-6 bg-[#FFFFFF] rounded-2xl'>
                    <img src={booking} alt="" />                                     
                    <h2 className='text-2xl font-bold py-2 text-[#03373D]'>Booking SME & Corporate</h2>
                    <p className='text-[#606060]'>From personal packages to business shipments — we deliver on time, every time.</p>

                </div>
            </div>
            
        </div>
    );
};

export default Work;