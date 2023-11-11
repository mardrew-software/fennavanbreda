'use client';
import { Image as ProjectImage } from '@/app/_types';
import Image from 'next/image';
import { Video } from '@/app/_components/video';

export const Media = ({
    image,
    title
}: {
    image: ProjectImage;
    title: string;
}) => {
    return (
        <>
            {image.mimeType.includes('video') ? (
                <Video video={image} />
            ) : (
                <Image
                    className="lg:max-w-[40%]"
                    alt={title}
                    src={image.url}
                    width={image.width}
                    height={image.height}
                />
            )}
        </>
    );
};
