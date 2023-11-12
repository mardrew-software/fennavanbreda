import { getItemByTitle } from '@/app/_api/getItemByTitle';
import { Item } from '@/app/_components/item';

export default async function Page({ params }: { params: { slug: string } }) {
    const item = await getItemByTitle(params?.slug[0]);
    return <>{item && <Item item={item} />}</>;
}
