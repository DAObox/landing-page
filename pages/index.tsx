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
      <main className="relative w-full min-h-screen bg-gray">
        <div className="w-full h-full">
          <div className="absolute flex justify-center flex-shrink-0 w-full h-[500px] -rotate-90 md:h-full -top-44 md:-top-96">
            <div className="rounded-grad min-w-[80%] min-h-[80%] md:min-w-[65%] md:min-h-[65%] blur-[300px] rounded-full" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

{/* <div className="w-full h-full">
  <div className="absolute flex justify-center flex-shrink-0 w-full h-full -rotate-90 -top-[600px]">
    <div className="rounded-grad min-w-[65%] min-h-[65%]" />
  </div>
</div> */}