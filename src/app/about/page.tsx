import { getAbout } from '@/app/_api/getAbout';
import { Rows } from '../_components/rows';

export default async function Page() {
    const about = await getAbout();
    return <>{about.rows && <Rows rows={about.rows} />}</>;
}
