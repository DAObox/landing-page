import Image from "next/image"
import Link from "next/link"
import { ArrowSmRightIcon } from "@heroicons/react/solid"
import { ProjectCardType } from "../types/typings"

export function ProjectCard({ title, badge, description, image, href }: ProjectCardType) {
    return (
        <div className="w-[300px] sm:w-[285px] md:w-[325px] lg:w-[315px] xl:w-[375px] min-h-fit h-full card bg-black shadow-xl p-4 lg:p-8 space-y-4 justify-between">
            <div className="w-full flex justify-between items-center">
                <div>
                    <Image src={image} alt="icon" width={20} height={20} />
                </div>
                <div>
                    <div className="badge badge-outline border-2 border-border p-4">
                        <p className="text-white">{badge}</p>
                    </div>
                </div>
            </div>
            <div className="space-y-3 h-full">
                <h3 className="text-2xl text-white font-medium">{title}</h3>
                <p className="text-base text-gray">{description}</p>
            </div>
            <div className="w-fit">
                <Link href={href} target="_blank">
                    <div className="flex space-x-0.5 items-center">
                        <div>
                            <p className="text-base text-green">Link to contribute</p>
                        </div>
                        <div>
                            <ArrowSmRightIcon className="text-green w-6 h-6" />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}