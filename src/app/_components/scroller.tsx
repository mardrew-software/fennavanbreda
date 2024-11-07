import Link from 'next/link';
import { Item } from '../_types';

import Image from 'next/image';
import { Gamja_Flower, Mali, Roboto_Mono } from 'next/font/google';
import { MouseEventHandler } from 'react';

const ganjaFlower = Gamja_Flower({ weight: ['400'], subsets: ['latin'] });

export const Scroller = ({
    slug,
    label,
    items,
    onMouseEnter,
    onMouseLeave,
    className
}: {
    slug: string;
    label: string;
    items: Item[];
    onMouseEnter?: MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: MouseEventHandler<HTMLDivElement>;
    className?: string;
}) => {
    return (
        <div
            className={`flex flex-col gap-4 h-full ${className}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <h2
                className={`hidden lg:flex text-2xl uppercase ${ganjaFlower.className}`}
            >
                {label}
            </h2>
            <div className="pr-4 scrollbar flex flex-col gap-4 h-[calc(100vh-136px)] overflow-y-scroll">
                <div className="flex flex-col gap-2 ">
                    {items.map((i: Item, n: number) => {
                        return (
                            <Link
                                key={'item' + n}
                                href={`/${slug}/${i.urlPath}`}
                                className="flex flex-col gap-2"
                            >
                                {i.homepageImage && (
                                    <Image
                                        className="hover:opacity-75 rounded-sm"
                                        src={i.homepageImage.url}
                                        width={i.homepageImage.width}
                                        height={i.homepageImage.height}
                                        alt={i.title}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
