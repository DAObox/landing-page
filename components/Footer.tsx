import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex flex-col items-center w-screen h-full bg-dark-gray">
            <div className="w-full px-5 pt-8 space-y-20 lg:space-y-36 md:px-14 xl:max-w-6xl">
                <div className="flex justify-between w-full">
                    <div>
                        <div className="flex items-center space-x-1.5">
                            <Image src={"/favicon.ico"} width={30} height={30} alt="icon" />
                            <h1 className="text-2xl font-semibold text-white">DAOBox</h1>
                        </div>
                    </div>
                    <div className="flex space-x-20">
                        <div className="flex flex-col space-y-4">
                            <h6 className="text-lg text-white">Product</h6>
                            <Link href={"/"} className="text-lg text-trans-ash">Lens Voting Plugin</Link>
                            <Link href={"/"} className="text-lg text-trans-ash">Lens Voting Plugin</Link>
                            <Link href={"/"} className="text-lg text-trans-ash">Lens Voting Plugin</Link>
                            <Link href={"/"} className="text-lg text-trans-ash">Lens Voting Plugin</Link>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <h6 className="text-lg text-white">Resources</h6>
                            <Link href={"/"} className="text-lg text-trans-ash">Documentation</Link>
                            <Link href={"/"} className="text-lg text-trans-ash">Contact</Link>
                            <Link href={"/"} className="text-lg text-trans-ash">Brand style</Link>
                        </div>
                        <div className="flex space-x-4">
                            <Link href={"/"}>
                                <Image src={"/twitter.png"} width={24} height={24} alt="twitter icon" />
                            </Link>
                            <Link href={"/"}>
                                <Image src={"/discord.png"} width={24} height={24} alt="twitter icon" />
                            </Link>
                            <Link href={"/"}>
                                <Image src={"/github.png"} width={24} height={24} alt="twitter icon" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <Image src={"/half-trans-logo.png"} width={200} height={200} alt="icon" />
                    </div>
                    <h6 className="text-lg text-dark-ash">2023 DAOBox</h6>
                </div>
            </div>
        </div>
    )
}