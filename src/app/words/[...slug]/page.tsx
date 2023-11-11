import { getProject } from '@/app/_api/getProject';
import { Project } from './project';

export default async function Page({ params }: { params: { slug: string } }) {
    const project = await getProject(params?.slug[0]);
    return <>{project && <Project project={project} />}</>;
}
