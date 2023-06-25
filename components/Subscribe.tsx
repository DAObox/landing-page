import Image from "next/image";

export default function Subscribe() {
    return (
        <div className="w-full h-full max-w-lg lg:max-w-2xl">
            <div className="flex justify-between w-full h-[375px]">
                <div className="mt-20 w-[6px] h-full relative">
                    <Image src={"/laser.png"} width={6} height={6} alt="laser" />
                </div>
                <div>
                    <Image src={"/trans-logo.png"} width={250} height={250} alt="laser" />
                </div>
                <div className="mt-20 w-[6px] h-full relative">
                    <Image src={"/laser.png"} width={6} height={6} alt="laser" />
                </div>
            </div>
            <div className="w-full -mt-32 space-y-2 text-center">
                <h1 className="text-3xl font-extrabold text-center text-transparent sm:text-5xl bg-clip-text bg-gradient-to-br from-trans-gray via-white to-trans-gray">Access DAOs through innovative tools</h1>
                <p className="text-2xl text-trans-ash">Subscribe to our waitlist.</p>
            </div>
        </div>
    )
}