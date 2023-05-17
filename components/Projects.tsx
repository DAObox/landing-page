import Image from "next/image";

export function Projects() {
    return(
        <div className="w-full h-full flex justify-center">
            <div className="max-w-xs px-2.5 sm:px-0 lg:px-5 xl:px-0 sm:max-w-lg md:max-w-2xl lg:max-w-6xl w-full">
                <div className="flex space-x-1.5 items-center">
                    <h5 className="text-2xl text-white font-medium">Projects</h5>
                    <span><Image src={"/assets/projects-icon.png"} alt="icon" width={30} height={30} /></span>
                </div>
            </div>
        </div>
    )
}