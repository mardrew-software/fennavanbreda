import { getItemsByPage } from '@/app/_api/getItemsByPage';

export default async function Page() {
    const items = await getItemsByPage('words');
    console.log(items);
    return <>{items && items.length}</>;
}
