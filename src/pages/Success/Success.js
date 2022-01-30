import React, { useState } from "react";
import explore from "../../images/EC_Hero3_1.svg";
import join from "../../images/EC_Hero3_2.svg";
import connectivity from "../../images/EC_Hero3_3.svg";
import team from "../../images/EC_Hero3_4.svg";

const Success = () => {
    const [isBlue, setIsBlue] = useState(true);
    const [isGreen, setIsGreen] = useState(false);
    const [isYellow, setIsYellow] = useState(false);
    const [isRed, setIsRed] = useState(false);

    // Hover Change Handler function

    const handleOnHoverChanged = () => {
        setIsBlue(true);
        setIsGreen(false);
        setIsYellow(false);
        setIsRed(false);
    };

    //  onclick Handler Functions
    const handleBlue = () => {
        setIsBlue(true);
        setIsGreen(false);
        setIsYellow(false);
        setIsRed(false);
    };
    const handleGreen = () => {
        setIsBlue(false);
        setIsGreen(true);
        setIsYellow(false);
        setIsRed(false);
    };
    const handleYellow = () => {
        setIsBlue(false);
        setIsGreen(false);
        setIsYellow(true);
        setIsRed(false);
    };
    const handleRed = () => {
        setIsBlue(false);
        setIsGreen(false);
        setIsYellow(false);
        setIsRed(true);
    };

    return (
        <div className="mx-auto my-8 px-8">
            <div className="text-center pb-3">
                <h2 className="text-gray-900 text-3xl font-semibold py-3">
                    We have got you covered
                </h2>
                <h5 className="text-gray-600 text-xl font-semibold">
                    A community-based platform made to help you achieve your
                    goals
                </h5>
            </div>
            {isBlue && (
                <div onMouseLeave={handleOnHoverChanged} className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-evenly justify-items-center items-center bg-blue-50">
                        <div className="w-80 h-80 m-8 rounded-full bg-blue-200 self-center">
                            <img
                                className="w-full h-full"
                                src={explore}
                                alt="explore"
                            />
                        </div>
                        <div className="w-1/2">
                            <div
                                onClick={handleBlue}
                                className="bg-blue-200 rounded-lg px-2 py-4 "
                            >
                                <h3 className="text-gray-900 font-semibold text-2xl pb-1 ">
                                    Explore your interests
                                </h3>
                                <p className="text-md py-2 text-blue-600 font-semibold">
                                    Select your interests, goals and preferred
                                    industry, our platform will help you grow
                                    more in them.
                                </p>
                            </div>

                            <div onClick={handleGreen} className="px-2 py-4">
                                <h3 className="text-gray-900 font-semibold text-2xl">
                                    Join communities
                                </h3>
                            </div>
                            <div onClick={handleYellow} className="px-2 py-4">
                                <h3 className="text-gray-900 font-semibold text-2xl">
                                    Connectivity
                                </h3>
                            </div>
                            <div onClick={handleRed} className="px-2 py-4">
                                <h3 className="text-gray-900 font-semibold text-2xl">
                                    Team up
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {isGreen && (
                <div onMouseLeave={handleOnHoverChanged} className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-evenly justify-items-center items-center bg-green-50">
                        <div className="w-80 h-80 m-8 rounded-full bg-green-200 self-center">
                            <img
                                className="w-full h-full"
                                src={join}
                                alt="Community"
                            />
                        </div>
                        <div className="w-1/2">
                            <div onClick={handleBlue} className="px-2 py-4 ">
                                <h3 className="text-gray-900 font-semibold text-2xl pb-1 ">
                                    Explore your interests
                                </h3>
                            </div>

                            <div
                                onClick={handleGreen}
                                className="px-2 py-4 bg-green-200 rounded-lg "
                            >
                                <h3 className="text-gray-900 font-semibold text-2xl">
                                    Join communities
                                </h3>
                                <p className="text-md py-2 text-green-600 font-semibold">
                                    Join hands with people with similar
                                    interests - Connect, Explore & Grow!
                                </p>
                            </div>
                            <div onClick={handleYellow} className="px-2 py-4">
                                <h3 className="text-gray-900 font-semibold text-2xl">
                                    Connectivity
                                </h3>
                            </div>
                            <div onClick={handleRed} className="px-2 py-4">
                                <h3 className="text-gray-900 font-semibold text-2xl">
                                    Team up
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {isYellow && (
                <div onMouseLeave={handleOnHoverChanged} className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-evenly justify-items-center items-center bg-orange-50">
                        <div className="w-80 h-80 m-8 rounded-full bg-orange-200 self-center">
                            <img
                                className="w-full h-full"
                                src={connectivity}
                                alt="connectivity"
                            />
                        </div>
                        <div className="w-1/2">
                            <div onClick={handleBlue} className="px-2 py-4 ">
                                <h3 className="text-gray-900 font-semibold text-2xl pb-1 ">
                                    Explore your interests
                                </h3>
                            </div>

                            <div onClick={handleGreen} className="px-2 py-4">
                                <h3 className="text-gray-900 font-semibold text-2xl">
                                    Join communities
                                </h3>
                            </div>
                            <div
                                onClick={handleYellow}
                                className="bg-orange-200 rounded-lg px-2 py-4"
                            >
                                <h3 className="text-gray-900 font-semibold text-2xl">
                                    Connectivity
                                </h3>
                                <p className="text-md py-2 text-orange-600 font-semibold">
                                    Connect with Professional, Mentors,
                                    Faculties as per your requirements
                                </p>
                            </div>
                            <div onClick={handleRed} className="px-2 py-4">
                                <h3 className="text-gray-900 font-semibold text-2xl">
                                    Team up
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {isRed && (
                <div onMouseLeave={handleOnHoverChanged} className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-evenly justify-items-center items-center bg-red-50">
                        <div className="w-80 h-80 m-8 rounded-full bg-red-200 self-center">
                            <img
                                className="w-full h-full"
                                src={team}
                                alt="team"
                            />
                        </div>
                        <div className="w-1/2">
                            <div onClick={handleBlue} className=" px-2 py-4 ">
                                <h3 className="text-gray-900 font-semibold text-2xl pb-1 ">
                                    Explore your interests
                                </h3>
                            </div>

                            <div onClick={handleGreen} className="px-2 py-4">
                                <h3 className="text-gray-900 font-semibold text-2xl">
                                    Join communities
                                </h3>
                            </div>
                            <div onClick={handleYellow} className="px-2 py-4">
                                <h3 className="text-gray-900 font-semibold text-2xl">
                                    Connectivity
                                </h3>
                            </div>
                            <div
                                onClick={handleRed}
                                className="bg-red-200 rounded-lg px-2 py-4"
                            >
                                <h3 className="text-gray-900 font-semibold text-2xl">
                                    Team up
                                </h3>
                                <p className="text-md py-2 text-red-600 font-semibold">
                                    Team up with different people in our
                                    community and build projects, participate in
                                    events, or just make friends.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Success;
