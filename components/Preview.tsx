import Image from "next/image";

export default function Preview() {
    return(
        <div className="relative w-full">
            <Image src={"/preview.png"} width={1000} height={500} alt="preview" className="hidden md:block" />
            <div className="w-full h-[0.5px] bg-gradient-to-r from-[#1017251A] via-white to-[#1017251A] absolute inset-x-0" />
        </div>
    )
}