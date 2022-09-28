import React, { useState } from 'react';
import { BsCameraVideoFill, BsThreeDotsVertical } from 'react-icons/bs';
import { FiLogOut, FiUser } from 'react-icons/fi';
import { IoCall } from 'react-icons/io5';
import useAuth from './../../../Hooks/useAuth';

const TopBar = () => {
    const { user, handleLogOut } = useAuth();
    const [profile, setProfile] = useState(false);
    const [show, setShow] = useState(false);
    return (
        <nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow relative z-10">
            <div className="hidden lg:flex w-full pr-6">
                <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">
                    <div className="relative w-full">
                        <div className="flex items-center justify-start px-8">
                            <div className="w-10 h-10 bg-cover rounded-md mr-3">
                                <img src={user.photoURL} alt="user" className="rounded-full h-full w-full overflow-hidden shadow" />
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm font-medium">{user.displayName}</p>
                                <p className="text-gray-600 text-xs">{user.phoneNumber}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 hidden lg:flex">
                    <div className="w-full flex items-center pl-8 justify-end">
                        <div className="h-full w-20 flex items-center justify-center border-r border-l">
                            <div className="relative cursor-pointer text-gray-600">
                                <IoCall className="text-blue-500 icon icon-tabler icon-tabler-bell" width={28} height={28} />
                            </div>
                        </div>
                        <div className="h-full w-20 flex items-center justify-center border-r mr-4 cursor-pointer text-gray-600">
                            <BsCameraVideoFill className="text-blue-500 icon icon-tabler icon-tabler-messages" width={28} height={28} />
                        </div>
                        <div className="flex items-center relative cursor-pointer w-3/12" onClick={() => setProfile(!profile)}>
                            <div className="rounded-full w-full">
                                {profile ? (
                                    <ul className="p-2 w-full border-r bg-white absolute rounded left-0 shadow mt-12 sm:mt-10">
                                        <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center">
                                            <div className="flex items-center">
                                                <FiUser />
                                                <span className="text-sm ml-2">My Profile</span>
                                            </div>
                                        </li>
                                        <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mt-2">
                                            <div className="flex items-center" onClick={handleLogOut}>
                                                <FiLogOut />
                                                <span className="text-sm ml-2">Sign out</span>
                                            </div>
                                        </li>
                                    </ul>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="cursor-pointer text-gray-600">
                                <BsThreeDotsVertical className="icon icon-tabler icon-tabler-chevron-down" width={20} height={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-gray-600 mr-8 visible lg:hidden relative" onClick={() => setShow(!show)}>
                {show ? (
                    " "
                ) : (
                    <svg aria-label="Main Menu" aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu cursor-pointer" width={30} height={30} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1={4} y1={8} x2={20} y2={8} />
                        <line x1={4} y1={16} x2={20} y2={16} />
                    </svg>
                )}
            </div>
        </nav>
    );
};

export default TopBar;