import { ArrowRightIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hooks() {
    return (
			<div className="w-screen h-fit bg-no-repeat bg-center bg-cover bg-[url('/assets/stripes.png')] flex flex-col items-center justify-center">
				<div className="bg-no-repeat bg-center bg-cover bg-[url('/assets/fill.png')] bg-blend-color py-2.5 px-10">
					<Link target="_blank" href={"https://use-aragon.daobox.app/"}>
						<motion.div
							initial={{ opacity: 0.25, x: -10 }}
							animate={{ x: 1, opacity: 1 }}
							whileInView={{ x: 1, opacity: 1 }}
							transition={{ duration: 1.5 }}
							whileHover={{ x: 50, opacity: 1 }}
							viewport={{ once: false }}
							className="flex space-x-1 items-center bg-none group hover:cursor-pointer"
						>
							<h2 className="text-2xl sm:text-4xl md:text-5xl text-white font-medium group-hover:text-green">
								useAragon React Hooks
							</h2>
							<div>
								<ArrowRightIcon className="w-6 h-6 sm:w-10 sm:h-10 md:w-16 md:h-16 text-white group-hover:text-green" />
							</div>
						</motion.div>
					</Link>
				</div>
			</div>
		);
}