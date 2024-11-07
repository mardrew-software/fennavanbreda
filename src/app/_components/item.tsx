'use client';
import { Gamja_Flower, Mali } from 'next/font/google';
import { Item as ItemType } from '@/app/_types';
import { FullDate } from './fullDate';
import { Rows } from './rows';

const ganjaFlower = Gamja_Flower({ weight: ['400'], subsets: ['latin'] });

export const Item = ({ item }: { item: ItemType }) => {
    return (
        <div className="w-full flex flex-col items-center px-4">
            {item.title && (
                <div className="flex flex-col items-center gap-1 w-full">
                    <div
                        className={`uppercase text-2xl ${ganjaFlower.className}`}
                    >
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
            {item.rows && <Rows rows={item.rows} />}
        </div>
    );
};
