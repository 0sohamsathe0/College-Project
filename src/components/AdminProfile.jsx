import React from "react";
import AddTournament from "./AddTournament";
import AddParticipationCertificate from "./AddParticipationCertificate";
import AddMeritCertificate from "./AddMeritCertificate";
import AcceptReject from "./AcceptReject";

const AdminProfile = () => {
  return (
    <div className="w-full bg-gradient-to-tl from-blue-800 to-blue-700 h-[100%] pt-24 px-10 grid grid-cols-2 gap-5">
      <div className="">
        <AddTournament />
      </div>
      <div className="w-full">
        <AddParticipationCertificate />
        <AddMeritCertificate />
      </div>

        <AcceptReject />
    </div>
  );
};

export default AdminProfile;
