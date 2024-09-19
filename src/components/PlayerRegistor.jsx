import React, { useState } from "react";
import axios from "axios";

const PlayerRegister = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dob: "",
    aadharCardNumber: "",
    eventName: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    pincode: "",
    schoolCollegeName: "",
  });

  const [photo, setPhoto] = useState(null);
  const [aadharCardPhoto, setAadharCardPhoto] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleAadharCardPhotoChange = (e) => {
    setAadharCardPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!photo || !aadharCardPhoto) {
      alert("Both photo and aadharCardPhoto are required.");
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    data.append("photo", photo);
    data.append("aadharCardPhoto", aadharCardPhoto);

    try {
      console.log("hello");
      const response = await axios.post(
        "http://localhost:3500/players/",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      alert("Player registered successfully!");
    } catch (error) {
      console.error("There was an error registering the player!", error);
      alert("There was an error registering the player.");
    }
  };

  return (
    <div className="w-full pt-24 px-24 bg-gradient-to-tl from-blue-800 to-blue-700">
      <div className=" text-[#0b0b51] text-xl rounded-3xl font-bold w-full bg-white">
        <h2 className="w-full text-center text-3xl py-5">Register Player</h2>
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="w-full px-16"
        >
          
            <div className="w-1/2 flex justify-between items-center">
              <label className="w-[30%]">Full Name:</label>
              <input
                className="w-full border border-black"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-[60%] flex justify-start space-x-16 mt-5 items-center">
              <label className="w-auto">Gender:</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-[30%] border border-black"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          

          
            <div className="w-full flex justify-start space-x-16 items-center mt-5">
              <label className="w-auto">Date of Birth:</label>
              <input
                className="w-[60%] border border-black"
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full flex justify-start space-x-10 items-center mt-5">
              <label className="w-auto">Aadhar Card Number:</label>
              <input
                className="w-[60%] border border-black"
                type="text"
                name="aadharCardNumber"
                value={formData.aadharCardNumber}
                onChange={handleChange}
                required
              />
            </div>
          
          <div className="w-full flex justify-start space-x-6  items-center mt-5">
            <label className="w-auto">Event Name:</label>
            <select
              className="w-[30%]"
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
              required
            >
              <option value="">Select Event</option>
              <option value="Epee">Epee</option>
              <option value="Foil">Foil</option>
              <option value="Sabre">Sabre</option>
            </select>
          </div>

          <div className="w-full flex justify-start space-x-6  items-center mt-5">
            <label className="w-auto">Email:</label>
            <input
              className="w-[40%] border border-black"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>


          <div className="w-full flex justify-start space-x-6  items-center mt-5">
            <label className="w-auto">Phone:</label>
            <input
              className="w-[40%] border border-black"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full flex justify-start space-x-6  items-center mt-5">
            <label className="w-auto">Address Line 1:</label>
            <input
              className="w-[40%] border border-black"
              type="text"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full flex justify-start space-x-6  items-center mt-5">
            <label className="w-auto">Address Line 2:</label>
            <input
              className="w-[40%] border border-black"
              type="text"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full flex justify-start space-x-6  items-center mt-5">
            <label className="w-auto">Pincode:</label>
            <input
              className="w-[40%] border border-black"
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full flex justify-start space-x-6  items-center mt-5">
            <label className="w-auto">School/College Name:</label>
            <input
              className="w-[40%] border border-black"
              type="text"
              name="schoolCollegeName"
              value={formData.schoolCollegeName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full flex justify-start space-x-6  items-center mt-5">
            <label className="w-auto">Photo:</label>
            <input
              className="w-[40%] border border-black py-2"
              type="file"
              name="photo"
              onChange={handlePhotoChange}
              required
            />
          </div>
          <div className="w-full flex justify-start space-x-6  items-center mt-5">
            <label className="w-auto">Aadhar Card Photo:</label>
            <input
              className="w-[40%] border border-black py-2"
              type="file"
              name="aadharCardPhoto"
              onChange={handleAadharCardPhotoChange}
              required
            />
          </div>
          <button type="submit" className="ml-[80%] border-none text-white bg-[#0b0b51] rounded-xl py-3 px-5 mb-5">Register Player</button>
        </form>
      </div>
    </div>
  );
};

export default PlayerRegister;
