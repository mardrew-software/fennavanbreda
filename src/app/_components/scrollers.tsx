'use client';
import { useEffect, useRef, useState } from 'react';
import { Item } from '../_types';
import { Scroller } from './scroller';
import { Slider } from './slider';

const indexes = ['selected works', 'events', 'words', 'archive'];
const slugs = indexes.map((i) => i.toLocaleLowerCase().replaceAll(' ', ''));

export const Scrollers = ({ items }: { items: Item[] }) => {
    const [currIndex, setCurrIndex] = useState(0);
    const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);
    const [isSwiping, setIsSwiping] = useState(false);

    const updateIndex = (up: boolean) => {
        if (up) {
            setCurrIndex(currIndex == indexes.length - 1 ? 0 : currIndex + 1);
        } else {
            setCurrIndex(currIndex == 0 ? indexes.length - 1 : currIndex - 1);
        }
    };

    useEffect(() => {
        let startX = 0;
        let startY = 0;

        const handleTouchStart = (e: TouchEvent) => {
            if (isSwiping) return;
            const touchStart = e.touches[0];
            startX = touchStart.clientX;
            startY = touchStart.clientY;
            setIsSwiping(true);
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!isSwiping) return;
            const touchMove = e.touches[0];
            const diffX = touchMove.clientX - startX;
            const diffY = touchMove.clientY - startY;

            if (Math.abs(diffX) > Math.abs(diffY)) {
                if (diffX > 0) {
                    updateIndex(true);
                } else {
                    updateIndex(false);
                }
            }
            setIsSwiping(false);
        };

        const handleTouchEnd = () => {
            setIsSwiping(false);
        };

        document.addEventListener('touchstart', handleTouchStart);
        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleTouchEnd);
        return () => {
            document.removeEventListener('touchstart', handleTouchStart);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, [isSwiping]);

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
            <div className="flex flex-col pb-8 lg:hidden px-8 w-full">
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
