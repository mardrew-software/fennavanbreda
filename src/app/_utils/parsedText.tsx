'use client';
import { Element, Text } from 'domhandler';
import { DOMNode, HTMLReactParserOptions } from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/image';
import { Video } from '../_components/video';

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
                    alt={node.attribs.title}
                    src={node.attribs.src}
                    width={parseInt(node.attribs.width)}
                    height={parseInt(node.attribs.height)}
                />
            );
        } else if (node.name === 'video') {
            return (
                <>
                    {node.attribs.id && (
                        <Video
                            video={{
                                id: node.attribs.id,
                                url: node.attribs.src,
                                width: parseInt(node.attribs.width),
                                height: parseInt(node.attribs.height),
                                mimeType: node.attribs.mimeType
                            }}
                        />
                    )}
                </>
            );
        }
    }
};
