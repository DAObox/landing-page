import Image from "next/image";
import { Navbar } from "./Navbar";

export function Hero() {
    return(
        <div className="min-h-[calc(100vh+25px)]">
            <div className="w-full absolute top-0 left-0">
                <div className="bg-[url('/images/backgrounds/blue-shade.png')] bg-no-repeat bg-center bg-cover w-[calc(100%)] sm:w-[calc(75%)] 
                md:w-[calc(50%)] h-full min-h-[450px] lg:min-h-[600px] rounded-br-full" />
            </div>
            <div className="top-0 absolute inset-x-0 h-full min-h-screen">
                <div className="w-full h-full flex justify-center">
                    <div className="max-w-xs px-2.5 sm:px-0 lg:px-5 xl:px-0 sm:max-w-lg md:max-w-2xl lg:max-w-6xl w-full">
                        <Navbar />
                        <div className="w-full flex flex-col justify-center items-center space-y-10 mt-20">
                            <div>
                                <Image src={"/assets/logo-blacked.png"} alt="logo" width={240} height={240} />
                            </div>
                            <div>
                                <h1 className="text-2xl sm:text-4xl md:text-5xl font-medium max-w-2xl text-center text-white">The Future Of Dao Tooling Starts Here</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}