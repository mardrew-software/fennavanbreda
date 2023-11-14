import { Item } from '../_types';
import Link from 'next/link';
import Image from 'next/image';
import { FullDate } from './fullDate';
import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({ weight: ['400'], subsets: ['latin'] });

export const ItemBoxes = ({
    page,
    pageName,
    items
}: {
    page: string;
    pageName: string;
    items: Item[];
}) => {
    return (
        <div className="flex flex-col w-full items-center">
            <div className={`text-2xl mb-8 ${robotoMono.className}`}>
                {pageName}
            </div>
            <div className="flex flex-col gap-8 lg:max-w-[60%]">
                {items.map((i: Item, n) => {
                    return (
                        <Link
                            key={'item' + n}
                            href={`/${page}/${i.urlPath}`}
                            className="w-full flex flex-col lg:flex-row rounded-sm border-solid border-black border-2"
                        >
                            {i.mainImage && (
                                <Image
                                    className="lg:h-[300px] w-auto"
                                    src={i.mainImage.url}
                                    width={i.mainImage.width}
                                    height={i.mainImage.height}
                                    alt={i.title}
                                />
                            )}
                            <div className="w-full flex flex-col p-4 lg:p-8 gap-1">
                                <h1 className="text-xl">{i.title}</h1>
                                <FullDate
                                    startDate={i.startDate}
                                    endDate={i.endDate}
                                />
                                <p className="text-sm">{i.location}</p>
                                <p className="flex">{i.summary}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
