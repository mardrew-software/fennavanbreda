import { getItems } from './_api/getItems';
import { Scrollers } from './_components/scrollers';

export default async function Home() {
    const items = await getItems();
    return <Scrollers items={items} />;
}
