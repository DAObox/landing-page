import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex flex-col items-center w-screen h-full bg-dark-gray">
            <div className="w-full px-5 pt-8 space-y-20 lg:space-y-36 md:px-14 x[24px]:max-w-[24px]xl">
                <div className="flex flex-col w-full space-y-6 sm:space-y-0 sm:flex-row sm:justify-between">
                    <div>
                        <div className="flex items-center space-x-1.5">
                            <Image src={"/favicon.ico"} width={30} height={30} alt="icon" />
                            <h1 className="text-2xl font-semibold text-white">DAOBox</h1>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-6 sm:space-y-0 sm:flex-row sm:space-x-20">
                        <div className="flex flex-col space-y-4">
                            <h6 className="text-lg text-white">Product</h6>
                            <Link href={"/"}>
                                <p className="text-lg text-trans-ash">Lens Voting Plugin</p>
                            </Link>
                            <Link href={"/"}>
                                <p className="text-lg text-trans-ash">Lens Voting Plugin</p>
                            </Link>
                            <Link href={"/"}>
                                <p className="text-lg text-trans-ash">Lens Voting Plugin</p>
                            </Link>
                            <Link href={"/"}>
                                <p className="text-lg text-trans-ash">Lens Voting Plugin</p>
                            </Link>
                            <div className="flex space-x-4 lg:hidden">
                                <Link href={"/"}>
                                    <div className="relative max-h-[24px] max-w-[24px]">
                                        <Image src={"/twitter.png"} width={24} height={24} alt="twitter icon" />
                                    </div>
                                </Link>
                                <Link href={"/"}>
                                    <div className="relative max-h-[24px] max-w-[24px]">
                                        <Image src={"/discord.png"} width={24} height={24} alt="discord icon" />
                                    </div>
                                </Link>
                                <Link href={"/"}>
                                    <div className="relative max-h-[24px] max-w-[24px]">
                                        <Image src={"/github.png"} width={24} height={24} alt="github icon" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <h6 className="text-lg text-white">Resources</h6>
                            <Link href={"/"}>
                                <p className="text-lg text-trans-ash">Documentation</p>
                            </Link>
                            <Link href={"/"}>
                                <p className="text-lg text-trans-ash">Contact</p>
                            </Link>
                            <Link href={"/"}>
                                <p className="text-lg text-trans-ash">Brand style</p>
                            </Link>
                        </div>
                        <div className="hidden space-x-4 lg:flex">
                            <Link href={"/"}>
                                <div className="relative max-h-[24px] max-w-[24px]">
                                    <Image src={"/twitter.png"} width={24} height={24} alt="twitter icon" />
                                </div>
                            </Link>
                            <Link href={"/"}>
                                <div className="relative max-h-[24px] max-w-[24px]">
                                    <Image src={"/discord.png"} width={24} height={24} alt="discord icon" />
                                </div>
                            </Link>
                            <Link href={"/"}>
                                <div className="relative max-h-[24px] max-w-[24px]">
                                    <Image src={"/github.png"} width={24} height={24} alt="github icon" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="relative max-h-[200px] max-w-[200px]">
                        <Image src={"/half-trans-logo.png"} width={200} height={200} alt="icon" />
                    </div>
                    <h6 className="text-lg text-trans-ash">2023 DAOBox</h6>
                </div>
            </div>
        </div>
    )
}