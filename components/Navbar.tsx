import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"

export function Navbar() {
    return(
        <div className="w-full flex justify-center relative">
            <div className="w-full bg-transparent mt-8 bg-none absolute inset-x-0 max-w-xs px-2.5 sm:px-0 
                lg:px-5 xl:px-0 sm:max-w-xl md:max-w-2xl lg:max-w-6xl">
                <div className="w-full flex items-center justify-between h-fit">
                    <motion.div
                        initial={{
                            x: -500,
                            opacity: 0,
                            scale: 0.5
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            scale: 1
                        }}
                        transition={{
                            duration: 5
                        }}
                    >
                        <Image src={"/images/logo/logo.png"} alt="logo" width={182} height={44} />
                    </motion.div>
                    <motion.div 
                        initial={{
                            x: 500,
                            opacity: 0,
                            scale: 0.5
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            scale: 1
                        }}
                        transition={{
                            duration: 5
                        }}
                    >
                        <Link href={"/"} className="mt-2.5 text-white">Vision</Link>
                    </motion.div>
                    <div className="hidden lg:block" />
                </div>
            </div>
        </div>
    )
}