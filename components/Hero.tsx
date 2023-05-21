import Image from "next/image";
import { Navbar } from "./Navbar";

export function Hero() {
    return (
        <div>
            <div className="w-full h-full flex justify-center">
                <div className="max-w-xs px-2.5 sm:px-0 lg:px-5 xl:px-0 sm:max-w-xl md:max-w-2xl lg:max-w-6xl w-full">
                    <Navbar />
                    <div className="w-full flex flex-col justify-center items-center space-y-5 md:space-y-10 mt-32">
                        <div>
                            <Image src={"/assets/logo-blacked.png"} alt="logo" width={240} height={240} />
                        </div>
                        <div>
                            <p className="text-green text-2xl">We empower <span className="font-extrabold">builders</span></p>
                        </div>
                        <div>
                            <div className="text-2xl sm:text-4xl md:text-5xl font-medium max-w-2xl text-center text-white">
                                <h1 className="hidden sm:block">On a mission to make DAOs</h1>
                                <h1 className="hidden sm:block">accessible to everyone</h1>
                                <h1 className="sm:hidden">On a mission to make</h1>
                                <h1 className="sm:hidden">DAOs accessible to</h1>
                                <h1 className="sm:hidden">everyone</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}