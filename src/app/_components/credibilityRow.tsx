'use client';
import parse from 'html-react-parser';
import { Credit } from '../_types';
import Image from 'next/image';

import { DateTag } from './dateTag';
import { ReactNode, useEffect, useState } from 'react';
import { options } from '../_utils/parsedText';

export const CredibilityRow = ({ credit }: { credit: Credit }) => {
    const [parsedText, setParsedText] = useState<ReactNode>('');

    useEffect(() => {
        setParsedText(parse(credit.description.html, options));
    }, []);
    return (
        <div className="flex flex-row gap-4">
            <Image
                className="w-auto h-auto max-h-[70px] max-w-[70px] py-1"
                src={credit.image.url}
                width={credit.image.width}
                height={credit.image.height}
                alt={credit.title}
            />
            <div className="flex flex-col">
                <span>
                    {credit.endDate && credit.startDate && (
                        <>
                            <DateTag date={credit.endDate} />
                            {' - '}
                            <DateTag date={credit.startDate} />
                        </>
                    )}
                    {!credit.endDate && credit.startDate && (
                        <>
                            <DateTag date={credit.startDate} />
                            {' - now'}
                        </>
                    )}
                    {credit.endDate && !credit.startDate && (
                        <DateTag date={credit.endDate} />
                    )}
                </span>
                <div className="font-bold text-xl">{credit.title}</div>
                <div className="flex flex-col gap-2">{parsedText}</div>
            </div>
        </div>
    );
};
