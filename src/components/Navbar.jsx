import React from 'react'
import { NavLink, Routes, Route, Link } from 'react-router-dom'
import '../App.css'
import Home from "./Home.jsx"
// import Account from "./Account.jsx"
import Adminlogin from "./Adminlogin.jsx"
// import Certificates from "./Certificates.jsx"
import Logo from '../assets/Logo.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import PlayerRegistor from './PlayerRegistor.jsx'
import PlayerLogin from './PlayerLogin.jsx'
// import MatchesPlayed from './MatchesPlayed.jsx'
// import UpcomingTournaments from './UpcomingTournaments.jsx'
// import PersonalDetails from './PersonalDetails.jsx'
import AdminProfile from './AdminProfile.jsx'
import PlayerProfile from './PlayerProfile.jsx'
import Tournaments from './Tournaments.jsx'





const Navbar = () => {
    return (
        <>

            <nav className='flex justify-between items-center gap-5 absolute w-full text-white'>


                <div className='logo w-1/5 flex items-center'>
                    <Link to="/">
                        <img src={Logo} alt="logo" width={100} />
                    </Link>
                </div>



                <div className='links_container hidden md:flex  w-full justify-between items-center  bg-transparent text-[.7rem] lg:text-md xl:text-lg font-bold'>
                    <NavLink to="/" className={({ isActive }) => `${isActive ? "border border-white rounded-sm xl:rounded-xl hover:no-underline px-3 py-2 xl:px-5 xl:py-3" : "text-white"} duration-200 ease-in-out`}>Home</NavLink>
                    <NavLink to="admin" className={({ isActive }) => `${isActive ? "border border-white rounded-sm xl:rounded-xl hover:no-underline px-3 py-2 xl:px-5 xl:py-3" : "text-white"} duration-200 ease-in-out`}>Admin Login</NavLink>
                    <NavLink to="playerLogin" className={({ isActive }) => `${isActive ? "border border-white rounded-sm xl:rounded-xl hover:no-underline px-3 py-2 xl:px-5 xl:py-3" : "text-white"} duration-200 ease-in-out`}>Player Login</NavLink>
                    <NavLink to="playerRegistor" className={({ isActive }) => `${isActive ? "border border-white rounded-sm xl:rounded-xl hover:no-underline px-3 py-2 xl:px-5 xl:py-3" : "text-white"} duration-200 ease-in-out`}>Player Registor</NavLink>
                    <NavLink to="playerprofile" className={({ isActive }) => `${isActive ? "border border-white rounded-sm xl:rounded-xl hover:no-underline px-3 py-2 xl:px-5 xl:py-3" : "text-white"} duration-200 ease-in-out`}>Player account</NavLink>
                    <NavLink to="adminprofile" className={({ isActive }) => `${isActive ? "border border-white rounded-sm xl:rounded-xl hover:no-underline px-3 py-2 xl:px-5 xl:py-3" : "text-white"} duration-200 ease-in-out`}>Admin account</NavLink>
                    <NavLink to="tournaments" className={({ isActive }) => `${isActive ? "border border-white rounded-sm xl:rounded-xl hover:no-underline px-3 py-2 xl:px-5 xl:py-3" : "text-white"} duration-200 ease-in-out`}>Tournaments</NavLink>
                </div>


                <div className="hamburgerBtn w-[4rem] md:hidden flex flex-col gap-[5px] cursor-pointer mr-2 border border-white p-[10px] rounded-md">
                    <span className=' w-full h-[5px] bg-white rounded-full m-0 p-0'></span>
                    <span className=' w-full h-[5px] bg-white rounded-full m-0 p-0'></span>
                    <span className=' w-full h-[5px] bg-white rounded-full m-0 p-0'></span>
                </div>

                <div className='socialLinks w-1/5 hidden md:flex justify-evenly items-center text-2xl font-extrabold'>
                    <Link to="/">
                        <FaInstagram />
                    </Link >
                    <Link to="/">
                        <FaFacebookSquare />
                    </Link>
                    <Link to="/">
                        <CiYoutube />
                    </Link>
                </div>


            </nav>



            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="admin" element={<Adminlogin />} />
                <Route path='playerLogin' element={<PlayerLogin />} />
                <Route path='playerRegistor' element={<PlayerRegistor />} />
                <Route path='adminprofile' element={<AdminProfile />} />
                {/* <Route path="account" element={<Account />}>
                    <Route index element={<PersonalDetails />} />
                    <Route path='certificates' element={<Certificates />} />
                    <Route path='upcomingTournaments' element={<UpcomingTournaments />} />
                    <Route path="matchesPlayed" element={<MatchesPlayed />} />
                    </Route> */}
                    <Route path='playerprofile' element={<PlayerProfile />} />
                    <Route path="tournaments" element={<Tournaments />} />
            </Routes>

        </>
    )
}

export default Navbar
