'use client';
import { Row as _Row, SegmentImage } from '@/app/_types';
import Row from './row';
import useLightbox from '../_hooks/useLightbox';
import { useState } from 'react';

export const Rows = ({ rows }: { rows: _Row[] }) => {
    const { openLightbox, renderLightbox } = useLightbox();
    const [slide, setSlide] = useState(0);
    let mappedImages: {
        src: string;
        alt: string;
        title: string;
        description: string;
    }[] = [];
    rows.map((r) =>
        r.segments.map((s) => {
            let image = s.content as SegmentImage;
            if (image.image && image.image.width) {
                mappedImages.push({
                    src: image.image.url,
                    alt: image.alt ?? '',
                    title: '',
                    description: image.meta ?? ''
                });
            }
        })
    );
    const setImageToLighbox = (val: string) => {
        setSlide(mappedImages.findIndex((m) => m.src === val));
        openLightbox();
    };

    return (
        <div className="flex flex-col w-full gap-8 px-4 pt-4 pb-8">
            {rows.map((r: _Row, index: number) => {
                return (
                    <Row
                        row={r}
                        key={'row' + index}
                        openLightbox={setImageToLighbox}
                    />
                );
            })}
            {renderLightbox({ slides: mappedImages, index: slide })}
        </div>
    );
};
