import React, { useEffect, useState } from "react";
import axios from "axios";

const Tournaments = () => {
  const [tournaments, setTournaments] = useState({});

  const url = "http://localhost:3500/admin/getAllTournaments";

  const fetchTournaments = async () => {
    const tournamentData = await axios.get(url);
    setTournaments(tournamentData.data);
    console.log(tournamentData.data);
    
  };

  useEffect(() => {
    fetchTournaments();
  }, []);

  return (
    <>
      <div className="w-full pt-24">
        <h1 className="font-bold text-3xl mt-10 text-[#0b0b51] text-center">
          Upcoming Tournaments
        </h1>

        <div
          className=" mt-5 flex justify-center items-center flex-col overflow-x-auto shadow-md rounded-2xl">
          <table className="w-[80%] text-sm text-left rtl:text-right text-[#0b0b51] ">
            <thead className="text-xs text-[#0b0b51] uppercase bg-yellow-500">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Tournament Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Tournament Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Starting Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Ending Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Location
                </th>
                <th scope="col" className="px-6 py-3">
                  Tournament Level
                </th>
              </tr>
            </thead>
            <tbody>
              {tournaments.length > 0 ? (
                tournaments.map((tournament) => (
                  <tr className="bg-white border-b  hover:bg-gray-50 " key={tournament.tid}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap text-[#0b0b51]"
                    >
                      {tournament.tid}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap text-[#0b0b51]"
                    >
                      {tournament.title}
                    </th>

                    <td className="px-6 py-4">{tournament.startingDate}</td>
                    <td className="px-6 py-4">{tournament.endDate}</td>
                    <td className="px-6 py-4">
                      {tournament.locationCity.concat(
                        "," + tournament.locationState
                      )}
                    </td>
                    <td className="px-6 py-4">{tournament.tlevel}</td>
                  </tr>
                )
              )
              ) : 
              (
                <div></div>
              )
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Tournaments;
