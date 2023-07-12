import Image from "next/image";
import { ChevronDownIcon, ChevronRightIcon, MenuAlt3Icon, XIcon } from "@heroicons/react/outline"
import Link from "next/link";
import { useState } from "react";
import DAOBoxLogo from "../public/nav-logo.png"

export default function Navbar() {
    const [close, setClose] = useState(true)
    const [projectsClose, setProjectsClose] = useState(true)
    return (
			<div className="bg-opacity-10 backdrop-blur-[43px] w-screen flex flex-col items-center justify-center fixed md:sticky top-0 z-10">
				<div className="z-20 flex items-center justify-between w-full px-5 py-6 bg-transparent md:px-14 xl:max-w-6xl">
					<div className="flex items-center space-x-1.5">
						<Link href="/">
							<Image
								src={DAOBoxLogo}
								height={40}
								width={143}
								alt="DAOBox logo"
							/>
						</Link>
					</div>
					<button
						className="md:hidden"
						onClick={() => setClose(!close)}
					>
						{close ? (
							<MenuAlt3Icon className="w-6 h-6 text-white" />
						) : (
							<XIcon className="w-6 h-6 text-white" />
						)}
					</button>
					<div className="items-center hidden space-x-6 md:flex">
						<div className="dropdown dropdown-hover group">
							<div
								className="z-20 flex items-center space-x-1 hover:cursor-pointer"
								tabIndex={0}
							>
								<p className="font-bold leading-normal text-white">Projects</p>
								<ChevronDownIcon className="w-6 h-6 text-white duration-200 transform group-hover:-rotate-180" />
							</div>
							<ul className="dropdown-content dropdown-left z-[1] menu p-2 shadow-lg bg-gray rounded-box w-60">
								<li>
									<Link
										href={"https://github.com/DAObox/lens-voting"}
										target="_blank"
										className="text-white active:bg-trans-gray-2/10"
									>
										Lens Voting Plugin
									</Link>
								</li>
								<li className="text-white">
									<Link
										href={
											"https://github.com/DAObox/optimistic-proposal-plugin"
										}
										target="_blank"
										className="text-white active:bg-trans-gray-2/10"
									>
										Optimistic Voting Plugin
									</Link>
								</li>
								<li className="text-white">
									<Link
										href={"/"}
										className="text-white active:bg-trans-gray-2/10"
									>
										Liquid Protocol
									</Link>
								</li>
								<li className="text-white">
									<Link
										href={"https://use-aragon.daobox.app/"}
										target="_blank"
										className="text-white active:bg-trans-gray-2/10"
									>
										Use Aragon React Hooks
									</Link>
								</li>
							</ul>
						</div>
						<Link
							href="https://github.com/DAObox"
							target="_blank"
						>
							<button className="px-12 py-2.5 bg-white rounded-lg font-semibold flex items-center space-x-0.5">
								<p className="text-black">Join Us</p>
								<span>
									<ChevronRightIcon className="w-6 h-6 text-black" />
								</span>
							</button>
						</Link>
					</div>
				</div>
				<div
					className={`w-full min-h-[200px] flex flex-col items-center justify-center h-fit ${
						close ? "hidden" : "block"
					} md:hidden`}
				>
					<div className="flex flex-col items-center justify-center w-full h-full">
						<div className="flex flex-col items-center py-4 space-y-4">
							<div className="flex flex-col items-center group">
								<button
									className="z-20 flex items-center justify-center space-x-1 hover:cursor-pointer"
									onClick={() => setProjectsClose(!projectsClose)}
								>
									<p className="font-bold leading-normal text-white">
										Projects
									</p>
									<ChevronDownIcon
										className={`w-6 h-6 text-white duration-200 transform ${
											projectsClose ? "rotate-[360deg]" : "-rotate-180"
										}`}
									/>
								</button>
								<ul
									className={`flex flex-col items-center menu ${
										projectsClose ? "hidden" : "block"
									}`}
								>
									<li>
										<Link
											href={"https://github.com/DAObox/lens-voting"}
											target="_blank"
											className="text-white active:bg-trans-gray-2/10"
										>
											Lens Voting Plugin
										</Link>
									</li>
									<li className="text-white">
										<Link
											href={
												"https://github.com/DAObox/optimistic-proposal-plugin"
											}
											target="_blank"
											className="text-white active:bg-trans-gray-2/10"
										>
											Optimistic Voting Plugin
										</Link>
									</li>
									<li className="text-white">
										<Link
											href={"/"}
											className="text-white active:bg-trans-gray-2/10"
										>
											Liquid Protocol
										</Link>
									</li>
									<li className="text-white">
										<Link
											href={"https://use-aragon.daobox.app/"}
											target="_blank"
											className="text-white active:bg-trans-gray-2/10"
										>
											Use Aragon React Hooks
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full h-[0.25px] bg-gradient-to-r from-[#1017251A] via-white to-[#1017251A]" />
			</div>
		);
}