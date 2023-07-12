import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Preview from "../components/Preview";
import DaoTools from "../components/DaoTools";
import Experience from "../components/Experience";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const Home: NextPage = () => {
	return (
		<div className="relative flex justify-center w-full h-full min-h-screen bg-gray">
			<Head>
				<title>DAOBox - Make DAOs Accessible</title>
				<meta
					name="description"
					content="DAOBox is a developer and designer collective dedicated to building DAO toolings."
				/>
				<meta
					property="og:url"
					content="https://daobox.app"
				/>
				<meta
					property="og:type"
					content="website"
				/>
				<meta
					property="og:title"
					content="DAOBox - Make DAOs Accessible"
				/>
				<meta
					property="og:description"
					content="DAOBox is a developer and designer collective dedicated to building DAO toolings."
				/>
				<meta
					property="og:image"
					content="/banner.png"
				/>
				<meta
					name="twitter:card"
					content="summary_large_image"
				/>
				<meta
					property="twitter:domain"
					content="daobox.app"
				/>
				<meta
					property="twitter:url"
					content="https://daobox.app"
				/>
				<meta
					name="twitter:title"
					content="DAOBox - Make DAOs Accessible"
				/>
				<meta
					name="twitter:description"
					content="DAOBox is a developer and designer collective dedicated to building DAO toolings."
				/>
				<meta
					name="twitter:image"
					content="/banner.png"
				/>

				<meta
					name="twitter:site"
					content="@daobox_app"
				/>

				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
			<main className="flex flex-col items-center justify-center w-full h-full">
				<div className="md:bg-[url('/blur-eclipse.svg')] bg-no-repeat bg-top bg-contain flex flex-col items-center">
					<Navbar />
					<div className="flex flex-col items-center w-screen h-full pt-8 space-y-20 lg:space-y-36 md:px-14 xl:max-w-6xl">
						<Hero />
						<Preview />
						<DaoTools />
						<Experience />
						<Subscribe />
						<Footer />
					</div>
				</div>
			</main>
		</div>
	);
};

export default Home;