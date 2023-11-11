import Link from 'next/link';
import { Item } from '../_types';
import { FullDate } from './fullDate';
import Image from 'next/image';
import { Mali } from 'next/font/google';

const mali = Mali({ weight: ['400'], subsets: ['latin'] });

export const Scroller = ({
    slug,
    label,
    items
}: {
    slug: string;
    label: string;
    items: Item[];
}) => {
    return (
        <div className="flex flex-col gap-8 w-full h-full">
            <div className={`text-2xl ${mali.className}`}>
                {label.toLocaleLowerCase()}
            </div>

            <div className="h-full flex flex-col gap-8 overflow-y-scroll">
                {items.map((i: Item) => {
                    return (
                        <Link
                            href={`/${slug}/${i.urlPath}`}
                            className="flex flex-col gap-2"
                        >
                            {i.mainImage && (
                                <Image
                                    className="rounded-sm"
                                    src={i.mainImage.url}
                                    width={i.mainImage.width}
                                    height={i.mainImage.height}
                                    alt={i.title}
                                />
                            )}
                            <div className="flex flex-col gap-1">
                                <h1 className="text-xl">{i.title}</h1>
                                <FullDate
                                    startDate={i.startDate}
                                    endDate={i.endDate}
                                />
                                <p>{i.summary}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
            <Link
                href={`/${slug}`}
                className={`text-md underline ${mali.className}`}
            >
                see all {label.toLowerCase()}
            </Link>
        </div>
    );
};
