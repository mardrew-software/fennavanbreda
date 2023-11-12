'use client';
import { Element, Text } from 'domhandler';
import { DOMNode, HTMLReactParserOptions } from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/image';
import ReactPlayer from 'react-player';

export const options: HTMLReactParserOptions = {
    replace(domNode: DOMNode) {
        const node = domNode as Element;
        if (node.name === 'a') {
            const text = node.children[0] as Text;
            return (
                <Link
                    target="_blank"
                    className="text-slate-500 underline hover:text-[#E9B9BD]"
                    href={node.attribs.href}
                >
                    {text.data}
                </Link>
            );
        } else if (node.name === 'img') {
            return (
                <Image
                    className="rounded-sm"
                    alt={node.attribs.title}
                    src={node.attribs.src}
                    width={parseInt(node.attribs.width)}
                    height={parseInt(node.attribs.height)}
                />
            );
        } else if (node.name === 'iframe') {
            return (
                <div className="relative w-[100%] h-[260px] sm:h-[360px] lg:h-[480px]">
                    <ReactPlayer
                        className="absolute top-0 left-0"
                        url={node.attribs.title}
                        width="100%"
                        height="100%"
                    />
                </div>
            );
        }
    }
};
