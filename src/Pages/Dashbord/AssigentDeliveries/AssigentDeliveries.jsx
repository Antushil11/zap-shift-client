import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const AssigentDeliveries = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels", user.email, "driver-assigned"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${user.email}&deliveryStatus=driver-assigned`
      );
      return res.data;
    },
  });

  const handleDeliveryStatusUpdate = (parcel, status) => {
    const statusInfo = { delivertSatus: status};


    let message = `parcel Staus updated to  ${status.split('_').join(' ') } `;
    axiosSecure
      .patch(`/parcels/${parcel._id}/status`, statusInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <h2 className="text-4xl">Parcels Pending Picup: {parcels.length}</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Ocnfeirm</th>
              <th>Ohter Action</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>
                  {parcel.deliveryStatus === "driver-assigned" ? (
                    <>
                      <button
                        onClick={() => handleDeliveryStatusUpdate(parcel,'rider-arriving')}
                        className="btn btn-primary mr-2  text-black"
                      >
                        Accept
                      </button>
                      <button className="btn bg-amber-600  text-black">Reject</button>
                    </>
                  ) : (
                    <span>Delivery accpted</span>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeliveryStatusUpdate(parcel, 'parcle_picked_up')}
                    className="btn btn-primary mr-2 text-black "
                  >
                    Mark as Pick uP
                  </button>
                  <button
                    onClick={() => handleDeliveryStatusUpdate(parcel, 'parcel_delivered')}
                    className="btn btn-primary mr-2 text-black "
                  >
                     Mark as Delever
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssigentDeliveries;
