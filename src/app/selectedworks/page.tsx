import { getItemsByPage } from '@/app/_api/getItemsByPage';
import { ItemBoxes } from '../_components/itemBoxes';
import { GoBack } from '../_components/goBack';

export default async function Page() {
    const items = await getItemsByPage('selectedworks');
    return (
        <>
            <div className="flex flex-col gap-8 px-8 pb-16">
                <GoBack slug={'/'} />
                {items && (
                    <ItemBoxes
                        items={items}
                        page="selectedworks"
                        pageName="selected works"
                    />
                )}
            </div>
        </>
    );
}
