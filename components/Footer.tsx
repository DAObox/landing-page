import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
			<div className="flex flex-col items-center w-screen h-full bg-dark-gray">
				<div className="w-full h-[0.5px] bg-gradient-to-r from-[#1017251A] via-white to-[#1017251A] absolute inset-x-0" />
				<div className="w-full h-full px-5 pt-8 space-y-6 md:px-14 xl:max-w-6xl sm:space-y-0">
					<div className="flex flex-col w-full space-y-6 sm:space-y-0 sm:flex-row sm:justify-between">
						<div>
							<div className="flex items-center space-x-1.5">
								<Image
									src={"/favicon.ico"}
									width={30}
									height={30}
									alt="icon"
								/>
								<h1 className="text-2xl font-semibold text-white">DAOBox</h1>
							</div>
						</div>
						<div className="flex flex-col space-y-6 sm:space-y-0 sm:flex-row sm:space-x-20">
							<div className="flex flex-col space-y-4">
								<h6 className="text-lg text-white">Product</h6>
								<Link
									href={"/"}
									className="max-w-fit"
								>
									<p className="text-lg text-trans-ash hover:cursor-pointer">
										Lens Voting Plugin
									</p>
								</Link>
								<Link
									href={"/"}
									className="max-w-fit"
								>
									<p className="text-lg text-trans-ash hover:cursor-pointer">
										Optimistic Voting Plugin
									</p>
								</Link>
								<Link
									href={"/"}
									className="max-w-fit"
								>
									<p className="text-lg text-trans-ash hover:cursor-pointer">
										Liquid Protocol
									</p>
								</Link>
								<Link
									href={"/"}
									className="max-w-fit"
								>
									<p className="text-lg text-trans-ash hover:cursor-pointer">
										Aragon React Hooks
									</p>
								</Link>
							</div>
							<div className="flex flex-col space-y-4">
								<h6 className="text-lg text-white">Resources</h6>
								<Link
									href={"/"}
									className="max-w-fit"
								>
									<p className="text-lg text-trans-ash hover:cursor-pointer">
										Documentation
									</p>
								</Link>
								<Link
									href={"/"}
									className="max-w-fit"
								>
									<p className="text-lg text-trans-ash hover:cursor-pointer">
										Contact
									</p>
								</Link>
								<Link
									href={"/"}
									className="max-w-fit"
								>
									<p className="text-lg text-trans-ash hover:cursor-pointer">
										Brand style
									</p>
								</Link>
								<div className="hidden space-x-4 sm:flex lg:hidden">
									<Link
										href={"https://twitter.com/daobox_app"}
										target="_blank"
										className="max-w-fit"
									>
										<div className="relative max-h-[24px] max-w-[24px]">
											<Image
												src={"/twitter.png"}
												width={24}
												height={24}
												alt="twitter icon"
											/>
										</div>
									</Link>
									<Link
										href={"https://discord.gg/CNjdqGwYGy"}
										className="max-w-fit"
										target="_blank"
									>
										<div className="relative max-h-[24px] max-w-[24px]">
											<Image
												src={"/discord.png"}
												width={24}
												height={24}
												alt="discord icon"
											/>
										</div>
									</Link>
									<Link
										href={"https://github.com/DAObox"}
										className="max-w-fit"
										target="_blank"
									>
										<div className="relative max-h-[24px] max-w-[24px]">
											<Image
												src={"/github.png"}
												width={24}
												height={24}
												alt="github icon"
											/>
										</div>
									</Link>
								</div>
								<div className="flex pt-2 space-x-4 sm:hidden">
									<Link
										href={"https://twitter.com/daobox_app"}
										className="max-w-fit"
										target="_blank"
									>
										<div className="relative max-h-[24px] max-w-[24px]">
											<Image
												src={"/twitter.png"}
												width={24}
												height={24}
												alt="twitter icon"
											/>
										</div>
									</Link>
									<Link
										href={"https://discord.gg/CNjdqGwYGy"}
										className="max-w-fit"
										target="_blank"
									>
										<div className="relative max-h-[24px] max-w-[24px]">
											<Image
												src={"/discord.png"}
												width={24}
												height={24}
												alt="discord icon"
											/>
										</div>
									</Link>
									<Link
										href={"https://github.com/DAObox"}
										className="max-w-fit"
										target="_blank"
									>
										<div className="relative max-h-[24px] max-w-[24px]">
											<Image
												src={"/github.png"}
												width={24}
												height={24}
												alt="github icon"
											/>
										</div>
									</Link>
								</div>
							</div>
							<div className="hidden space-x-4 lg:flex">
								<Link
									href={"https://twitter.com/daobox_app"}
									target="_blank"
									className="max-w-fit"
								>
									<div className="relative max-h-[24px] max-w-[24px]">
										<Image
											src={"/twitter.png"}
											width={24}
											height={24}
											alt="twitter icon"
										/>
									</div>
								</Link>
								<Link
									href={"https://discord.gg/CNjdqGwYGy"}
									className="max-w-fit"
									target="_blank"
								>
									<div className="relative max-h-[24px] max-w-[24px]">
										<Image
											src={"/discord.png"}
											width={24}
											height={24}
											alt="discord icon"
										/>
									</div>
								</Link>
								<Link
									href={"https://github.com/DAObox"}
									className="max-w-fit"
									target="_blank"
								>
									<div className="relative max-h-[24px] max-w-[24px]">
										<Image
											src={"/github.png"}
											width={24}
											height={24}
											alt="github icon"
										/>
									</div>
								</Link>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-between">
						<div className="relative max-h-[150px] max-w-[200px]">
							<Image
								src={"/half-trans-logo.png"}
								width={200}
								height={150}
								alt="icon"
							/>
						</div>
						<h6 className="text-lg text-trans-ash hover:cursor-pointer">
							2023 DAOBox
						</h6>
					</div>
				</div>
			</div>
		);
}