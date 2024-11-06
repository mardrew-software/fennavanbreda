'use client';
import parse from 'html-react-parser';
import { options } from '../_utils/getHtmlParseOptions';
import { ReactNode, useEffect, useState } from 'react';

const RichTextParser = ({
    html,
    className,
    setLoading
}: {
    html: string;
    className?: string;
    setLoading?: (val: boolean) => void;
}) => {
    const [parsedText, setParsedText] = useState<ReactNode>('');

    useEffect(() => {
        if (typeof html === 'string') {
            setParsedText(parse(html, options));
        } else {
            console.error("The 'html' prop must be a string");
            setParsedText(null);
        }
        if (setLoading) setLoading(true);
    }, []);

    return (
        <div className={`${className ? className : ''} flex flex-col gap-4`}>
            {parsedText}
        </div>
    );
};

export default RichTextParser;
