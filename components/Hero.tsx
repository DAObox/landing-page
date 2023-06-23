import ChevronRightIcon from "@heroicons/react/outline/ChevronRightIcon";

export default function Hero() {
    return (
        <div className="flex flex-col h-full">
            <div className="mt-[160px] space-y-6 flex flex-col items-center">
                <div className="space-y-1.5">
                    <div className="text-center text-[32px] font-semibold leading-10 text-white">
                        <h1>Building tools</h1>
                        <h1>to make DAOs</h1>
                        <h1>accessible</h1>
                    </div>
                    <div className="text-center text-white text-[16px] font-normal leading-normal">Empowering Communities and Revolutionizing Collaboration in the Digital Age</div>
                </div>
                <button className="flex justify-center w-full max-w-[243px] bg-white rounded-lg">
                    <div className="py-2.5 font-semibold flex items-center space-x-0.5">
                        <p>Join us</p>
                        <span><ChevronRightIcon className="w-6 h-6 text-black" /></span>
                    </div>
                </button>
                <button className="w-full max-w-[243px] bg-transparent rounded-lg p-[0.5px]
                bg-gradient-to-br from-[#1017251A] via-white to-[#1017251A]">
                    <div className="py-2.5 font-semibold flex items-center space-x-0.5 bg-dark-gray w-full rounded-lg justify-center">
                        <p className="text-light-gray">Build with us</p>
                        <span><ChevronRightIcon className="w-6 h-6 text-light-gray" /></span>
                    </div>
                </button>
            </div>
        </div>
    )
}