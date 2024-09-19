import React, { useState } from "react";
import axios from "axios";

const AddTournament = () => {
  const [formData, setFormData] = useState({
    title: "",
    startingDate: "",
    endDate: "",
    locationState: "",
    locationCity: "",
    tlevel: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3500/admin/add-tournament", formData);
      setMessage(res.data.message);
    } catch (error) {
      setMessage("Error adding tournament");
      console.error(error);
    }
  };

  return (
    <div className="w-full h-full text-black font-bold bg-white rounded-3xl p-5 text-2xl ">
      <h2 className="text-center text-[2rem] text-[#0b0b51] py-10">Add Tournament</h2>
      <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center px-3">
        <div className="w-full flex flex-col px-12">
            <label className="w-full">Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="h-[3rem] border border-black rounded-md mt-2 mb-7"
            />
          </div>
          <div className="w-full flex flex-col px-12">
            <label>Tournament Level</label>
            <input
              type="text"
              name="tlevel"
              value={formData.tlevel}
              onChange={handleChange}
              required
              className="h-[3rem] border border-black rounded-md mt-2 mb-7"
            />
          </div>
          <div className="px-12 flex justify-between items-center gap-5">
          <div className="w-full flex flex-col">
            <label>Starting Date:</label>
            <input
              type="date"
              name="startingDate"
              value={formData.startingDate}
              onChange={handleChange}
              required
              className="h-[3rem] border border-black rounded-md mt-2 mb-7"
            />
          </div>
          <div className="w-full flex flex-col">
            <label>End Date</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
              className="h-[3rem] border border-black rounded-md mt-2 mb-7"
            />
          </div>
          </div>
          

          <div className="px-10 w-full flex justify-between items-center gap-5">
          <div className="w-1/2 flex flex-col">
            <label>Location State</label>
            <input
              type="text"
              name="locationState"
              value={formData.locationState}
              onChange={handleChange}
              required
              className="h-[3rem] border border-black rounded-md mt-2 mb-7"
            />
          </div>
          <div className="w-1/2 flex flex-col">
            <label>Location City</label>
            <input
              type="text"
              name="locationCity"
              value={formData.locationCity}
              onChange={handleChange}
              required
              className="h-[3rem] border border-black rounded-md mt-2 mb-7"
            />
          </div>
          </div>
        
        <button type="submit" className="border-none bg-[#0b0b51] text-white py-3 px-5 rounded-lg">Add Tournament</button>
      </form>
      {message && <p>{message}</p>}
    </div>

  );
};

export default AddTournament;
