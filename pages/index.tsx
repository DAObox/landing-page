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
		<div
			className="flex justify-center relative w-full min-h-screen bg-gray bg-[url('/mobile-gradient.png')] md:bg-[url('/tablet-gradient.png')] 
    xl:bg-[url('/tablet-gradient.png')] bg-no-repeat bg-center bg-cover h-full"
		>
			<Head>
				<title>DAOBox</title>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
				<meta
					name="description"
					content="DAOBox is a decentralized organization that empowers communities through building tools to enable wider access to blockchain governance technology."
				/>
				<meta
					name="twitter:site"
					content="@daobox_app"
				/>
			</Head>
			<main className="flex bg-[#090C11] flex-col items-center justify-center w-full h-full">
				<Navbar />
				<div className="flex flex-col items-center w-full h-full px-5 pt-8 space-y-20 lg:space-y-36 md:px-14 xl:max-w-6xl">
					<Hero />
					<Preview />
					<DaoTools />
					<Experience />
					<Subscribe />
					<Footer />
				</div>
			</main>
		</div>
	);
};

export default Home;