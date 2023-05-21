import Image from "next/image";

export function Sponsors() {
    return(
        <div className="bg-black-2 p-10">
            <div className="flex h-fit space-x-2.5 justify-center items-center">
                <div>
                    <h5 className="text-2xl text-white font-medium">Sponsors: </h5>
                </div>
                <div>
                    <Image src={"/assets/lens.png"} width={35} height={35} alt="logo" />
                </div>
            </div>
        </div>
    )
}