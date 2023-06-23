import Image from "next/image";
import { ChevronDownIcon, ChevronRightIcon, MenuAlt3Icon } from "@heroicons/react/outline"

export default function Navbar() {
    return (
        <div className="bg-opacity-10 backdrop-blur-[43px] w-full flex flex-col items-center justify-center">
            <div className="flex items-center justify-between w-full px-8 py-8 md:px-14 xl:max-w-6xl">
                <div className="flex items-center space-x-1.5">
                    <Image src={"/favicon.ico"} width={30} height={30} alt="icon" />
                    <h1 className="text-2xl font-semibold text-white">DAOBox</h1>
                </div>
                <button className="md:hidden">
                    <MenuAlt3Icon className="w-6 h-6 text-white" />
                </button>
                <div className="items-center hidden space-x-6 md:flex">
                    <div className="flex items-center space-x-1 hover:cursor-pointer">
                        <p className="font-bold leading-normal text-white">Project</p>
                        <ChevronDownIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center space-x-1 hover:cursor-pointer">
                        <p className="font-bold leading-normal text-white">Info</p>
                        <ChevronDownIcon className="w-6 h-6 text-white" />
                    </div>
                    <button className="px-12 py-2.5 bg-white rounded-lg font-semibold flex items-center space-x-0.5">
                        <p>Join Us</p>
                        <span><ChevronRightIcon className="w-6 h-6 text-black" /></span>
                    </button>
                </div>
            </div>
            <div className="w-full h-[0.25px] bg-gradient-to-r from-[#1017251A] via-white to-[#1017251A]" />
        </div>
    )
}