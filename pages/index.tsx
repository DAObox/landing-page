import type { NextPage } from "next";
import Head from "next/head";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";

const Home: NextPage = () => {
	return (
		<div className="bg-gradient-to-r from-[#1E203C] to-[#11121B] w-full">
			<Head>
				<title>DAO BOX</title>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
			<main className="w-full relative h-full">
				<Hero />
				<Projects />
			</main>
		</div>
	);
};

export default Home;