'use client';
import { Mali } from 'next/font/google';
import Image from 'next/image';
import { ReactNode, useEffect, useState } from 'react';
import { options } from '@/app/_utils/options';
import parse from 'html-react-parser';
import { Item as ItemType } from '@/app/_types';
import { FullDate } from './fullDate';
import { GoBack } from './goBack';

const mali = Mali({ weight: ['400'], subsets: ['latin'] });

export const Item = ({ item }: { item: ItemType }) => {
    const [parsedText, setParsedText] = useState<ReactNode>('');

    useEffect(() => {
        if (item.details) {
            setParsedText(parse(item.details.html, options));
        }
    }, []);
    return (
        <div className="flex flex-col gap-8 px-8 pb-16">
            <GoBack slug={`/${item.page}`} />

            <div className="w-full flex flex-col items-center">
                <div className="flex flex-col items-center gap-8 w-full lg:max-w-[60%]">
                    {item.title && (
                        <div className="flex flex-col items-center gap-1">
                            <div className={`text-3xl ${mali.className}`}>
                                {item.title}
                            </div>
                            <div className="flex flex-row gap-2">
                                <FullDate
                                    startDate={item.startDate}
                                    endDate={item.endDate}
                                />
                                {item.location &&
                                    (item.startDate || item.endDate) &&
                                    '/'}
                                <div className="font-bold">{item.location}</div>
                            </div>
                        </div>
                    )}
                    <div className="text-justify">{item.summary}</div>
                    {item.mainImage && (
                        <Image
                            alt="main image"
                            src={item.mainImage.url}
                            width={item.mainImage.width}
                            height={item.mainImage.height}
                        />
                    )}
                    <div className="flex flex-col gap-8 items-center w-full">
                        {parsedText}
                    </div>
                </div>
            </div>
        </div>
    );
};
