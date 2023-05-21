import { ArrowRightIcon } from "@heroicons/react/solid";
import Link from "next/link";

export function Hooks() {
    return(
        <div className="w-screen h-48 bg-no-repeat bg-center bg-cover bg-[url('/assets/stripes.png')] flex flex-col items-center justify-center">
            <div className="bg-no-repeat bg-center bg-cover bg-[url('/assets/fill.png')] bg-blend-color py-2.5 px-10">
                <Link href={"/"}>
                    <div className="flex space-x-1 items-center bg-none">
                        <h2 className="text-5xl text-white font-medium">useAragon React Hooks</h2>
                        <div>
                            <ArrowRightIcon className="w-16 h-16 text-white" />
                        </div>
                    </div>                
                </Link>                
            </div>
        </div>
    )
}