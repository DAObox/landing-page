import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Hero } from "../components/Hero";

const Home: NextPage = () => {
	return (
		<div className="bg-gradient-to-r from-[#1E203C] to-[#11121B] w-full min-h-screen">
			<Head>
				<title>DAO BOX</title>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
			<main className="w-full relative">
				<Hero />
			</main>
		</div>
	);
};

export default Home;