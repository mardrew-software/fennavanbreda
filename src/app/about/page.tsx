import { getAbout } from '@/app/_api/getAbout';
import { GoBack } from '../_components/goBack';
import { Content } from './content';

export default async function Page() {
    const about = await getAbout();

    return (
        <>
            <div className="flex flex-col gap-4 px-4 py-4 max-w-screen">
                {about && <Content about={about} />}
            </div>
        </>
    );
}
