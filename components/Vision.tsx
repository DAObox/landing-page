import Image from "next/image"
import { motion } from "framer-motion"

export function Vision() {
    return(
        <div>
        <div className="w-full h-full flex justify-center">
            <div className="max-w-xs px-2.5 sm:px-0 lg:px-5 xl:px-0 sm:max-w-xl md:max-w-2xl lg:max-w-6xl w-full">
                <div className="flex flex-col lg:flex-row lg:space-x-10 space-y-5 lg:space-y-0">
                    <motion.div
                        initial={{ opacity: 0.25, x: -150 }}
                        animate={{ x: 1, opacity: 1 }}
                        whileInView={{ x: 1, opacity: 1 }}
                        transition={{ duration: 5 }}
                        viewport={{ once: false }}
                        className="max-w-full lg:max-w-lg space-y-2.5 h-64 flex flex-col justify-center items-center"
                    >
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
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0.25, x: 0 }}
                        animate={{ x: 1, opacity: 1 }}
                        whileInView={{ x: 1, opacity: 1 }}
                        transition={{ duration: 5 }}
                        viewport={{ once: false }}
                        className="w-full">
                        <Image src={"/assets/vision-box.png"} alt="icon" width={512} height={256} />
                    </motion.div>
                </div>
            </div>
        </div>            
        </div>

    )
}