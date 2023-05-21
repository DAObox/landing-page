import Image from "next/legacy/image"

export function Vision() {
    return(
        <div className="w-full h-full flex justify-center">
            <div className="max-w-xs px-2.5 sm:px-0 lg:px-5 xl:px-0 sm:max-w-xl md:max-w-2xl lg:max-w-6xl w-full">
                <div className="flex space-x-10">
                    <div className="max-w-lg space-y-2.5 h-64 flex flex-col justify-center items-center">
                        <div className="flex h-fit space-x-2.5 justify-start items-center w-full">
                            <div>
                                <h5 className="text-2xl text-white font-medium">Vision</h5>
                            </div>
                            <div>
                                <Image src={"/assets/vision.png"} width={35} height={35} alt="logo" />
                            </div>
                        </div>
                        <div>
                            <p className="text-white">
                                DAOBox is a decentralized organization that empowers communities through building tools to enable wider access to blockchain governance technology. Our mission is to make DAOs accessible to everyone, creating more transparent and inclusive governance for individuals and organizations.
                            </p>
                        </div>
                    </div>
                    <div className="max-w-lg h-64 relative flex-1">
                        <div className="w-full h-full relative">
                            <Image src={"/assets/vision-box.png"} alt="icon" layout="fill" />
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}