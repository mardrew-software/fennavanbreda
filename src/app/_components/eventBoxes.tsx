import { Item } from '../_types';
import Link from 'next/link';
import Image from 'next/image';
import { FullDate } from './fullDate';
import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({ weight: ['400'], subsets: ['latin'] });

export const EventBpxes = ({
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
                {items.map((i: Item) => {
                    return (
                        <Link
                            href={`/${page}/${i.urlPath}`}
                            className="flex flex-row gap-4"
                        >
                            {i.mainImage && (
                                <Image
                                    className="rounded-sm max-h-[70px] max-w-[70px] md:max-h-[100px] md:max-w-[100px]"
                                    src={i.mainImage.url}
                                    width={i.mainImage.width}
                                    height={i.mainImage.height}
                                    alt={i.title}
                                />
                            )}
                            <div className="flex flex-col gap-1 border-l-2 border-slate-400 pl-4">
                                <h1 className="text-xl">{i.title}</h1>
                                <FullDate
                                    startDate={i.startDate}
                                    endDate={i.endDate}
                                />
                                <p className="text-sm">{i.location}</p>
                                <p>{i.summary}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
