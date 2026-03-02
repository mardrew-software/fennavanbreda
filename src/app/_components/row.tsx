'use client';
import { useState } from 'react';
import Image from 'next/image';
import {
    Segment,
    Image as _Image,
    Text,
    Row as _Row,
    SegmentImage
} from '@/app/_types';
import RichTextParser from '../_components/richTextParser';
import Link from 'next/link';

export const Row = ({
    row,
    openLightbox
}: {
    row: _Row;
    openLightbox: (val: string) => void;
}) => {
    const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});

    const handleLoad = (id: string) => {
        setLoadedImages((prev) => ({ ...prev, [id]: true }));
    };

    if (row.width == 400) row.width = 401;

    return (
        <div
            className={`${row.width ? 'max-w-[' + row.width + 'px]' : 'w-full'
                } flex flex-col lg:grid gap-8 justify-${row.align}`}
            style={{
                gridTemplateColumns: `repeat(${row.columns}, minmax(0, ${row.width ? row.width / row.columns + 'px' : '1fr'
                    }))`
            }}
        >
            {row.segments.map((s: Segment, index: number) => {
                if (s.type === 'image') {
                    let content = s.content as SegmentImage;
                    const imageId = `img-${index}-${content.image.url}`;
                    const isLoaded = loadedImages[imageId];

                    return (
                        <div key={'segment' + index}>
                            {content.image.width ? (
                                <div className="relative w-fit overflow-hidden">
                                    {!isLoaded && (
                                        <div className="absolute inset-0 z-10 bg-gray-200 animate-pulse rounded-sm" />
                                    )}

                                    <Image
                                        onClick={() => openLightbox(content.image.url)}
                                        className={`hover:opacity-75 rounded-sm cursor-pointer transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'
                                            }`}
                                        key={'image' + index}
                                        alt={content.alt as string}
                                        src={content.image.url}
                                        width={content.image.width}
                                        height={content.image.height}
                                        onLoad={() => handleLoad(imageId)}
                                    />

                                    {content.meta && isLoaded && (
                                        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-30 text-white text-center py-2">
                                            {content.meta}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <>
                                    <iframe
                                        className={`hidden lg:inline h-[800px]`}
                                        src={content.image.url}
                                        width="100%"
                                    />
                                    <Link
                                        className="hover:opacity-75 flex items-align gap-2 lg:hidden justify-center underline cursor-pointer hover:text-blue-800 bg-gray-100 rounded-sm p-4"
                                        href={content.image.url}
                                        target="_blank"
                                    >
                                        <Image
                                            className="w-[24px] h-[24px]"
                                            alt="download"
                                            src={'/download.png'}
                                            width={20}
                                            height={5}
                                        />
                                        Download {content.meta ?? 'pdf'}
                                    </Link>
                                </>
                            )}
                        </div>
                    );
                } else {
                    let content = s.content as Text;
                    return (
                        <div key={'segment' + index}>
                            <RichTextParser html={content.text.html} />
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default Row;