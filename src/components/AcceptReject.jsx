import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AcceptReject = () => {
  const [queue, setQueue] = useState([]);

  // Fetch the pending players
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3500/admin/reqest-queue');
      setQueue(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch the queue when component mounts
  }, []);

  // Accept player
  const handleAccept = async (pid) => {
    try {
      await axios.post(`http://localhost:3500/admin/accept-player/${pid}`);
      alert(`Player with ID ${pid} accepted`);
      fetchData(); 
    } catch (error) {
      console.error('Error accepting player:', error);
    }
  };

  // Reject player
  const handleReject = async (pid) => {
    try {
      await axios.post(`http://localhost:3500/admin/reject-player/${pid}`);
      alert(`Player with ID ${pid} rejected`);
      fetchData(); 
    } catch (error) {
      console.error('Error rejecting player:', error);
    }
  };

  return (
    <div className="container w-full flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-5 text-white">Player Request Queue</h1>
      <table className="table w-full border border-white">
        <thead className='bg-yellow-400'>
          <tr>
            <th className="px-4 py-2">Player ID</th>
            <th className="px-4 py-2">Full Name</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {queue.length > 0 ? (
            queue.map((player) => (
              <tr key={player.pid} className='bg-white text[#0b0b51]'>
                <td className="border px-4 py-2">{player.pid}</td>
                <td className="border px-4 py-2">{player.fullName}</td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2 rounded"
                    onClick={() => handleAccept(player.pid)}
                  >
                    Accept
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleReject(player.pid)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="px-4 py-2" colSpan="3">
                No pending players
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AcceptReject;
