import Image from "next/image";
import { projects } from "../constants/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
    return(
        <div className="w-full h-full flex justify-center">
            <div className="max-w-xs px-2.5 sm:px-0 lg:px-5 xl:px-0 sm:max-w-xl md:max-w-2xl lg:max-w-6xl w-full">
                <div className="flex space-x-1.5 items-center">
                    <h5 className="text-2xl text-white font-medium">Projects</h5>
                    <span><Image src={"/assets/projects-icon.png"} alt="icon" width={30} height={30} /></span>
                </div>
                <div className="mt-5 w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-y-2 md:gap-y-4 sm:gap-x-2 md:gap-x-4">
                    {
                        projects.map(project => <ProjectCard key={project.id} title={project.title} badge={project.badge}
                            description={project.description} image={project.image} href={project.href} />)
                    }
                </div>
            </div>
        </div>
    )
}