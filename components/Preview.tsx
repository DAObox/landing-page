import Image from "next/image";

export default function Preview() {
    return(
        <div className="relative w-full">
            <div className="hidden sm:block" >
                <Image src={"/preview.png"} width={1000} height={500} alt="preview"/>
            </div>
            <div className="w-full h-[0.5px] bg-gradient-to-r from-[#1017251A] via-white to-[#1017251A] absolute inset-x-0" />
        </div>
    )
}