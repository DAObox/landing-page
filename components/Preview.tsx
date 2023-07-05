import Image from "next/image";
import Tribe from "../public/preview.png";

export default function Preview() {
    return(
        <div className="relative flex flex-col items-center justify-center w-screen">
            <div className="hidden sm:block" >
                <Image src={Tribe} width={1280} height={500} alt="preview"/>
            </div>
            <div className="w-full h-[0.5px] bg-gradient-to-r from-[#1017251A] via-white to-[#1017251A]" />
        </div>
    )
}