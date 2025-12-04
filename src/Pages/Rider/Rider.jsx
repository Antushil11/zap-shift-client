import React from "react";
import { useForm, useWatch } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Rider = () => {
  const {
    register,
    handleSubmit,
    control,
    // formState: { error },
  } = useForm();

  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const riderRegion = useWatch({ control, name: "region" });

  const handleRiderApplication = (data) => {
    console.log(data);
    axiosSecure.post("/riders", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your application has been submitted. we will reach to you in 145 day",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-4xl text-primary">Be a Rider</h2>

      <form
        onSubmit={handleSubmit(handleRiderApplication)}
        className="mt-12 p-4 text-black"
      >
        {/* two colum */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 my-8">
          {/* rider info details */}

          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Rider Details</h4>
            {/* rider name */}
            <label className="label">Rider Name</label>
            <input
              type="text"
              {...register("name")}
              defaultValue={user?.displayName}
              className="input w-full"
              placeholder="Sender Name"
            />

            {/* rider Email */}
            <label className="label"> Email</label>
            <input
              type="email"
              {...register("email")}
              defaultValue={user?.email}
              className="input w-full"
              placeholder="Sender Email"
            />

            {/* rider region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Regions</legend>
              <select
                {...register("region")}
                defaultValue="Pick a region"
                className="select"
              >
                <option disabled={true}>Pick a region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* rider Districts*/}
            <fieldset className="fieldset">
              <legend className="fieldset-legend"> Districts</legend>
              <select
                {...register("district")}
                defaultValue="Pick a district"
                className="select"
              >
                <option disabled={true}>Pick a district</option>
                {districtsByRegion(riderRegion).map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* rider address */}
            <label className="label mt-2">Your Address</label>
            <input
              type="text"
              {...register("address")}
              className="input w-full"
              placeholder="Sender Address"
            />
          </fieldset>

          {/* receiver Details */}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">More Details</h4>
            {/* receiver name */}
            <label className="label">Driving License</label>
            <input
              type="text"
              {...register("license")}
              className="input w-full"
              placeholder="Driving License"
            />
            {/* receiver Email */}
            <label className="label">NID</label>
            <input
              type="text"
              {...register("nid")}
              className="input w-full"
              placeholder="NID"
            />

            {/* Bike Info */}

            <label className="label mt-2">Bike Info</label>
            <input
              type="text"
              {...register("bike")}
              className="input w-full"
              placeholder="Bike"
            />
          </fieldset>
        </div>

        <input
          type="submit"
          value="Apply as a Rider"
          className="btn btn-primary mt-4 text-black"
        />
      </form>
    </div>
  );
};

export default Rider;
