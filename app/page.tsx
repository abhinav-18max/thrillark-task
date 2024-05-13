"use client"
import Image from "next/image";
import logo from "../public/logo.svg"
import Banner from "../public/banner.webp"
import {useState} from "react";
import Carousel from "@/app/carousel";


export default function Home() {
    const [isOpen, setIsOpen] = useState(false);



    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <main className="flex min-h-screen flex-col  justify-start pt-4 bg-white text-black">
            <header className="">
                <nav className="flex flex-row justify-evenly">
                    <div>
                        <Image src={logo} alt="Thrillark Logo" width={150} height={200}/>
                    </div>
                    <div className="w-1/3 hidden md:block">
                        <div className="relative">
                            <input type="text"
                                   className="pl-10 pr-4 py-2 w-full border-2  border-gray-200 focus:border-gray-200 outline-none"
                                   placeholder="Search by activities and destinations..."/>
                            <div className="absolute inset-y-0 left-0 pl-3
                    flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                                </svg>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row  space-x-3.5  items-center">
                        <div className="hidden md:flex flex-row  space-x-3.5  items-center">
                            <div className="relative group">
                                <div>
                                    INR ₹
                                </div>
                                <div className="absolute  hidden bg-white w-96 ml-[-30px] group-hover:block z-40 p-4 rounded-lg">
                                    <div className="flex flex-row text-[30]">
                                        <div className="">
                                            <div className="text-gray-400">Language</div>
                                            <div className="flex flex-col justify-evenly">
                                                <div>
                                                    <div className="">English<span
                                                        className="">✓</span></div>
                                                </div>
                                                <div>
                                                    <div className="">Arabic (عربى)<span
                                                        className="">✓</span></div>
                                                </div>
                                                <div>
                                                    <div className="">Deutsch <span
                                                        className="">✓</span></div>
                                                </div>
                                                <div>
                                                    <div className="">Français <span
                                                        className="">✓</span></div>
                                                </div>
                                                <div>
                                                    <div className="">Itadivano <span
                                                        className="">✓</span></div>
                                                </div>
                                                <div>
                                                    <div className="">Español <span
                                                        className="">✓</span></div>
                                                </div>
                                                <div>
                                                    <div className="">Turkish <span
                                                        className="">✓</span></div>
                                                </div>
                                                <div>
                                                    <div className="">Chinese (简体中文) <span
                                                        className="">✓</span></div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="">
                                            <div className=""><h4 className="text-gray-400">Currency</h4>
                                            </div>
                                            <div className="flex flex-col justify-evenly">
                                                <div>
                                                    <div className=" "><span className="">U.S. Dollar (US$)</span>
                                                        <span className="">✓</span></div>
                                                </div>
                                                <div>
                                                    <div className=" "><span className="">Turkey divra (TL)</span>
                                                        <span className="">✓</span></div>
                                                </div>
                                                <div>
                                                    <div className=" "><span className="">British Pound (£)</span>
                                                        <span className="">✓</span></div>
                                                </div>
                                                <div>
                                                    <div className=" "><span className="">Singapore Dollar (S$)</span>
                                                        <span className="">✓</span></div>
                                                </div>
                                                <div>
                                                    <div className=" "><span className="">Saudi Arabian Riyal (﷼)</span>
                                                        <span className="">✓</span></div>
                                                </div>
                                                <div>
                                                    <div className=" "><span className="">Qatari Riyal (ر.ق)</span>
                                                        <span className="">✓</span></div>
                                                </div>
                                                <div>
                                                    <div className=" "><span className="">Kuwaiti Dinar (د.ك)</span>
                                                        <span className="">✓</span></div>
                                                </div>
                                                <div>
                                                    <div className=" active"><span className="">Indian rupee (र)</span>
                                                        <span className="">✓</span></div>
                                                </div>
                                                <div>
                                                    <div className=" "><span
                                                        className="">Euro (€)</span> <span className="">✓</span></div>
                                                </div>
                                                <div>
                                                    <div className=" "><span className="">UAE Dirham (د.إ)</span>
                                                        <span className="">✓</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div>
                                Help & Support
                            </div>
                            <div>
                                Sign In
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button onClick={toggleMenu}
                                    className="text-white hover:text-gray-200 focus:text-gray-200 focus:outline-none">
                                {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                               stroke-width="1.5" stroke="black" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
                                    </svg>
                                    : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                           stroke-width="1.5" stroke="black" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"/>
                                    </svg>
                                }


                            </button>
                        </div>
                    </div>
                </nav>
            </header>
            {isOpen && (
                <div className="h-48 z-40">
                    <div className="bg-white h-full flex flex-col justify-evenly items-start p-7">
                        <div className="relative group">
                            <div>
                                INR ₹
                            </div>
                            <div className="absolute hidden bg-white w-96 ml-[-30px] group-hover:block z-40">
                                <div className="flex flex-col text-[30] p-7">
                                    <div className="">
                                        <div className="text-gray-400">Language</div>
                                        <div className="flex flex-col justify-evenly">
                                            <div>
                                                <div className="">English<span
                                                    className="">✓</span></div>
                                            </div>
                                            <div>
                                                <div className="">Arabic (عربى)<span
                                                    className="">✓</span></div>
                                            </div>
                                            <div>
                                                <div className="">Deutsch <span
                                                    className="">✓</span></div>
                                            </div>
                                            <div>
                                                <div className="">Français <span
                                                    className="">✓</span></div>
                                            </div>
                                            <div>
                                                <div className="">Itadivano <span
                                                    className="">✓</span></div>
                                            </div>
                                            <div>
                                                <div className="">Español <span
                                                    className="">✓</span></div>
                                            </div>
                                            <div>
                                                <div className="">Turkish <span
                                                    className="">✓</span></div>
                                            </div>
                                            <div>
                                                <div className="">Chinese (简体中文) <span
                                                    className="">✓</span></div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="">
                                        <div className=""><h4 className="text-gray-400">Currency</h4>
                                        </div>
                                        <div className="flex flex-col justify-evenly">
                                            <div>
                                                <div className=" "><span className="">U.S. Dollar (US$)</span>
                                                    <span className="">✓</span></div>
                                            </div>
                                            <div>
                                                <div className=" "><span className="">Turkey divra (TL)</span>
                                                    <span className="">✓</span></div>
                                            </div>
                                            <div>
                                                <div className=" "><span className="">British Pound (£)</span>
                                                    <span className="">✓</span></div>
                                            </div>
                                            <div>
                                                <div className=" "><span
                                                    className="">Singapore Dollar (S$)</span>
                                                    <span className="">✓</span></div>
                                            </div>
                                            <div>
                                                <div className=" "><span
                                                    className="">Saudi Arabian Riyal (﷼)</span>
                                                    <span className="">✓</span></div>
                                            </div>
                                            <div>
                                                <div className=" "><span className="">Qatari Riyal (ر.ق)</span>
                                                    <span className="">✓</span></div>
                                            </div>
                                            <div>
                                                <div className=" "><span className="">Kuwaiti Dinar (د.ك)</span>
                                                    <span className="">✓</span></div>
                                            </div>
                                            <div>
                                                <div className=" active"><span
                                                    className="">Indian rupee (र)</span>
                                                    <span className="">✓</span></div>
                                            </div>
                                            <div>
                                                <div className=" "><span
                                                    className="">Euro (€)</span> <span className="">✓</span>
                                                </div>
                                            </div>
                                            <div>
                                                <div className=" "><span className="">UAE Dirham (د.إ)</span>
                                                    <span className="">✓</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div>
                            Help & Support
                        </div>
                        <div>
                            Sign In
                        </div>

                    </div>
                </div>
            )}
            <div className="h-screen pt-2.5">
                <div className="relative w-full h-1/2"> {/* Or any desired height */}
                    <Image
                        src={Banner}
                        alt="Banner"
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full"
                    />
                    <div className="absolute inset-0">
                        <div className="h-full flex flex-col justify-end items-start p-24 md:pl-48">
                            <div className="text-white font-bold text-4xl">Discover Incredible Experience</div>
                            <div className="text-white font-bold text-4xl">Worldwide</div>
                        </div>
                    </div>
                </div>
                <h2 className="text-black font-bold text-2xl p-7 lg:pl-48">Top Destination</h2>
                <Carousel/>
            </div>


        </main>
    );
}
