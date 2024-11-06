'use client';
import { Gamja_Flower, Mali } from 'next/font/google';
import Image from 'next/image';
import { ReactNode, useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { Item as ItemType } from '@/app/_types';
import { FullDate } from './fullDate';
import { GoBack } from './goBack';

const ganjaFlower = Gamja_Flower({ weight: ['400'], subsets: ['latin'] });

export const Item = ({ item }: { item: ItemType }) => {
    const [parsedText, setParsedText] = useState<ReactNode>('');

    return (
        <div className="w-full flex flex-col items-center px-4 gap-8">
            {item.title && (
                <div className="flex flex-col items-center gap-1 w-full">
                    <div className="w-full grid grid-cols-12 items-align">
                        <div className="col-span-2"></div>
                        <div className="flex justify-center col-span-8">
                            <div
                                className={`uppercase text-2xl ${ganjaFlower.className}`}
                            >
                                {item.title}
                            </div>
                        </div>
                        <div className="col-span-2"></div>
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
    );
};
