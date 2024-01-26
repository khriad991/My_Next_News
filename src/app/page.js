import Image from "next/image";
import {Fragment} from "react";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar/>


        <br/><br/><br/><br/><br/><br/><br/><br/>

        <header className="fixed top-0 left-0 right-0 z-50">
            <nav className="bg-black">
                <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                    <div className="flex justify-between">
                        <div className="mx-w-10 text-2xl font-bold capitalize text-white flex items-center">Tailnews
                        </div>

                        <div className="flex flex-row">

                            <ul className="navbar hidden lg:flex lg:flex-row text-gray-400 text-sm items-center font-bold">
                                <li className="active relative border-l border-gray-800 hover:bg-gray-900">
                                    <a className="block py-3 px-6 border-b-2 border-transparent"
                                       href="index.html">Home</a>
                                </li>
                                <li className="dropdown relative border-l border-gray-800 hover:bg-gray-900">
                                    <a className="block py-3 px-6 border-b-2 border-transparent" href="#">Pages</a>
                                </li>
                                <li className="relative border-l border-gray-800 hover:bg-gray-900">
                                    <a className="block py-3 px-6 border-b-2 border-transparent" href="#">Sport</a>
                                </li>
                                <li className="relative border-l border-gray-800 hover:bg-gray-900">
                                    <a className="block py-3 px-6 border-b-2 border-transparent" href="#">Travel</a>
                                </li>
                                <li className="relative border-l border-gray-800 hover:bg-gray-900">
                                    <a className="block py-3 px-6 border-b-2 border-transparent" href="#">Techno</a>
                                </li>
                                <li className="relative border-l border-gray-800 hover:bg-gray-900">
                                    <a className="block py-3 px-6 border-b-2 border-transparent" href="#">Worklife</a>
                                </li>
                                <li className="relative border-l border-gray-800 hover:bg-gray-900">
                                    <a className="block py-3 px-6 border-b-2 border-transparent" href="#">Future</a>
                                </li>
                                <li className="relative border-l border-gray-800 hover:bg-gray-900">
                                    <a className="block py-3 px-6 border-b-2 border-transparent" href="#">More</a>
                                </li>
                            </ul>


                            <div className="flex flex-row items-center text-gray-300">
                                <div
                                    className="search-dropdown relative border-r lg:border-l border-gray-800 hover:bg-gray-900">
                                    <button className="block py-3 px-6 border-b-2 border-transparent">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="open bi bi-search" viewBox="0 0 16 16">
                                            <path
                                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="close bi bi-x-lg" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                  d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"></path>
                                            <path fill-rule="evenodd"
                                                  d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"></path>
                                        </svg>
                                    </button>
                                    <div
                                        className="dropdown-menu absolute left-auto right-0 top-full z-50 text-left bg-white text-gray-700 border border-gray-100 mt-1 p-3"
                                        style={{minWidth: "12rem"}}>
                                        <div className="flex flex-wrap items-stretch w-full relative">
                                            <input type="text"
                                                   className="flex-shrink flex-grow flex-shrink max-w-full leading-5 w-px flex-1 relative py-2 px-5 text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
                                                   name="text" placeholder="Search..." aria-label="search" />
                                                <div className="flex -mr-px">
                                                    <button
                                                        className="flex items-center py-2 px-5 -ml-1 leading-5 text-gray-100 bg-black hover:text-white hover:bg-gray-900 hover:ring-0 focus:outline-none focus:ring-0"
                                                        type="submit">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             fill="currentColor" className="bi bi-search"
                                                             viewBox="0 0 16 16">
                                                            <path
                                                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative hover:bg-gray-800 block lg:hidden">
                                    <button type="button"
                                            className="menu-mobile block py-3 px-6 border-b-2 border-transparent">
                                        <span className="sr-only">Mobile menu</span>
                                        <svg className="inline-block h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg"
                                             fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M4 6h16M4 12h16M4 18h16"></path>
                                        </svg>
                                        Menu
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    </div>
  );
}
