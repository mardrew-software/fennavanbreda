'use client';
import { Mali } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, useEffect, useState } from 'react';
import { options } from '@/app/_utils/parsedText';
import parse from 'html-react-parser';
import { Item as ItemType } from '@/app/_types';
import { FullDate } from './fullDate';

const mali = Mali({ weight: ['400'], subsets: ['latin'] });

export const Item = ({ item }: { item: ItemType }) => {
    const [parsedText, setParsedText] = useState<ReactNode>('');

    useEffect(() => {
        setParsedText(parse(item.details.html, options));
    }, []);
    return (
        <div className="flex flex-col gap-8 px-8 pb-16">
            <Link
                href={'/'}
                className={`cursor-pointer flex gap-2 items-center text-xl`}
            >
                <Image
                    alt="arrow back"
                    src={'/back.png'}
                    width={40}
                    height={20}
                />
                <span>go back</span>
            </Link>

            <div className="w-full flex flex-col items-center">
                <div className="flex flex-col items-center gap-8 lg:max-w-[60%]">
                    {item.title && (
                        <div className={`text-3xl ${mali.className}`}>
                            {item.title}
                        </div>
                    )}
                    <Image
                        alt="arrow down"
                        src={item.mainImage.url}
                        width={item.mainImage.width}
                        height={item.mainImage.height}
                    />
                    <div className="flex flex-col justify-between">
                        <div className="flex flex-col gap-4">
                            <FullDate
                                startDate={item.startDate}
                                endDate={item.endDate}
                            />
                            <div className="text-justify">
                                <div className="flex flex-col gap-2">
                                    {parsedText}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
