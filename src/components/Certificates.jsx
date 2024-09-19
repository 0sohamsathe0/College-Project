import React from 'react'
import { Link } from 'react-router-dom';

const Certificates = ({meritCertificate ,participationCertificate}) => {





    return (
        <>
           <div className='w-[80%]'>
           
                       
                          <div className="w-full mt-5 overflow-x-auto shadow-md rounded-lg">
                            <table className="w-full text-sm text-center rtl:text-right text-[#0b0b51] ">
                              <thead className="text-md text-[#0b0b51] uppercase bg-yellow-500 ">
                                <tr>
                                  <th scope="col" className="px-6 py-3">
                                    Merit Certificate
                                  </th>
                                  <th scope="col" className="px-6 py-3">
                                    Link to Certificate
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                              {meritCertificate.length > 0 ? (
                      meritCertificate.map((certificate) => (
                                <tr
                                  key={certificate.title}
                                  className="bg-white border-b  hover:bg-gray-50 "
                                >
                                  <td className="px-6 py-4 text-black">
                                    {certificate.title}
                                  </td>
                                  <td className="px-6 py-4">
                                    <Link
                                      to={certificate.certificateUrl}
                                      target='_blank'
                                      className="py-2 px-5 bg-blue-500 text-white rounded-md"
                                    >
                                      Certificate
                                    </Link>
                                  </td>
                                </tr>
                             
                      ))
                      
                    ) : (
                      <>
                        <p className="text-white text-2xl py-2 px-5 border border-white rounded-xl mb-5">
                          No Merit Certifiactes Available to display
                        </p>
                      </>
                    )}
                    </tbody>
                      </table>
                    </div>

                    
                          <div className="w-full mt-5 overflow-x-auto shadow-md rounded-lg ">
                            <table className="w-full text-sm text-center rtl:text-right text-[#0b0b51] ">
                              <thead className="text-md text-[#0b0b51] uppercase bg-yellow-500 ">
                                <tr>
                                  <th scope="col" className="px-6 py-3">
                                    Participation Certificate
                                  </th>
                                  <th scope="col" className="px-6 py-3">
                                    Link to Certificate
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                              {participationCertificate.length > 0 ? (
                      participationCertificate.map((certificate) => (
                        
                                <tr
                                  key={certificate.title}
                                  className="bg-white border-b  hover:bg-gray-50 "
                                >
                                  <td className="px-6 py-4 text-black">
                                    {certificate.title}
                                  </td>
                                  <td className="px-6 py-4">
                                    <Link
                                      to={certificate.certificateUrl}
                                      target='_blank'
                                      className="py-2 px-5 bg-blue-500 text-white rounded-md"
                                    >
                                      Certificate
                                    </Link>
                                  </td>
                                </tr>
                      ))
                    ) : (
                      <>
                        <p className="text-white text-2xl py-2 px-5 mt-3">
                          No Participation Certifiactes Available to display
                        </p>
                      </>
                    )}
                    </tbody>
                    </table>
                    </div>
           </div>
        </>
    );
}

export default Certificates;
