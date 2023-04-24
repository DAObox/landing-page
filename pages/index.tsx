import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Home: NextPage = () => {
	return (
		<div className="bg-black">
			<Head>
				<title>DAO BOX</title>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
			<div className="bg-black mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-16 justify-between">
					<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
						<div className="flex flex-shrink-0 items-center">
							<img
								className="block h-8 w-auto lg:hidden"
								src="/images/logo/logo.png"
								alt="DAOBox logo"
							/>
							<img
								className="hidden h-8 w-auto lg:block"
								src="/images/logo/logo.png"
								alt="DAOBox logo"
							/>
						</div>
					</div>
				</div>
				<section className="text-white body-font max-w-4xl mx-auto mt-24 text-center">
					<Image
						className="inline"
						src="/assets/logo-blacked.png"
						alt="logo blacked"
						width={250}
						height={250}
					/>
					<h1 className="text-5xl md:text-6xl mt-24 pb-8">
						Fueling decentralized innovation with Aragon
					</h1>
					<p className="text-lg">
						We empower developers to contribute to the Aragon ecosystem,
						fostering innovation and accelerating the advancement of
						decentralized technologies.
					</p>
					<a
						href="https://use-aragon.daobox.app/"
						target="_blank"
					>
						<button
							type="button"
							className="my-12 lg:mb-60 rounded-md bg-white px-12 py-4 text-sm font-semibold text-black shadow-sm hover:bg-green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
						>
							useAragon Hooks <ArrowRightIcon className="h-4 w-4 inline" />
						</button>
					</a>
				</section>
			</div>
		</div>
	);
};

export default Home;
