import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment?email=${user.email}`);
      return res.data;
    },
  });
  return (
    <div className="max-w-6xl mx-auto bg-white">
      <h2 className="text-2xl font-bold py-4 text-[#03373D]">Payment History: {payments.length}</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>NO</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Paid Time</th>
              <th>Transaction Id</th>
            </tr>
          </thead>
          <tbody>
            {
                payments.map((payment,index )=> <tr key={payment._id}>
              <th>{index+1}</th>
              <td>Cy Ganderton</td>
              <td>${payment.amount}</td>
              <td>{payment.paidAt}</td>
              <td>{payment.transactionId}</td>
            </tr>)
            }
            
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
