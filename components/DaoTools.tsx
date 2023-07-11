import Image from "next/image";
import Link from "next/link";
import Spotlight, { SpotlightCard } from "./Spotlight";
import { Panchang } from "../utils/fonts";
import KlerosLogo from "../public/kleros-logo.png";
import DAOBoxTools from "../public/daobox-tool-icon.png";
import LensIcon from "../public/lens-icon.png";
import WideGrid from "../public/wide-grib.png"

export default function DaoTools() {
	return (
		<div className="pt-20 sm:pt-0 space-y-14">
			<div className="space-y-2">
				<div className={Panchang.className}>
					<h1 className="text-4xl font-medium text-center md:text-6xl text-white">
						DAO Tools
					</h1>
				</div>
				<div className="lg:text-xl">
					<p className="text-center  text-ash">
						Custom architecture, U.I and plugins for <br />
						Aragon OSx protocol.
					</p>
				</div>
			</div>
			<Spotlight className="space-y-6">
				<Spotlight className="flex space-x-6 h-full sm:h-[350px]">
					<SpotlightCard
						className="max-w-sm sm:max-w-full lg:w-full bg-transparent rounded-lg p-[0.5px] bg-gradient-to-br from-[#1017251A] 
                            via-white to-[#1017251A] h-full"
					>
						<Link
							href="https://github.com/DAObox/lens-voting"
							target="_blank"
						>
							<div className="h-full">
								<div className="w-full h-full p-6 rounded-lg bg-trans-gray-2">
									{/* <h5 className="text-2xl font-semibold leading-8 text-black">
										Aragon Plugin
									</h5> */}
									<div
										className="w-full h-full bg-[url('/close-grid.png')] md:bg-[url('/wide-grid.png)] bg-no-repeat bg-cover bg-right-top pt-10 space-y-2"
										style={{
											backgroundSize: "50%",
										}}
									>
										{/* <div className="p-[0.25px] rounded-full max-w-fit max-h-fit h-[50px] w-full backdrop-blur-md bg-gradient-to-bl rotate-[50deg] from-white to-white"> */}
										{/* <div className="w-[50px] h-[50px] rounded-full bg-[#22262B] p-2.5 -rotate-[50deg] relative"> */}
										<Image
											src={LensIcon}
											width={55}
											height={55}
											alt="icon"
										/>
										{/* </div> */}
										{/* </div> */}
										<h5 className="text-2xl font-semibold leading-8 text-white">
											Lens Voting Plugin
										</h5>
										<p className="text-ash text-lg">
											Lens Voting Plugin empowers Lens Follow NFT holders to
											actively engage in governance actions within
											AragonOSx-powered DAOs. By leveraging the plugin's
											functions, users can access vital information, create
											proposals, exercise their voting power, and contribute to
											shaping the future of their specific DAO ecosystem.
										</p>
									</div>
								</div>
							</div>
						</Link>
					</SpotlightCard>
					<SpotlightCard
						className="max-w-sm sm:max-w-full lg:max-w-sm bg-transparent rounded-lg p-[0.5px]
                bg-gradient-to-br from-[#1017251A] via-white to-[#1017251A] w-full hidden lg:block"
					>
						<div className="w-full h-full p-6 rounded-lg bg-trans-gray-2">
							<div className="w-full h-full bg-[url('/close-grid.png')] md:bg-[url('/close-grid.png)] bg-cover bg-no-repeat pt-2 space-y-16">
								<div>
									<h5 className="text-xl text-transparent bg-gradient-to-br from-[#02AB76] to-[#1457ED] w-fit bg-clip-text">
										Coming soon
									</h5>
								</div>
								<div className="space-y-2">
									{/* <div className="p-[0.25px] rounded-full max-w-fit max-h-fit h-[50px] w-full backdrop-blur-md bg-gradient-to-bl rotate-[50deg] from-white to-white"> */}
									{/* <div className="w-[50px] h-[50px] rounded-full bg-[#22262B] p-2.5 -rotate-[50deg] relative"> */}
									<Image
										src={DAOBoxTools}
										width={55}
										height={55}
										alt="icon"
									/>
									{/* </div> */}
									{/* </div> */}
									<h5 className="text-2xl font-semibold leading-8 text-white">
										Liquid Protocol
									</h5>
									<p className="text-ash text-lg">
										Subscribe to our newsletter to stay tuned on the release.
									</p>
								</div>
							</div>
						</div>
					</SpotlightCard>
				</Spotlight>

				<Spotlight className="flex flex-col w-full space-y-6 sm:flex-row sm:space-x-6 sm:space-y-0 lg:space-x-0 h-full sm:h-[375px]">
					<SpotlightCard
						className="max-w-sm sm:max-w-full lg:max-w-sm bg-transparent rounded-lg p-[0.5px]
                bg-gradient-to-br from-[#1017251A] via-white to-[#1017251A] w-full lg:hidden h-full"
					>
						<div className="w-full h-full p-6 rounded-lg bg-trans-gray-2">
							<div className="w-full h-full bg-[url('/close-grid.png')] md:bg-[url('/close-grid.png)] bg-cover bg-no-repeat pt-2 space-y-16">
								<div>
									<h5 className="text-xl text-transparent bg-gradient-to-br from-[#02AB76] to-[#1457ED] w-fit bg-clip-text">
										Coming soon
									</h5>
								</div>
								<div className="space-y-2">
									{/* <div className="p-[0.25px] rounded-full max-w-fit max-h-fit h-[50px] w-full backdrop-blur-md bg-gradient-to-bl rotate-[50deg] from-white to-white"> */}
									{/* <div className="w-[50px] h-[50px] rounded-full bg-[#22262B] p-2.5 -rotate-[50deg] relative"> */}
									<Image
										src={DAOBoxTools}
										width={55}
										height={55}
										alt="icon"
									/>
									{/* </div> */}
									{/* </div> */}
									<h5 className="text-2xl font-semibold leading-8 text-white">
										Liquid Protocol
									</h5>
									<p className="text-ash text-lg">
										Subscribe to our newsletter to stay tuned on the release.
									</p>
								</div>
							</div>
						</div>
					</SpotlightCard>
					<SpotlightCard
						className="max-w-sm sm:max-w-full lg:max-w-sm bg-transparent rounded-lg p-[0.5px]
                bg-gradient-to-br from-[#1017251A] via-white to-[#1017251A] w-full"
					>
						<Link
							href="https://use-aragon.daobox.app/"
							target="_blank"
						>
							<div className="w-full h-full p-6 rounded-lg bg-trans-gray-2">
								<div className="w-full h-full bg-[url('/close-grid.png')] md:bg-[url('/close-grid.png)] bg-cover bg-no-repeat pt-2 space-y-16">
									<div>
										<h5 className="text-xl text-transparent bg-gradient-to-br from-[#02AB76] to-[#1457ED] w-fit bg-clip-text">
											Beta
										</h5>
									</div>
									<div className="space-y-2">
										{/* <div className="p-[0.25px] rounded-full max-w-fit max-h-fit h-[50px] w-full backdrop-blur-md bg-gradient-to-bl rotate-[50deg] from-white to-white"> */}
										{/* <div className="w-[50px] h-[50px] rounded-full bg-[#22262B] p-2.5 -rotate-[50deg] relative"> */}
										<Image
											src={DAOBoxTools}
											width={55}
											height={55}
											alt="icon"
										/>
										{/* </div> */}
										{/* </div> */}
										<h5 className="text-2xl font-semibold leading-8 text-white">
											useAragon React Hooks
										</h5>
										<p className="text-ash text-lg">
											A collection of react hooks containing everything you need
											to integrate Aragon into your application.
										</p>
									</div>
								</div>
							</div>
						</Link>
					</SpotlightCard>

					<Spotlight className="hidden w-full h-full lg:pl-6 lg:block">
						<SpotlightCard>
							<Link
								href="https://github.com/DAObox/optimistic-proposal-plugin"
								target="_blank"
							>
								<div
									className="max-w-sm sm:max-w-full bg-transparent rounded-lg p-[0.5px]
                bg-gradient-to-br from-[#1017251A] via-white to-[#1017251A] h-full"
								>
									<div className="w-full h-full p-6 rounded-lg bg-trans-gray-2">
										{/* <h5 className="text-2xl font-semibold leading-8 text-black">
											Aragon Plugin
										</h5> */}
										<div
											className="w-full h-full bg-[url('/close-grid.png')] md:bg-[url('/wide-grib.png)] bg-cover bg-no-repeat bg-right-top pt-24 space-y-2"
											style={{
												backgroundSize: "50%",
											}}
										>
											{/* <div className="p-[0.25px] rounded-full max-w-fit max-h-fit h-[50px] w-full backdrop-blur-md bg-gradient-to-bl rotate-[50deg] from-white to-white"> */}
											{/* <div className="w-[50px] h-[50px] rounded-full bg-[#22262B] p-2.5 -rotate-[50deg] relative"> */}
											<Image
												src={KlerosLogo}
												width={55}
												height={55}
												alt="icon"
											/>
											{/* </div> */}
											{/* </div> */}
											<h5 className="text-2xl font-semibold leading-8 text-white">
												Optimistic Voting Plugin
											</h5>
											<p className="text-ash text-lg">
												Optimistic voting plugin streamlines the decision-making
												process in decentralized autonomous organizations (DAOs)
												by leveraging subjective oracle flow. Malicious
												proposals can be effectively challenged, thus addressing
												the issues of trust and security in DAOs.
											</p>
										</div>
									</div>
								</div>
							</Link>
						</SpotlightCard>
					</Spotlight>
				</Spotlight>
				<SpotlightCard
					className="max-w-sm sm:max-w-full  bg-transparent rounded-lg p-[0.5px]
                bg-gradient-to-br from-[#1017251A] via-white to-[#1017251A] lg:hidden"
				>
					<Link
						href="https://github.com/DAObox/optimistic-proposal-plugin"
						target="_blank"
					>
						<div className="w-full p-6 rounded-lg h-fit bg-trans-gray-2">
							{/* <h5 className="text-2xl font-semibold leading-8 text-black">
								Aragon Plugin
							</h5> */}
							<div className="w-full h-full bg-[url('/close-grid.png')] md:bg-[url('/close-grid.png)] bg-cover bg-no-repeat pt-24 space-y-2">
								{/* <div className="p-[0.25px] rounded-full max-w-fit max-h-fit h-[50px] w-full backdrop-blur-md bg-gradient-to-bl rotate-[50deg] from-white to-white"> */}
								{/* <div className="w-[50px] h-[50px] rounded-full bg-[#22262B] p-2.5 -rotate-[50deg] relative"> */}
								<Image
									src={KlerosLogo}
									width={50}
									height={50}
									alt="icon"
								/>
								{/* </div> */}
								{/* </div> */}
								<h5 className="text-2xl font-semibold leading-8 text-white">
									Optimistic Voting Plugin
								</h5>
								<p className="text-ash text-lg">
									Optimistic voting plugin streamlines the decision-making
									process in decentralized autonomous organizations (DAOs) by
									leveraging subjective oracle flow. Malicious proposals can be
									effectively challenged, thus addressing the issues of trust
									and security in DAOs.
								</p>
							</div>
						</div>
					</Link>
				</SpotlightCard>
			</Spotlight>
		</div>
	);
}
