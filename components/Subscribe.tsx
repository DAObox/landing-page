import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { Panchang } from "../utils/fonts";

export default function Subscribe() {
    return (
			<div className="w-full h-full max-w-lg lg:max-w-3xl">
				<div className="flex justify-between w-full h-[375px]">
					<Image
						src={"/laser.png"}
						width={6}
						height={6}
						alt="laser"
					/>
					<div>
						<Image
							src={"/trans-logo.png"}
							width={250}
							height={250}
							alt="laser"
						/>
					</div>
					<Image
						src={"/laser.png"}
						width={6}
						height={6}
						alt="laser"
					/>
				</div>
				<div className="flex flex-col items-center w-full -mt-32 space-y-4 text-center">
					<div className={Panchang.className}>
						<h1 className="text-3xl font-medium text-center text-transparent text-white sm:text-5xl bg-clip-text bg-gradient-to-br from-trans-gray">
							Access DAOs through innovative tools
						</h1>
					</div>
					<p className="text-2xl text-trans-ash">Subscribe to our waitlist.</p>
					<div className="bg-gradient-to-br from-[#1017251A] via-white to-[#1017251A] p-[0.5px] bg-[#101318] rounded-2xl max-w-sm">
						<div className="flex bg-[#101318] p-2.5 space-x-1.5 rounded-2xl">
							<input
								type="text"
								placeholder="Email address"
								className="w-full bg-[#101318] focus:outline-0 
                        placeholder-transparent placeholder:bg-clip-text placeholder:bg-gradient-to-br 
                        placeholder:from-trans-gray placeholder:via-white placeholder:to-trans-gray text-white"
							/>
							<button className="flex justify-center px-5 bg-white rounded-lg w-fit">
								<div className="font-semibold flex items-center justify-center space-x-0.5 w-20 p-2.5">
									<p className="text-black">Subscribe</p>
									<span>
										<ChevronRightIcon className="w-6 h-6 text-black" />
									</span>
								</div>
							</button>
						</div>
					</div>
				</div>
			</div>
		);
}