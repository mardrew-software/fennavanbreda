'use client';
import { Roboto_Mono } from 'next/font/google';
import Image from 'next/image';
import { ReactNode, useEffect, useState } from 'react';
import { options } from '@/app/_utils/options';
import parse from 'html-react-parser';
import { About, Item as ItemType } from '@/app/_types';

const robotoMono = Roboto_Mono({ weight: ['400'], subsets: ['latin'] });

export const Content = ({ about }: { about: About }) => {
    const [parsedText, setParsedText] = useState<ReactNode>('');

    useEffect(() => {
        if (about.description) {
            setParsedText(parse(about.description.html, options));
        }
    }, []);

    return (
        <div className="w-full flex flex-col items-center">
            <div className="flex flex-col items-center gap-4 lg:gap-8 lg:max-w-[60%]">
                {about.title && (
                    <div className={`text-3xl ${robotoMono.className}`}>
                        {about.title}
                    </div>
                )}
                <div className="flex flex-row justify-center gap-8">
                    {about.image && (
                        <Image
                            className="rounded-sm max-w-[40%]"
                            alt="main image"
                            src={about.image.url}
                            width={about.image.width}
                            height={about.image.height}
                        />
                    )}
                    <div>{about.statement}</div>
                </div>
                <div className="flex flex-col gap-4">{parsedText}</div>
            </div>
        </div>
    );
};
