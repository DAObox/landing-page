import Image from "next/image";
import Link from "next/link";
import daoboxLogo from "../public/images/logo/logo.png";

export function Navbar() {
    return (
			<div className="w-full flex justify-center relative">
				<div
					className="w-full bg-transparent mt-8 bg-none absolute inset-x-0 max-w-xs px-2.5 sm:px-0 
                lg:px-5 xl:px-0 sm:max-w-xl md:max-w-2xl lg:max-w-6xl"
				>
					<div className="w-full flex items-center justify-between h-fit">
						<div>
							<Image
								src={daoboxLogo}
								alt="logo"
								width={182}
								height={44}
							/>
						</div>
						<Link
							href={"/"}
							className="mt-2.5 text-white"
						>
						Vision
						</Link>
						<div className="hidden lg:block" />
					</div>
				</div>
			</div>
		);
}