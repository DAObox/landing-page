import Image from "next/image";
import Spotlight, { SpotlightCard } from "./Spotlight";

export default function DaoTools() {
    return (
        <div className="pt-20 sm:pt-0 space-y-14">
            <div className="space-y-2">
                <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-br from-trans-gray via-white to-trans-gray">
                    DAO Tools
                </h1>
                <div className="lg:text-2xl">
                    <p className="text-center text-transparent bg-clip-text bg-gradient-to-br from-trans-gray via-white to-trans-gray">
                        Custom architecture, U.I and plugins for
                    </p>
                    <p className="text-center text-transparent bg-clip-text bg-gradient-to-br from-trans-gray via-white to-trans-gray">
                        Aragon OSx protocol.
                    </p>
                </div>
            </div>
            <Spotlight className="space-y-6">
                <Spotlight className="flex space-x-6 h-[350px]">
                    <SpotlightCard
                        className="max-w-sm sm:max-w-full lg:w-full bg-transparent rounded-lg p-[0.5px] bg-gradient-to-br from-[#1017251A] 
                            via-white to-[#1017251A] h-full"
                    >
                        <div className="h-full">
                            <div className="w-full h-full p-6 rounded-lg bg-trans-gray-2">
                                <div className="w-full h-full bg-[url('/grid.png')] bg-no-repeat bg-cover bg-center pt-10 space-y-2">
                                    <div className="p-[0.25px] rounded-full max-w-fit max-h-fit h-[50px] w-full backdrop-blur-md bg-gradient-to-bl rotate-[50deg] from-white to-white">
                                        <div className="w-[50px] h-[50px] rounded-full bg-[#22262B] p-2.5 -rotate-[50deg] relative">
                                            <Image
                                                src={"/lens.png"}
                                                width={35}
                                                height={35}
                                                alt="icon"
                                            />
                                        </div>
                                    </div>
                                    <h5 className="text-2xl font-semibold leading-8 text-white">
                                        Lens Voting Plugin
                                    </h5>
                                    <p className="text-ash">
                                        Lens Voting Plugin empowers Lens Follow NFT holders to
                                        actively engage in governance actions within AragonOSx-powered
                                        DAOs. By leveraging the plugin's functions, users can access
                                        vital information, create proposals, exercise their voting
                                        power, and contribute to shaping the future of their specific
                                        DAO ecosystem.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SpotlightCard>
                    <SpotlightCard
                        className="max-w-sm sm:max-w-full lg:max-w-sm bg-transparent rounded-lg p-[0.5px]
                bg-gradient-to-br from-[#1017251A] via-white to-[#1017251A] w-full hidden lg:block"
                    >
                        <div className="w-full h-full p-6 rounded-lg bg-trans-gray-2">
                            <div className="w-full h-full bg-[url('/grid.png')] bg-cover bg-no-repeat bg-center pt-2 space-y-16">
                                <div>
                                    <h5 className="text-xl text-transparent bg-gradient-to-br from-[#02AB76] to-[#1457ED] w-fit bg-clip-text">
                                        Coming soon
                                    </h5>
                                </div>
                                <div className="space-y-2">
                                    <div className="p-[0.25px] rounded-full max-w-fit max-h-fit h-[50px] w-full backdrop-blur-md bg-gradient-to-bl rotate-[50deg] from-white to-white">
                                        <div className="w-[50px] h-[50px] rounded-full bg-[#22262B] p-2.5 -rotate-[50deg] relative">
                                            <Image
                                                src={"/dark-logo.png"}
                                                width={35}
                                                height={35}
                                                alt="icon"
                                            />
                                        </div>
                                    </div>
                                    <h5 className="text-2xl font-semibold leading-8 text-white">
                                        Liquid Protocol
                                    </h5>
                                    <p className="text-ash">
                                        Subscribe to our newsletter to stay tuned on the release.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SpotlightCard>
                </Spotlight>

                <Spotlight className="flex flex-col w-full space-y-6 sm:flex-row sm:space-x-6 sm:space-y-0 lg:space-x-0 h-[375px]">
                    <SpotlightCard
                        className="max-w-sm sm:max-w-full lg:max-w-sm bg-transparent rounded-lg p-[0.5px]
                bg-gradient-to-br from-[#1017251A] via-white to-[#1017251A] w-full lg:hidden h-full"
                    >
                        <div className="w-full h-full p-6 rounded-lg bg-trans-gray-2">
                            <div className="w-full h-full bg-[url('/grid.png')] bg-cover bg-no-repeat bg-center pt-2 space-y-16">
                                <div>
                                    <h5 className="text-xl text-transparent bg-gradient-to-br from-[#02AB76] to-[#1457ED] w-fit bg-clip-text">
                                        Coming soon
                                    </h5>
                                </div>
                                <div className="space-y-2">
                                    <div className="p-[0.25px] rounded-full max-w-fit max-h-fit h-[50px] w-full backdrop-blur-md bg-gradient-to-bl rotate-[50deg] from-white to-white">
                                        <div className="w-[50px] h-[50px] rounded-full bg-[#22262B] p-2.5 -rotate-[50deg] relative">
                                            <Image
                                                src={"/dark-logo.png"}
                                                width={35}
                                                height={35}
                                                alt="icon"
                                            />
                                        </div>
                                    </div>
                                    <h5 className="text-2xl font-semibold leading-8 text-white">
                                        Liquid Protocol
                                    </h5>
                                    <p className="text-ash">
                                        Subscribe to our newsletter to stay tuned on the release.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SpotlightCard>
                    <SpotlightCard
                        className="max-w-sm sm:max-w-full lg:max-w-sm bg-transparent rounded-lg p-[0.5px]
                bg-gradient-to-br from-[#1017251A] via-white to-[#1017251A] w-full"
                    >
                        <div className="w-full h-full p-6 rounded-lg bg-trans-gray-2">
                            <div className="w-full h-full bg-[url('/grid.png')] bg-cover bg-no-repeat bg-center pt-2 space-y-16">
                                <div>
                                    <h5 className="text-xl text-transparent bg-gradient-to-br from-[#02AB76] to-[#1457ED] w-fit bg-clip-text">
                                        Beta
                                    </h5>
                                </div>
                                <div className="space-y-2">
                                    <div className="p-[0.25px] rounded-full max-w-fit max-h-fit h-[50px] w-full backdrop-blur-md bg-gradient-to-bl rotate-[50deg] from-white to-white">
                                        <div className="w-[50px] h-[50px] rounded-full bg-[#22262B] p-2.5 -rotate-[50deg] relative">
                                            <Image
                                                src={"/dark-logo.png"}
                                                width={35}
                                                height={35}
                                                alt="icon"
                                            />
                                        </div>
                                    </div>
                                    <h5 className="text-2xl font-semibold leading-8 text-white">
                                        useAragon React Hooks
                                    </h5>
                                    <p className="text-ash">
                                        A collection of react hooks containing everything you need
                                        to integrate Aragon into your application.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SpotlightCard>

                    <Spotlight className="hidden w-full h-full lg:pl-6 lg:block">
                        <SpotlightCard>
                            <div
                                className="max-w-sm sm:max-w-full bg-transparent rounded-lg p-[0.5px]
                bg-gradient-to-br from-[#1017251A] via-white to-[#1017251A] h-full"
                            >
                                <div className="w-full h-full p-6 rounded-lg bg-trans-gray-2">
                                    <div className="w-full h-full bg-[url('/grid.png')] bg-cover bg-no-repeat bg-center pt-24 space-y-2">
                                        <div className="p-[0.25px] rounded-full max-w-fit max-h-fit h-[50px] w-full backdrop-blur-md bg-gradient-to-bl rotate-[50deg] from-white to-white">
                                            <div className="w-[50px] h-[50px] rounded-full bg-[#22262B] p-2.5 -rotate-[50deg] relative">
                                                <Image
                                                    src={"/optimistic.png"}
                                                    width={35}
                                                    height={35}
                                                    alt="icon"
                                                />
                                            </div>
                                        </div>
                                        <h5 className="text-2xl font-semibold leading-8 text-white">
                                            Optimistic Voting Plugin
                                        </h5>
                                        <p className="text-ash">
                                            Optimistic voting plugin streamlines the decision-making
                                            process in decentralized autonomous organizations (DAOs) by
                                            leveraging subjective oracle flow. Malicious proposals can be
                                            effectively challenged, thus addressing the issues of trust
                                            and security in DAOs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SpotlightCard>
                    </Spotlight>
                </Spotlight>
                <SpotlightCard
                    className="max-w-sm sm:max-w-full  bg-transparent rounded-lg p-[0.5px]
                bg-gradient-to-br from-[#1017251A] via-white to-[#1017251A] lg:hidden"
                >
                    <div className="w-full p-6 rounded-lg h-fit bg-trans-gray-2">
                        <div className="w-full h-full bg-[url('/grid.png')] bg-cover bg-no-repeat bg-center pt-24 space-y-2">
                            <div className="p-[0.25px] rounded-full max-w-fit max-h-fit h-[50px] w-full backdrop-blur-md bg-gradient-to-bl rotate-[50deg] from-white to-white">
                                <div className="w-[50px] h-[50px] rounded-full bg-[#22262B] p-2.5 -rotate-[50deg] relative">
                                    <Image
                                        src={"/optimistic.png"}
                                        width={35}
                                        height={35}
                                        alt="icon"
                                    />
                                </div>
                            </div>
                            <h5 className="text-2xl font-semibold leading-8 text-white">
                                Optimistic Voting Plugin
                            </h5>
                            <p className="text-ash">
                                Optimistic voting plugin streamlines the decision-making process
                                in decentralized autonomous organizations (DAOs) by leveraging
                                subjective oracle flow. Malicious proposals can be effectively
                                challenged, thus addressing the issues of trust and security in
                                DAOs.
                            </p>
                        </div>
                    </div>
                </SpotlightCard>
            </Spotlight>
        </div>
    );
}
