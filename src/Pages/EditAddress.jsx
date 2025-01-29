import React, { useState, useEffect } from "react";
import Addressfeild from "../Components/Address/Addressfeild";
import { indianStates } from "../Utils/countryAndState"; 
import { nanoid } from "@reduxjs/toolkit";
import { useParams, useNavigate } from "react-router-dom";

const EditAddress = () => {
  const [Error, setError] = useState({});
  const [address, setAddress] = useState({
    fullName: "",
    mobileNumber: "",
    City: "",
    pincode: "",
    flatHouse: "",
    areaStreet: "",
    landmark: "",
    country: "India", // Default value
    state: "",
    id: nanoid(),
    default: false,
  });
  
  const { id } = useParams();
  const navigate = useNavigate(); // You might want to navigate after save
  
  // UseEffect to fetch the address from localStorage when the page loads
  useEffect(() => {
    const add = JSON.parse(localStorage.getItem("myItem")) || [];
    const addressToEdit = add.find((item) => item.id === id);
    console.log(addressToEdit);
    
    if (addressToEdit) {
      setAddress(addressToEdit); // Set address state to the found address
    }
  }, [id]); // Run effect when the `id` changes

  function handleOnChange(e) {
    const { name, value } = e.target;
    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function formValidation() {
    let error = {};

    if (address.fullName === "") {
      error.fullName = "Full Name is mandatory";
    }
    if (address.mobileNumber === "") {
      error.mobileNumber = "Mobile Number is mandatory";
    }
    if (address.City === "") {
      error.City = "City cannot be empty";
    }
    if (address.pincode === "") {
      error.pincode = "Pincode is mandatory";
    } else if (!/^\d{6}$/.test(address.pincode)) {
      error.pincode = "Please enter a valid 6-digit Pincode";
    }
    if (address.flatHouse === "") {
      error.flatHouse = "Flat/House number is mandatory";
    }
    if (address.areaStreet === "") {
      error.areaStreet = "Area/Street is mandatory";
    }
    if (address.landmark === "") {
      error.landmark = "Landmark is mandatory";
    }
    if (address.state === "") {
      error.state = "State is mandatory";
    }

    if (Object.keys(error).length > 0) {
      setError(error);
      return false;
    }
    return true;
  }

  function saveData(address) {
    const add = JSON.parse(localStorage.getItem("myItem")) || [];
    if (id) {
      const updatedAdd = add.map((item) =>
        item.id === id ? { ...item, ...address } : item
      );
      localStorage.setItem("myItem", JSON.stringify(updatedAdd));
    } else {
      
      address.id = nanoid(); 
      add.push(address);
      localStorage.setItem("myItem", JSON.stringify(add));
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValidation()) {
      saveData(address);
      setError({});
     
      setAddress({
        fullName: "",
        City: "",
        mobileNumber: "",
        pincode: "",
        flatHouse: "",
        areaStreet: "",
        landmark: "",
        country: "India", // Default value
        state: "",
        id: nanoid(),
        default: false,
      });
      navigate("/addresses"); // Optionally, navigate to the address list page after saving
    } else {
      console.log(Error); // Optionally, display the error state in the UI
    }
  };

  return (
    <section className="border-2 container">
      <h1 className="text-3xl text-center">Edit Address</h1>
      <form
        onSubmit={handleSubmit}
        className="w-3/4 mx-auto flex gap-2 flex-col items-center"
      >
        <Addressfeild
          error={Error}
          name="fullName"
          value={address.fullName}
          fn={handleOnChange}
          fieldName="Full Name"
        />
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
        <Addressfeild
          error={Error}
          name="pincode"
          value={address.pincode}
          fn={handleOnChange}
          fieldName="Pincode"
        />
        <Addressfeild
          error={Error}
          name="flatHouse"
          value={address.flatHouse}
          fn={handleOnChange}
          fieldName="Flat/House no., Building, Company, Apartment"
        />
        <Addressfeild
          error={Error}
          name="areaStreet"
          value={address.areaStreet}
          fn={handleOnChange}
          fieldName="Area/Street, Sector, Village"
        />
        <Addressfeild
          error={Error}
          name="landmark"
          value={address.landmark}
          fn={handleOnChange}
          fieldName="Landmark"
        />
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
        <div className="w-3/5 p-1 flex">
          <div className="w-1/2 flex items-end">
            <button
              type="submit"
              className="text-xl font-semibold bg-red-500 text-white p-1 px-3 rounded-md"
            >
              {id ? "Update Address" : "Add Address"}
            </button>
          </div>
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
  );
};

export default EditAddress;
