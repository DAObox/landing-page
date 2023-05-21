import Image from "next/image";
import Link from "next/link";

export function Navbar() {
    return(
        <div className="w-full bg-transparent mt-8 bg-none">
            <div className="w-full flex items-center justify-between h-fit">
                <div>
                    <Image src={"/images/logo/logo.png"} alt="logo" width={182} height={44} />
                </div>
                <Link href={"/"} className="mt-2.5 text-white">Vision</Link>
                <div className="hidden lg:block" />
            </div>
        </div>
    )
}