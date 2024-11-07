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

export const Row = ({ row }: { row: _Row }) => {
    return (
        <div
            className={`${
                row.width ? 'max-w-[' + row.width + 'px]' : 'w-full'
            } grid gap-4 justify-${row.align}`}
            style={{
                gridTemplateColumns: `repeat(${row.columns}, minmax(0, ${
                    row.width ? row.width / row.columns + 'px' : '1fr'
                }))`
            }}
        >
            {row.segments.map((s: Segment, index: number) => {
                let content;
                if (s.type === 'image') {
                    content = s.content as SegmentImage;
                    return (
                        <div key={'segment' + index}>
                            {content.image.width ? (
                                <Image
                                    key={index}
                                    alt={content.alt as string}
                                    src={content.image.url}
                                    width={content.image.width}
                                    height={content.image.height}
                                />
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
                    content = s.content as Text;
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
