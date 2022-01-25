import React, { useState } from "react";
import lgLogo from "../../images/brand-logo.png";
import smLogo from "../../images/sm-brand-logo.png";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState();
    const handleClickMenu = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    };
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto lg:px-10 px-8 py-2 container">
                <div className="flex items-justify justify-between">
                    <div className="flex-shrink-0">
                        <a href="#">
                            <img
                                className="h-14 w-auto hidden lg:block"
                                src={lgLogo}
                                alt="Engineer Cradle"
                            />
                            <img
                                className="h-12 w-auto block lg:hidden"
                                src={smLogo}
                                alt="Engineer Cradle"
                            />
                        </a>
                    </div>
                    <div className="">
                        <div className="hidden md:block">
                            <div className="flex items-end">
                                <a
                                    href="#"
                                    className=" hover:bg-gray-50 text-gray-800 px-3 py-2 rounded-md text-lg font-semibold"
                                >
                                    About us
                                </a>
                                <a
                                    href="#"
                                    className=" hover:bg-gray-50 text-gray-800 px-3 py-2 rounded-md text-lg font-semibold"
                                >
                                    Contact us
                                </a>
                                <a
                                    href="#"
                                    className=" hover:bg-gray-50 text-gray-800 px-3 py-2 rounded-md text-lg font-semibold"
                                >
                                    Careers&nbsp;
                                    <button
                                        type="button"
                                        className="bg-blue-50 hover:bg-blue-400 text-blue-500 hover:text-white focus:outline-none px-2 py-1 text-sm font-semibold rounded-lg"
                                    >
                                        hiring now!
                                    </button>
                                </a>
                                <button
                                    type="button"
                                    className="text-sm hover:bg-blue-400 bg-white hover:text-white text-blue-500 mr-3 py-2 px-10 border-2  border-solid border-blue-400 focus:outline-none rounded-lg"
                                >
                                    Login
                                </button>
                                <button
                                    type="button"
                                    className="text-sm hover:bg-blue-400 bg-blue-400 hover:text-white text-white py-2 px-6 border-2  border-solid border-blue-400 focus:outline-none rounded-lg"
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>

                        {/* Responsive Toggle button */}
                        <div className=" block md:hidden">
                            <button
                                type="button"
                                onClick={handleClickMenu}
                                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-gray-300"
                            >
                                {isOpen ? (
                                    <svg
                                        className=" h-8 w-8"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden={isOpen}
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className=" h-8 w-8"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden={!isOpen}
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col content-between">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a
                            href="#"
                            className="block hover:bg-gray-50 text-gray-600 mx-5 py-3 text-2xl font-semibold border-solid border-b-2 border-blue-200"
                        >
                            Events
                        </a>
                        <a
                            href="#"
                            className="block hover:bg-gray-50 text-gray-600 mx-5 py-3 text-2xl font-semibold border-solid border-b-2 border-blue-200"
                        >
                            Courses
                        </a>

                        <a
                            href="#"
                            className="block hover:bg-gray-50 text-gray-600 mx-5 py-3 text-2xl font-semibold border-solid border-b-2 border-blue-200"
                        >
                            Careers
                        </a>
                        <a
                            href="#"
                            className="block hover:bg-gray-50 text-gray-600 mx-5 py-3 text-2xl font-semibold border-solid border-b-2 border-blue-200"
                        >
                            About us
                        </a>
                        <a
                            href="#"
                            className="block hover:bg-gray-50 text-gray-600 mx-5 py-3 text-2xl font-semibold border-solid border-b-2 border-blue-200"
                        >
                            Contact us
                        </a>
                    </div>
                    <div className="pt-10 pb-2">
                        <button
                            type="button"
                            className="block mx-auto w-4/5 text-lg border-white hover:border-blue-300 border-2 bg-white hover:bg-gray-50 text-blue-600 my-2 py-2 border-solid focus:outline-none rounded-lg hover:shadow-md"
                        >
                            Login
                        </button>
                        <button
                            type="button"
                            className="block mx-auto w-4/5  text-lg hover:border-blue-300 border-2 bg-blue-400 hover:bg-gray-50 text-blue-600 my-2 py-2 border-solid border-white focus:outline-none rounded-lg hover:shadow-md"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navigation;
