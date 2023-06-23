import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center relative w-full min-h-screen bg-gray bg-[url('/mobile-gradient.png')] md:bg-[url('/tablet-gradient.png')] 
    xl:bg-[url('/tablet-gradient.png')] bg-no-repeat bg-center bg-cover">
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
      <main className="w-full">
        <Navbar />
        <div className="h-full px-5 md:px-14 xl:max-w-6xl">
          <Hero />
        </div>
      </main>
    </div>
  );
};

export default Home;