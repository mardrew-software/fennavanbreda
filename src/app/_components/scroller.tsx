import Link from 'next/link';
import { Item } from '../_types';
import { FullDate } from './fullDate';
import Image from 'next/image';
import { Mali, Roboto_Mono } from 'next/font/google';

const mali = Mali({ weight: ['400'], subsets: ['latin'] });
const robotoMono = Roboto_Mono({ weight: ['400'], subsets: ['latin'] });

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
            <Link
                href={`${slug}`}
                className={`hidden lg:flex hover:no-underline underline text-2xl ${robotoMono.className}`}
            >
                {label.toLocaleLowerCase()}
            </Link>

            <div className="pr-4 scrollbar flex flex-col gap-4 pb-4 lg:pb-8 h-[calc(100vh-176px)] overflow-y-scroll">
                <div className="flex flex-col gap-8">
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
                                <div className="flex flex-col">
                                    <h1 className="text-xl">{i.title}</h1>
                                    <div className="flex flex-row gap-2 flex-wrap">
                                        <FullDate
                                            startDate={i.startDate}
                                            endDate={i.endDate}
                                        />
                                        {i.location &&
                                            (i.startDate || i.endDate) &&
                                            '/'}
                                        <div className="font-bold">
                                            {i.location}
                                        </div>
                                    </div>
                                    <div>
                                        {i.page === 'events' ||
                                            (i.page === 'words' && (
                                                <div>{i.summary}</div>
                                            ))}
                                    </div>
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
        </div>
    );
};
