import Image from "next/image";

export default function Preview() {
    return(
        <div>
            <Image src={"/preview.png"} width={1000} height={1000} alt="preview" />
            <div className="w-full h-[0.25px] sm:h-[0.5px] bg-gradient-to-r from-[#1017251A] via-white to-[#1017251A] absolute inset-x-0" />
        </div>
    )
}