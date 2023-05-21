import Image from "next/image";
import { motion } from "framer-motion";
import lensLogo from "../public/assets/lens.png";

export function Sponsors() {
    return(
        <div className="bg-black-2 p-10">
            <motion.div
                initial={{ opacity: -50, x: -50 }}
                animate={{ x: 1, opacity: 1 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 10 }}
                className="flex h-fit space-x-2.5 justify-center items-center"
            >
                <div>
                    <h5 className="text-2xl text-white font-medium">Sponsors: </h5>
                </div>
                <div>
                    <Image src={lensLogo} width={35} height={35} alt="logo" />
                </div>
            </motion.div>
        </div>
    )
}