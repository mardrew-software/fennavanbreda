'use client';
import { SetStateAction, useEffect, useRef, useState } from 'react';
import { Item } from '../_types';
import { Scroller } from './scroller';
import { Slider } from './slider';

const indexes = ['selected works', 'events', 'words', 'archive'];
const slugs = indexes.map((i) => i.toLocaleLowerCase().replaceAll(' ', ''));

export const Scrollers = ({ items }: { items: Item[] }) => {
    const [currIndex, setCurrIndex] = useState(0);
    const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const updateIndex = (up: boolean) => {
        if (up) {
            setCurrIndex(currIndex == indexes.length - 1 ? 0 : currIndex + 1);
        } else {
            setCurrIndex(currIndex == 0 ? indexes.length - 1 : currIndex - 1);
        }
    };

    const minSwipeDistance = 50;
    const onTouchStart = (e: any) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };
    const onTouchMove = (e: any) => setTouchEnd(e.targetTouches[0].clientX);
    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) updateIndex(false);
        if (isRightSwipe) updateIndex(true);
    };

    return (
        <>
            <div
                className={`hidden lg:flex px-4 w-full flex-row ${
                    hoveredColumn === null ? 'justify-between' : ''
                } gap-4`}
            >
                {indexes.map((index: string, n: number) => {
                    return (
                        <Scroller
                            onMouseEnter={() => setHoveredColumn(n)}
                            onMouseLeave={() => setHoveredColumn(null)}
                            key={n}
                            slug={slugs[n]}
                            label={index}
                            items={items.filter(
                                (i: Item) => i.page === slugs[n]
                            )}
                            className={`transition-all duration-300 ${
                                hoveredColumn === null
                                    ? 'w-1/4'
                                    : hoveredColumn === n
                                    ? 'w-1/2'
                                    : 'w-1/6'
                            }`}
                        />
                    );
                })}
            </div>
            <div
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                className="flex flex-col pb-8 lg:hidden px-8 w-full"
            >
                <Slider label={indexes[currIndex]} slide={updateIndex} />
                {indexes.map((index: string, n: number) => {
                    return (
                        <div key={n} className="flex flex-col w-full">
                            {currIndex == n && (
                                <Scroller
                                    slug={slugs[n]}
                                    label={index}
                                    items={items.filter(
                                        (i: Item) => i.page === slugs[n]
                                    )}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </>
    );
};
