'use client';
import Image from 'next/image';
import {
    About,
    Segment,
    Image as _Image,
    Text,
    Row as _Row,
    SegmentImage
} from '@/app/_types';
import RichTextParser from '../_components/richTextParser';

export const Row = ({
    row,
    openLightbox
}: {
    row: _Row;
    openLightbox: (val: string) => void;
}) => {
    return (
        <div
            className={`${
                row.width ? 'max-w-[' + row.width + 'px]' : 'w-full'
            } grid gap-8 justify-${row.align}`}
            style={{
                gridTemplateColumns: `repeat(${row.columns}, minmax(0, ${
                    row.width ? row.width / row.columns + 'px' : '1fr'
                }))`
            }}
        >
            {row.segments.map((s: Segment, index: number) => {
                if (s.type === 'image') {
                    let content = s.content as SegmentImage;
                    return (
                        <div key={'segment' + index}>
                            {content.image.width ? (
                                <div className="relative w-fit">
                                    <Image
                                        onClick={() =>
                                            openLightbox(content.image.url)
                                        }
                                        className="hover:opacity-75 rounded-sm cursor-pointer"
                                        key={'image' + index}
                                        alt={content.alt as string}
                                        src={content.image.url}
                                        width={content.image.width}
                                        height={content.image.height}
                                    />
                                    {content.meta && (
                                        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-30 text-white text-center py-2">
                                            {content.meta}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <iframe
                                    src={content.image.url}
                                    width="100%"
                                    height="800px"
                                />
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
