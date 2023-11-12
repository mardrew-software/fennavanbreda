import { getItemsByPage } from '@/app/_api/getItemsByPage';
import { EventBoxes } from '../_components/eventBoxes';
import { GoBack } from '../_components/goBack';

export default async function Page() {
    const items = await getItemsByPage('events');
    return (
        <>
            <div className="flex flex-col gap-8 px-8 pb-16">
                <GoBack slug={'/'} />
                {items && (
                    <EventBoxes items={items} page="events" pageName="events" />
                )}
            </div>
        </>
    );
}
