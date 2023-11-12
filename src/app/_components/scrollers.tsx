import { useState } from 'react';
import { Item } from '../_types';
import { Scroller } from './scroller';

export const Scrollers = ({ items }: { items: Item[] }) => {
    const [index, setIndex] = useState(0);
    return (
        <>
            <div className="hidden lg:flex overflow-hidden max-h-[calc(100vh-96px)] px-8 w-full flex-row justify-between gap-16">
                <Scroller
                    slug="events"
                    label="Events"
                    items={items.filter((i: Item) => i.page === 'events')}
                />
                <Scroller
                    slug="selectedworks"
                    label="Selected works"
                    items={items.filter(
                        (i: Item) => i.page === 'selectedworks'
                    )}
                />
                <Scroller
                    slug="words"
                    label="Words"
                    items={items.filter((i: Item) => i.page === 'words')}
                />
                <Scroller
                    slug="archive"
                    label="Archive"
                    items={items.filter((i: Item) => i.page === 'archive')}
                />
            </div>
            <div className="flex lg:hidden px-8 w-full">
                {index == 0 && (
                    <Scroller
                        slug="events"
                        label="Events"
                        items={items.filter((i: Item) => i.page === 'events')}
                    />
                )}
                {index == 1 && (
                    <Scroller
                        slug="selectedworks"
                        label="Selected works"
                        items={items.filter(
                            (i: Item) => i.page === 'selectedworks'
                        )}
                    />
                )}
                {index == 2 && (
                    <Scroller
                        slug="words"
                        label="Words"
                        items={items.filter((i: Item) => i.page === 'words')}
                    />
                )}
                {index == 3 && (
                    <Scroller
                        slug="archive"
                        label="Archive"
                        items={items.filter((i: Item) => i.page === 'archive')}
                    />
                )}
            </div>
        </>
    );
};
