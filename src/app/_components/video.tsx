'use client';
import { Image } from '../_types';
import ReactPlayer from 'react-player';

export const Video = ({ video }: { video: Image }) => {
    return (
        <ReactPlayer
            width={video.width}
            height={video.height}
            config={{ file: { forceVideo: true } }}
            className="h-full lg:overflow-auto"
            url={video.url}
        />
    );
};
