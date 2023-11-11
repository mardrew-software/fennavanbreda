import { Project } from '../_types';
import Image from 'next/image';
import Link from 'next/link';
export const ProjectHeader = ({ project }: { project: Project }) => {
    return (
        <Link href={`/projects/${project.slug}`}>
            <div className="shadow-md rounded cursor-pointer flex flex-col lg:flex-row border-2 border-black bg-[#ffe280] lg:max-w-[1000px] lg:h-[350px]">
                <Image
                    className="flex-shrink-0 hover:opacity-90 lg:min-w-[350px] lg:min-h-[350px]"
                    alt={project.title}
                    src={project.image.url}
                    width={350}
                    height={350}
                />
                <div className="flex flex-col justify-between p-8 w-full">
                    <div className="flex flex-col gap-4 w-full">
                        <span className={`text-xl font-bold`}>
                            {project.title}
                        </span>
                        <p className="">{project.smallDescription}</p>
                    </div>
                    <div className="flex w-full justify-end">
                        <span className="hover:bg-white hover:text-black px-2 py-1 text-white bg-black border-solid border-2 border-black max-w-fit rounded">
                            read more
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};
