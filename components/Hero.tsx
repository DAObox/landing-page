import ChevronRightIcon from "@heroicons/react/outline/ChevronRightIcon";
import { Panchang } from "../utils/fonts";
import Link from "next/link";

export default function Hero() {
    return (
			<div className="flex flex-col w-full h-full">
				<div className="mt-[120px] sm:mt-[100px] space-y-6 flex flex-col items-center">
					<div className="space-y-4">
						<div className={Panchang.className}>
							<div
								className="text-center text-[32px] font-semibold leading-10 text-white sm:text-[64px] 
                    sm:leading-[70px] flex flex-col justify-center items-center"
							>
								<h1 className="flex space-x-4">
									<span className={Panchang.className}>
										Building tools{" "}
										<span className="hidden lg:block xl:hidden">to make</span>
									</span>
									<span className="hidden xl:block">to make</span>
								</h1>
								<h1 className="lg:hidden">to make DAOs</h1>
								<h1 className="flex space-x-4">
									<span className="hidden lg:block">DAOs</span>
									<span>accessible</span>
								</h1>
							</div>
						</div>
						<div className="flex font-normal leading-normal text-center text-white lg:text-2xl sm:flex-col">
							<span>
								Empowering Communities and Revolutionizing{" "}
								<span className="sm:hidden">
									Collaboration in the Digital Age
								</span>
							</span>
							<span className="hidden sm:block">
								Collaboration in the Digital Age
							</span>
						</div>
					</div>
					<div className="flex flex-col items-center justify-center w-full space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6">
						<Link
							href="https://discord.gg/CNjdqGwYGy"
							target="_blank"
						>
							<button className="flex justify-center w-full px-12 bg-white rounded-lg">
								<div className="py-2.5 font-semibold flex items-center space-x-0.5">
									<p className="text-black">Join us</p>
									<span>
										<ChevronRightIcon className="w-6 h-6 text-black" />
									</span>
								</div>
							</button>
						</Link>
						<button
							className="w-full max-w-[180px] bg-transparent rounded-lg p-[0.5px]
                bg-gradient-to-br from-[#1017251A] via-white to-[#1017251A]"
						>
							<Link
								href="https://github.com/DAObox"
								target="_blank"
							>
								<div className="py-2.5 font-semibold flex items-center space-x-0.5 bg-gray w-full rounded-lg justify-center">
									<p className="text-light-gray">Build with us</p>
									<span>
										<ChevronRightIcon className="w-6 h-6 text-light-gray" />
									</span>
								</div>
							</Link>
						</button>
					</div>
				</div>
			</div>
		);
}