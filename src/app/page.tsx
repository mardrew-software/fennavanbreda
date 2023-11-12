import { getItems } from './_api/getItems';
import { Scroller } from './_components/scroller';
import { Item } from './_types';

export default async function Home() {
    const items = await getItems();
    return (
        <>
            <div className="overflow-hidden max-h-[calc(100vh-96px)] px-8 w-full flex flex-row justify-between gap-16">
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
        </>
    );
}
