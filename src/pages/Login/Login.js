import React from "react";
 
import banner from "../../images/Group.svg";
import logo from "../../images/logos.svg";

const Login = () => {
    return (
        <div className="none:container mx-auto">
            <div className="grid grid-cols-1 md:h-screen md:grid-cols-2 justify-center">
                <div className="md:bg-blue-50 p-5">
                    <div className="flex justify-between md:justify-center">
                        <div className="py-3 block md:hidden">
                            <button className="text-gray-600 hover:border-solid hover:bg-gray-200 px-3 py-2 hover:rounded-full font-semibold text-2xl ">
                                <i className="fas fa-arrow-left" />
                            </button>
                        </div>
                        <div className="p-1">
                            <a href="#">
                                <img
                                    className="w-4/5 h-auto mx-auto"
                                    src={logo}
                                    alt="logo"
                                />
                            </a>
                        </div>
                        <div className="py-3 block md:hidden">
                            <button className="text-gray-800  border-solid border-2 border-gray-300 py-1 px-3 text-dark hover:text-cyan-400 hover:border-cyan-400 rounded-lg">
                                Sign Up
                            </button>
                        </div>
                    </div>
                    <div className="flex align-center justify-center h-full">
                        <img
                            className="hidden md:block w-1/2"
                            src={banner}
                            alt="Login_Banner"
                        />
                    </div>
                </div>
                <div className="p-8">
                    <div className="hidden md:block text-right">
                        <button className="text-gray-700  border-solid border-2 border-gray-300 py-1 px-4 text-dark font-semibold hover:text-cyan-400 hover:border-cyan-400 rounded-lg">
                            Sign Up
                        </button>
                    </div>
                    <div className="flex justify-center items-center h-full">
                        <form className="m-4 w-full">
                            <h2 className="font-bold text-3xl text-gray-900">
                                Welcome Back!
                            </h2>
                            <label
                                className="text-start mt-5 p-1 block"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                onBlur=""
                                placeholder="example@gmail.com"
                                className=" w-full py-1 px-2 border-gray-300 border-2 hover:border-blue-400 focus:outline-none focus:border-blue-400 focus:border-2 rounded "
                            />

                            <label
                                className="text-start mt-5 p-1 block"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                onBlur=""
                                placeholder="Password at least 8 characters"
                                className=" w-full py-1 px-2 border-gray-300 border-2 hover:border-blue-400 focus:outline-none focus:border-blue-400 focus:border-2 rounded "
                            />

                            <button
                                type="submit"
                                className=" w-full mt-5 py-1 px-2 text-white bg-blue-500 border-gray-300 border-2 focus:outline-none rounded-lg"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
