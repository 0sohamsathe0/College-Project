import React, { useState } from "react";
import axios from "axios";

const AddParticipationCertificate = () => {
  const [tid, setTid] = useState("");
  const [pid, setPid] = useState("");
  const [certificate, setCertificate] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setCertificate(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!tid || !pid || !certificate) {
      setMessage("All fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append("tid", tid);
    formData.append("pid", pid);
    formData.append("certificatePhoto", certificate);

    try {
      const response = await axios.post("http://localhost:3500/admin/add-certificate/participation", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage(response.data.message);
    } catch (error) {
      console.error("Error uploading certificate:", error);
      setMessage("Error uploading certificate.");
    }
  };

  return (
    <div className="text-black font-bold bg-white rounded-3xl p-5 text-xl">
      <h2 className="text-center text-3xl py-5 text-[#0b0b51]">Add Participation Certificate</h2>
      <form onSubmit={handleSubmit}  className="flex flex-col  items-center w-full px-12">

      <div className="w-full flex justify-between items-center">
        <div className="">
          <label>Tournament ID:</label>
          <input  
            type="text"
            value={tid}
            onChange={(e) => setTid(e.target.value)}
            required
            className="h-[3rem] border border-black rounded-md mt-2"
          />
        </div>

        <div>
          <label>Participant ID:</label>
          <input
            type="text"
            value={pid}
            onChange={(e) => setPid(e.target.value)}
            required
            className="h-[3rem] border border-black rounded-md mt-2"
          />
        </div>
        </div>

        <div className="w-full mt-2 space-x-5">
          <label>Certificate:</label>
          <input type="file" onChange={handleFileChange} required />
        </div>

        <button type="submit" className="border-none bg-[#0b0b51] text-white py-3 px-5 mt-3 rounded-lg">Submit</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default AddParticipationCertificate;
