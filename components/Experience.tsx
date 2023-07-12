import Image from "next/image"
import { Panchang } from "../utils/fonts";
import Journey from "../public/daobox-journey.png"
import MobileJourney from "../public/mobile-daobox-journey.png";

export default function Experience() {
	return (
		<div className="flex flex-col items-center justify-center w-full px-5 space-y-4 leading-6">
			<div className="flex flex-col items-center justify-center w-full space-y-4 bg-[url('/experience-mesh.png')] bg-cover bg-no-repeat bg-center">
				<p
					className="text-transparent bg-gradient-to-br from-[#02AB76] 
            to-[#1457ED] w-fit bg-clip-text text-center lg:text-xl"
				>
					Revolutionizing the way we govern together.
				</p>
				<div className={Panchang.className}>
					<h1 className="flex flex-col text-xl font-semibold text-center text-white sm:text-3xl">
						<span>Experience the power</span>
						<span className="sm:flex sm:space-x-2.5">
							<span>of decentralized</span>{" "}
							<span className="invisible hidden sm:block sm:visible">
								governance
							</span>
						</span>
						<span className="sm:hidden">governance</span>
					</h1>
				</div>
				<p className="text-lg text-center text-trans-ash">
					With DAOBox, you gain access to a suite of cutting-edge solutions
					designed to democratize the governance process. Whether you're an
					individual looking to participate in decision-making, a community
					seeking to establish a decentralized ecosystem, or an organization
					aiming to enhance transparency and accountability, we have you
					covered.
				</p>
			</div>
			<Image
				src={Journey}
				width={1101.3}
				height={604}
				alt="preview"
				className="hidden sm:block"
			/>
			<Image
				src={MobileJourney}
				width={709}
				height={389}
				alt="preview"
				className="block sm:hidden"
			/>
			<p className="text-lg text-center text-white">
				Our objective is to ensure that DAOs are within the reach of all,
				fostering a governance framework that is transparent and inclusive for
				individuals and organizations alike.
			</p>
		</div>
	);
}