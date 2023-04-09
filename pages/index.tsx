import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import {
	CheckCircleIcon,
	InformationCircleIcon,
} from "@heroicons/react/20/solid";
import Hero from '../components/Hero'

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])


  return (
    <div>
		{/* <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-black"> */}
			<Head>
				<title>DAO BOX</title>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
				<link
					rel="preconnect"
					href="https://fonts.googleapis.com"
				/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Hero />
      <Content />

	</div>
	);
}

export default Home

export function Content() {
	return (
		<div className="bg-white px-6 py-32 lg:px-8">
			<div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
				<h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					useAragonHooks for Developers
				</h1>
				<div className="mt-10 max-w-2xl">
					<p>We support developers building on Aragon.</p>
					<ul
						role="list"
						className="mt-8 max-w-xl space-y-8 text-gray-600"
					>
						<li className="flex gap-x-3">
							<CheckCircleIcon
								className="mt-1 h-5 w-5 flex-none text-indigo-600"
								aria-hidden="true"
							/>
							<span>
								20+ hooks for working with AragonOSx DAOs and plugins.
							</span>
						</li>
						<li className="flex gap-x-3">
							<CheckCircleIcon
								className="mt-1 h-5 w-5 flex-none text-indigo-600"
								aria-hidden="true"
							/>
							<span>
								Caching, request deduplication, multicall, batching, and
								persistence.
							</span>
						</li>
						<li className="flex gap-x-3">
							<CheckCircleIcon
								className="mt-1 h-5 w-5 flex-none text-indigo-600"
								aria-hidden="true"
							/>
							<span>
								Auto-refresh data on wallet, blovk, and network changes.
							</span>
						</li>
						<li className="flex gap-x-3">
							<CheckCircleIcon
								className="mt-1 h-5 w-5 flex-none text-indigo-600"
								aria-hidden="true"
							/>
							<span>
								TypeScript ready.
							</span>
						</li>
						<li className="flex gap-x-3">
							<CheckCircleIcon
								className="mt-1 h-5 w-5 flex-none text-indigo-600"
								aria-hidden="true"
							/>
							<span>
								Test suite running against forked Ethereum network.
							</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

