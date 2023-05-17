import { Navbar } from "./Navbar";

export function Hero() {
    return(
        <div>
            <div className="w-full absolute top-0 left-0">
                <div className="bg-[url('/images/backgrounds/blue-shade.png')] bg-no-repeat bg-center bg-cover w-[calc(100%)] sm:w-[calc(75%)] 
                md:w-[calc(50%)] h-full min-h-[450px] lg:min-h-[600px] rounded-br-full" />
            </div>
            <div className="top-0 absolute inset-x-0 min-h-screen">
                <div className="w-full h-full flex justify-center">
                    <div className="max-w-xs px-2.5 sm:px-0 sm:max-w-lg md:max-w-2xl lg:max-w-6xl w-full">
                        <Navbar />
                    </div>
                </div>
            </div>
        </div>
    )
}