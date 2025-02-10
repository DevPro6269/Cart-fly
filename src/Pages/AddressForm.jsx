import React, { useState } from "react";
import Addressfeild from "../Components/Address/Addressfeild";
import { indianStates } from "../Utils/countryAndState"; // Assuming this file has the indianStates array
import { nanoid } from "@reduxjs/toolkit";

const AddressForm = () => {
  const [Error, setError] = useState({});
  const [address, setAddress] = useState({
    fullName: "",
    mobileNumber: "",
    City:"",
    pincode: "",
    flatHouse: "",
    areaStreet: "",
    landmark: "",
    country: "India", // Default value
    state: "",
    id:nanoid(),
    default:false,
  });

  function handleOnChange(e) {
    const { name, value } = e.target;
    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(address);
    
  }

  function formValidation() {
    let error = {};

    // Check if Full Name is empty
    if (address.fullName === "") {
      error.fullName = "Full Name is mandatory";
    }

    // Check if Mobile Number is empty or invalid
    if (address.mobileNumber === "") {
      error.mobileNumber = "Mobile Number is mandatory";
    }
    
    // else if (!/^\d{10}$/.test(address.mobileNumber)) {
    //   error.mobileNumber = "Please enter a valid 10-digit Mobile Number";
    // }

    if (address.City === "") {
      error.City = "City can not be empty";
    }

    // Check if Pincode is empty or invalid
    if (address.pincode === "") {
      error.pincode = "Pincode is mandatory";
    } else if (!/^\d{6}$/.test(address.pincode)) {
      error.pincode = "Please enter a valid 6-digit Pincode";
    }

    // Check if Flat/House is empty
    if (address.flatHouse === "") {
      error.flatHouse = "Flat/House number is mandatory";
    }

    // Check if Area/Street is empty
    if (address.areaStreet === "") {
      error.areaStreet = "Area/Street is mandatory";
    }

    // Check if Landmark is empty
    if (address.landmark === "") {
      error.landmark = "Landmark is mandatory";
    }

    // Check if State is selected
    if (address.state === "") {
      error.state = "State is mandatory";
    }

    // If there are errors, set them in state and return false
    if (Object.keys(error).length > 0) {
      setError(error);
      return false;
    }
    return true;
  }
  
  function saveData(address) {
    const add = JSON.parse(localStorage.getItem("myItem")) || [];
    add.push(address);
    localStorage.setItem("myItem", JSON.stringify(add));
  }

  // Handle form submission (you can replace with an actual function for submission)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValidation()) {
      saveData(address);
      setError({});
      setAddress({
        fullName: "",
        City:"",
        mobileNumber: "",
        pincode: "",
        flatHouse: "",
        areaStreet: "",
        landmark: "",
        country: "India", // Default value
        state: "",
      });
      // Proceed with API call or save the data here
    } else {
      console.log(Error);
      // Optionally, you could display the error state in your UI
    }
  };

  return (
    <>
      <section className="border-2 container">
        <h1 className="text-3xl text-center">Add New Address</h1>
        <br />
        <form
          onSubmit={handleSubmit}
          className="w-3/4 mx-auto flex gap-2 flex-col items-center"
        >
          {/* Full Name */}
          <Addressfeild
            error={Error}
            name="fullName"
            value={address.fullName}
            fn={handleOnChange}
            fieldName="Full Name"
          />

          {/* Mobile Number */}
          <Addressfeild
            error={Error}
            name="mobileNumber"
            value={address.mobileNumber}
            fn={handleOnChange}
            fieldName="Mobile Number"
          />

          <Addressfeild
            error={Error}
            name="City"
            value={address.City}
            fn={handleOnChange}
            fieldName="City"
          />
          {/* Pincode */}
          <Addressfeild
            error={Error}
            name="pincode"
            value={address.pincode}
            fn={handleOnChange}
            fieldName="Pincode"
          />

          {/* Flat/House */}
          <Addressfeild
            error={Error}
            name="flatHouse"
            value={address.flatHouse}
            fn={handleOnChange}
            fieldName="Flat, House no., Building, Company, Apartment"
          />

          {/* Area/Street */}
          <Addressfeild
            error={Error}
            name="areaStreet"
            value={address.areaStreet}
            fn={handleOnChange}
            fieldName="Area, Street, Sector, Village"
          />

          {/* Landmark */}
          <Addressfeild
            error={Error}
            name="landmark"
            value={address.landmark}
            fn={handleOnChange}
            fieldName="Landmark"
          />

          {/* Country Field */}
          <div className="w-3/5">
            <label className="font-bold" htmlFor="country">
              Country
            </label>
            <select
              className="w-full outline outline-blue-400 p-1"
              name="country"
              value={address.country}
              onChange={handleOnChange}
            >
              <option value="India">India</option>
            </select>
          </div>

          {/* State Field */}
          <div className="w-3/5 p-1 flex">
            {/* Button */}
            <div className="w-1/2 flex items-end">
              <button
                type="submit"
                className="text-xl font-semibold bg-red-500 text-white p-1 px-3 rounded-md"
              >
                Add Address
              </button>
            </div>

            {/* State List */}
            <div className="w-1/2">
              <label className="font-bold" htmlFor="state">
                State
              </label>
              <select
                className="w-full outline outline-blue-400 p-1"
                name="state"
                value={address.state}
                onChange={handleOnChange}
              >
                <option value="">Select State</option>
                {indianStates.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              {Error.state && (
                <p className="text-red-500 text-sm">{Error.state}</p>
              )}
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddressForm;
