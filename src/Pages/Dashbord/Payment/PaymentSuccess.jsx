import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const [paymentInfo, setPaymentInfo] = useState({});
    const sessoinId = searchParams.get('session_id')
    const axiosSecure = useAxiosSecure();

    console.log(sessoinId);

    useEffect(() =>{
        if(sessoinId){
          axiosSecure.patch(`/payment-success?session_id=${sessoinId}`)
          .then(res =>{
            console.log(res.data)
            setPaymentInfo({
              transactionId: res.data.transactionId,
              trackingId: res.data.trackingId
            })
          })
        }
        
    },[sessoinId,axiosSecure])


    return (
        <div>
            <h2 className="text-4xl">Payment successfull</h2>
            <p>Your TranctionId: {paymentInfo.transactionId}</p>
            <p>Your Parcel Tracking id: {paymentInfo.trackingId}</p>
            
        </div>
    );
};

export default PaymentSuccess;