import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaEye, FaTrashAlt, FaUserCheck } from "react-icons/fa";
import { IoPersonRemove } from "react-icons/io5";
import Swal from "sweetalert2";

const ApprovedRiders = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch, data: riders = [] } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  
  const updateRiderStatus = (rider, status) => {
    const updateInfo = { status: status, email: rider.email };
    axiosSecure.patch(`/riders/${rider._id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Riders status is set to : ${status}`,
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
  };


  const handleApproval = rider => {
    updateRiderStatus(rider, 'approved');
  };

  const handleRejection = rider =>{
       updateRiderStatus(rider, "rejected")
  }

  return (
    <div className="max-w-6xl mx-auto bg-white">
      <h2 className="text-2xl font-bold py-4 text-[#03373D]">Riders Pending Approval : {riders.length}</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>NO</th>
              <th>Name</th>
              <th>Email</th>
              <th>District</th>
              <th>Application Status</th>
              <th>Work Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {riders.map((rider, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{rider.name}</td>
                <td>{rider.email}</td>
                <td>{rider.district}</td>
                <td>
                  {
                    <p
                      className={`${
                        rider.status === "approved"
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {rider.status}
                    </p>
                  }
                </td>
                <td>{rider.workStatus}</td>
                <td>
                  <button
                   
                    className="btn btn-square hover:bg-primary "
                  >
                    <FaEye />
                  </button>
                  <button
                    onClick={() => handleApproval(rider)}
                    className="btn btn-square hover:bg-primary ml-2"
                  >
                    <FaUserCheck />
                  </button>
                  <button 
                  onClick={ () => handleRejection(rider)}
                   className="btn btn-square hover:bg-primary ml-2">
                    <IoPersonRemove />
                  </button>
                  <button className="btn btn-square hover:bg-primary ml-2">
                    <FaTrashAlt />
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

export default ApprovedRiders;
