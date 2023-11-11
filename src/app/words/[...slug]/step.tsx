'use client';
import parse from 'html-react-parser';
import { ProjectStep } from '@/app/_types';
import { Media } from './media';
import { ReactNode, useEffect, useState } from 'react';
import { options } from '@/app/_utils/parsedText';

export const Step = ({ s }: { s: ProjectStep }) => {
    const [parsedText, setParsedText] = useState<ReactNode>('');

    useEffect(() => {
        setParsedText(parse(s.description.html, options));
    }, []);
    return (
        <div
            className={`flex flex-col gap-8 border-solid border-2 border-black p-8 shadow-[6px_6px_0px_0px_#ffe280] rounded-sm`}
        >
            <div className={`underline underline-offset-8 text-xl`}>
                {s.title}
            </div>
            <div className="text-justify flex flex-col items-start justify-center lg:flex-row gap-8">
                {!s.imageOnRight && s.image && (
                    <Media image={s.image} title={s.title} />
                )}

                {s.description && (
                    <div className="flex flex-col gap-2">{parsedText}</div>
                )}
                {s.imageOnRight && s.image && (
                    <Media image={s.image} title={s.title} />
                )}
            </div>
        </div>
    );
};
