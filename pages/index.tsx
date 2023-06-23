import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<div className="bg-gradient-to-r from-[#1E203C] to-[#11121B] w-full">
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
			<main></main>
		</div>
	);
};

export default Home;