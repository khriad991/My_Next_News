"use client"
import {FiSearch} from "react-icons/fi";
import Link from "next/link";
import React, {useState} from "react";
import {FaFacebookF, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa";
import {FaRegCalendarDays} from "react-icons/fa6";
const NavBar = ({category,socials}) => {
    const [searchKey ,setSearchKey] = useState('0')
    return (

        <header className="">
            <div className="py-2 bg-indigo-100-50 text-black sticky top-0 ">
                <div className="container ">
                    <div className="flex justify-between items-center">
                        <div className="flex-1">
                            <h6 className="flex items-center">
                                <FaRegCalendarDays size={22}  className='text-gray-900 hover:text-gray-700 mr-4 transition-all duration-300'/>  Today:
                                <span>
                                    {" "}
                                    {new Date().getDay()}/
                                    {new Date().getMonth()}/
                                    {new Date().getFullYear()}{" "}
                                </span>
                            </h6>
                        </div>
                        <div className="flex-1   ">
                            <span className="flex justify-end items-center gap-x-2">
                                <a
                                    target="_blank"
                                    className="text-white"
                                    href={socials[0]["facebook"]}
                                >
                                   <FaFacebookF size={22}  className='text-gray-900 hover:text-gray-700  transition-all duration-300' />
                                </a>
                                <a
                                    target="_blank"
                                    className="text-white"
                                    href={socials[0]["youtube"]}
                                >
                                <FaYoutube size={22}  className='text-gray-900 hover:text-gray-700  transition-all duration-300' />
                                </a>
                                <a
                                    target="_blank"
                                    className="text-white"
                                    href={socials[0]["twitter"]}
                                >
                                   <FaTwitter size={22}  className='text-gray-900 hover:text-gray-700  transition-all duration-300' />
                                </a>
                                <a
                                    target="_blank"
                                    className="text-white"
                                    href={socials[0]["linkedin"]}
                                >
                                   <FaLinkedin size={22}  className='text-gray-900 hover:text-gray-700  transition-all duration-300' />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black py-3 sticky top-0  ">
                <div className="container ">
                    <div className="flex justify-between flex-col lg:flex-row">
                        <div className="w-fit text-left mr-8">
                            <strong className="text-2xl text-white font-bold">LoGo</strong>
                        </div>
                        <div className="flex-[10] mt-2">
                            <ul className='flex item-center justify-start gap-x-4 flex-row '>
                                <li >
                                    <Link className="capitalize text-sm text-white -mr-4 hover:text-gray-300 trasition-all duration-300 font-semibold fast:px-4" href="/">
                                        Home
                                    </Link>
                                </li>))
                                {category.map((item,id)=>(
                                    <li key={1}>
                                        <Link className="capitalize text-sm text-white hover:text-gray-300 trasition-all duration-300 font-semibold" href={`/category?catID=${item["id"]}`}>
                                            {item['name']}
                                        </Link>
                                    </li>))
                                }
                            </ul>
                        </div>
                        <div className="flex-[2] justify-end">
                            <div className="flex justify-center item-eenter relative  ">
                                <input type="text"
                                      onChange={e=> setSearchKey(e.target.value)}
                                       placeholder="Search Hera..."
                                       className="bg-white rounded-lg focus:bg-gray-700 trasition duration-300 outline-none  border-y-2 border-x-[3px] border-gold-900 w-[300px] py-2 px-4"
                                />
                                <Link href={`/search?keyword=${searchKey}`}  className="bg-gray-600 w-auto px-4 py-[7px] rounded-lg hover:bg-gray-800 trasition-all duration-300 absolute top-[3px] right-[4px]">
                                    <FiSearch className="text-2xl text-white font-bold flex justify-center item-center"/>
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 ml-4 flex justify-end items-center">
                                <Link href='/login' className="bg-blue-100 px-8 py-2 border-2 border-blue-200 hover:border-gray-800  rounded-lg text-black hover:bg-white font-bold transition-all capitalize duration-300 ">
                                    login
                                </Link>
                        </div>
                    </div>
                </div>
            </div>

        </header>



    );
};

export default NavBar;





