'use client';
import Image from 'next/image';
import { About, Segment, Image2 as _Image, Text } from '@/app/_types';
import RichTextParser from '../_components/richTextParser';

export const Content = ({ about }: { about: About }) => {
    return (
        <div className="w-full flex flex-wrap gap-6 items-start">
            {about.segments.map((s: Segment, index: number) => {
                let content;
                if (s.type === 'image') {
                    content = s.content as _Image;
                    return (
                        <div>
                            <Image
                                key={index}
                                alt={content.alt as string}
                                src={content.image.url}
                                width={content.image.width}
                                height={content.image.height}
                            />
                        </div>
                    );
                } else {
                    content = s.content as Text;
                    return (
                        <div style={{ maxWidth: `${s.width}px` }}>
                            <RichTextParser html={content.text.html} />
                        </div>
                    );
                }
            })}

            {/* <Link
                className="w-[30px] h-full justify-center items-center"
                target="_blank"
                href={'https://www.instagram.com/fennarafaela/'}
            >
                <Image
                    width={30}
                    height={30}
                    src={'/instagram.png'}
                    alt="instagram"
                />
            </Link> */}
        </div>
    );
};
