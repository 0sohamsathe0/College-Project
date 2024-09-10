import React, { useState } from "react";
import axios from "axios";

const PlayerRegistor = () => {
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
    schoolCollageName: "",
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
      const response = await axios.post("http://localhost:3500/players/", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      alert("Player registered successfully!");
    } catch (error) {
      console.error("There was an error registering the player!", error);
      alert("There was an error registering the player.");
    }
  };

  return (
    <div className="w-full pt-24 px-20">
      <h2>Register Player</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Aadhar Card Number:</label>
          <input
            type="text"
            name="aadharCardNumber"
            value={formData.aadharCardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Event Name:</label>
          <select
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
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address Line 1:</label>
          <input
            type="text"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address Line 2:</label>
          <input
            type="text"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Pincode:</label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>School/College Name:</label>
          <input
            type="text"
            name="schoolCollageName"
            value={formData.schoolCollageName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Photo:</label>
          <input
            type="file"
            name="photo"
            onChange={handlePhotoChange}
            required
          />
        </div>
        <div>
          <label>Aadhar Card Photo:</label>
          <input
            type="file"
            name="aadharCardPhoto"
            onChange={handleAadharCardPhotoChange}
            required
          />
        </div>
        <button type="submit">Register Player</button>
      </form>
    </div>
  );
};

export default PlayerRegistor;
