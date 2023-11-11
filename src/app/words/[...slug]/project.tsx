'use client';
import { DateTag } from '@/app/_components/dateTag';
import { Project as ProjectProp, ProjectStep } from '@/app/_types';
import { Patrick_Hand } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { Step } from './step';
import { ReactNode, useEffect, useState } from 'react';
import { options } from '@/app/_utils/parsedText';
import parse from 'html-react-parser';

const patrickHand = Patrick_Hand({ weight: ['400'], subsets: ['latin'] });

export const Project = ({ project }: { project: ProjectProp }) => {
    const [parsedText, setParsedText] = useState<ReactNode>('');

    useEffect(() => {
        setParsedText(parse(project.description.html, options));
    }, []);
    return (
        <div className="flex flex-col gap-8 mt-8 px-8 lg:px-16">
            <div className="flex flex-col gap-2">
                <Link
                    href={'/'}
                    className={`cursor-pointer flex gap-2 items-center text-xl ${patrickHand.className}`}
                >
                    <Image
                        alt="arrow back"
                        src={'/arrow_back.png'}
                        width={40}
                        height={20}
                    />
                    <span>back to home</span>
                </Link>
                {project.title && (
                    <div className={`text-3xl ${patrickHand.className}`}>
                        {project.title}
                    </div>
                )}
            </div>

            <div className="w-full flex flex-col items-center lg:items-start lg:flex-row justify-center gap-8">
                <Image
                    className="lg:max-w-[40%]"
                    alt="arrow down"
                    src={project.image.url}
                    width={project.image.width}
                    height={project.image.height}
                />
                <div className="flex flex-col justify-between lg:w-[250px]">
                    <div className="flex flex-col gap-4">
                        <DateTag date={project.date} />

                        <div className="text-justify">
                            <div className="flex flex-col gap-2">
                                {parsedText}
                            </div>
                        </div>
                    </div>
                    {project.steps.length > 0 && (
                        <Image
                            className="mx-auto mt-10 animate-bounce"
                            alt="arrow down"
                            src={'/arrow_down.png'}
                            width={50}
                            height={50}
                        />
                    )}
                </div>
            </div>
            <div className="lg:px-16 flex flex-col gap-8">
                {project.steps.map((s: ProjectStep, index: number) => {
                    return <Step key={index} s={s} />;
                })}
            </div>
        </div>
    );
};
