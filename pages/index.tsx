import type { NextPage } from "next";
import Head from "next/head";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Hooks } from "../components/Hooks";
import { Sponsors } from "../components/Sponsors";
import { Footer } from "../components/Footer";
import { Vision } from "../components/Vision";

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
			<main className="w-full relative min-h-screen h-full">
				<div className="w-full absolute top-0 left-0">
					<div className="bg-[url('/images/backgrounds/blue-shade.png')] bg-no-repeat bg-center bg-cover w-[calc(100%)] sm:w-[calc(75%)] 
						md:w-[calc(50%)] h-full min-h-[450px] lg:min-h-[600px] rounded-br-full" />
				</div>
				<div className="space-y-20">
					<Hero />
					<Projects />
					<Hooks />
					<Sponsors />
					<Vision />
					<Footer />
				</div>
			</main>
		</div>
	);
};

export default Home;