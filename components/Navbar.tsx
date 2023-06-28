import Image from "next/image";
import { ChevronDownIcon, ChevronRightIcon, MenuAlt3Icon } from "@heroicons/react/outline"
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="bg-opacity-10 backdrop-blur-[43px] w-full flex flex-col items-center justify-center sticky top-0 z-10">
            <div className="z-20 flex items-center justify-between w-full px-5 py-6 bg-transparent md:px-14 xl:max-w-6xl">
                <div className="flex items-center space-x-1.5">
                    <Image src={"/favicon.ico"} width={30} height={30} alt="icon" />
                    <h1 className="text-2xl font-semibold text-white">DAOBox</h1>
                </div>
                <button className="md:hidden"
                    onClick={() => console.log("hi")}>
                    <MenuAlt3Icon className="w-6 h-6 text-white" />
                </button>
                <div className="items-center hidden space-x-6 md:flex">
                    <div className="dropdown dropdown-hover group">
                        <div className="z-20 flex items-center space-x-1 hover:cursor-pointer" tabIndex={0}>
                            <p className="font-bold leading-normal text-white">Projects</p>
                            <ChevronDownIcon className="w-6 h-6 text-white duration-200 transform group-hover:-rotate-180" />
                        </div>
                        <ul className="dropdown-content dropdown-left z-[1] menu p-2 shadow-lg bg-[#1017251A] bg-opacity-10 
                        backdrop-blur-[43px] rounded-box w-60">
                            <li>
                                <Link href={"/"} className="text-white active:bg-[#1017251A]/30">Lens Voting Plugin</Link>
                            </li>
                            <li className="text-white">
                                <Link href={"/"} className="text-white active:bg-[#1017251A]/30">Optimistic Voting Plugin</Link>
                            </li>
                            <li className="text-white">
                                <Link href={"/"} className="text-white active:bg-[#1017251A]/30">Liquid Protocol</Link>
                            </li>
                            <li className="text-white">
                                <Link href={"/"} className="text-white active:bg-[#1017251A]/30">Use Aragon React Hooks</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-hover group">
                        <div className="flex items-center space-x-1 hover:cursor-pointer">
                            <p className="font-bold leading-normal text-white">Info</p>
                            <ChevronDownIcon className="w-6 h-6 text-white duration-200 transform group-hover:-rotate-180" />
                        </div>
                        <ul className="dropdown-content dropdown-left z-[1] menu p-2 shadow-lg 
                        bg-[#1017251A] bg-opacity-10 backdrop-blur-[43px] rounded-box w-60">
                            <li>
                                <Link href={"/"} className="text-white active:bg-[#1017251A]/30">Lens Voting Plugin</Link>
                            </li>
                            <li className="text-white">
                                <Link href={"/"} className="text-white active:bg-[#1017251A]/30">Optimistic Voting Plugin</Link>
                            </li>
                            <li className="text-white">
                                <Link href={"/"} className="text-white active:bg-[#1017251A]/30">Liquid Protocol</Link>
                            </li>
                            <li className="text-white">
                                <Link href={"/"} className="text-white active:bg-[#1017251A]/30">Use Aragon React Hooks</Link>
                            </li>
                        </ul>
                    </div>
                    <button className="px-12 py-2.5 bg-white rounded-lg font-semibold flex items-center space-x-0.5">
                        <p className="text-black">Join Us</p>
                        <span><ChevronRightIcon className="w-6 h-6 text-black" /></span>
                    </button>
                </div>
            </div>
            <div className="w-full h-[0.25px] bg-gradient-to-r from-[#1017251A] via-white to-[#1017251A]" />
        </div>
    )
}