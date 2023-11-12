import { getAbout } from '@/app/_api/getAbout';
import { GoBack } from '../_components/goBack';
import { Content } from './content';

export default async function Page() {
    const about = await getAbout();
    return (
        <>
            <div className="flex flex-col gap-8 px-8 pb-16">
                <GoBack slug={'/'} />
                {about && <Content about={about} />}
            </div>
        </>
    );
}
