import { getItemsByPage } from '@/app/_api/getItemsByPage';
import { Item } from '../_types';
import Link from 'next/link';
import Image from 'next/image';
import { FullDate } from '../_components/fullDate';
import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({ weight: ['400'], subsets: ['latin'] });

export default async function Page() {
    const items = await getItemsByPage('words');
    return (
        <>
            {items && (
                <div className="flex flex-col w-full items-center">
                    <div className={`text-2xl mb-8 ${robotoMono.className}`}>
                        words
                    </div>
                    <div className="flex flex-col gap-8 lg:max-w-[60%]">
                        {items.map((i: Item) => {
                            return (
                                <Link
                                    href={`/words/${i.urlPath}`}
                                    className="flex flex-row gap-8 border-solid border-2 p-8 rounded-sm"
                                >
                                    {i.mainImage && (
                                        <Image
                                            className="rounded-sm max-w-[40%]"
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
                </div>
            )}
        </>
    );
}
