'use client';
import { Element, Text as TextDom } from 'domhandler';
import { DOMNode, HTMLReactParserOptions } from 'html-react-parser';
import React from 'react';
import YouTubePlayer from 'react-player/youtube';
import SoundCloudPlayer from 'react-player/soundcloud';
import VimeoPlayer from 'react-player/vimeo';

const Player = ({ url }: { url: string }) => (
    <>
        {url.includes('youtube') && (
            <div className="relative pt-[56.25%]">
                <YouTubePlayer
                    url={url}
                    className="absolute top-0 left-0"
                    width="100%"
                    height="100%"
                    controls={true}
                />
            </div>
        )}
        {url.includes('soundcloud') && (
            <div className="relative mb-[150px]">
                <SoundCloudPlayer
                    url={url}
                    className="absolute top-0 left-0"
                    width="100%"
                    height="auto"
                    controls={true}
                />
            </div>
        )}
        {url.includes('vimeo') && (
            <div className="relative pt-[56.25%]">
                <VimeoPlayer
                    url={url}
                    className="absolute top-0 left-0"
                    width="100%"
                    height="100%"
                    controls={true}
                />
            </div>
        )}
    </>
);

const LinkTag = ({
    className,
    data,
    href
}: {
    className?: string;
    data: string;
    href: string;
}) => {
    return (
        <a
            onClick={(e) => {
                e.stopPropagation();
            }}
            className={`${
                className ? className : ''
            } bg-white font-[500] TextDom-black hover:TextDom-slate-400 underline cursor-pointer`}
            href={href}
            target="_blank"
        >
            {data}
        </a>
    );
};

const handleSpans = (nodeChild: DOMNode) => {
    if (nodeChild.type === 'tag' && 'children' in nodeChild) {
        const text = nodeChild.children[0] as TextDom;
        if (text?.data) {
            return (
                <LinkTag
                    className="w-fit py-1"
                    key={text.data}
                    data={text.data}
                    href={nodeChild.attribs.href}
                />
            );
        }
    } else if (nodeChild.type === 'text' && 'data' in nodeChild) {
        return (
            <span className="py-1 w-fit" key={nodeChild.data}>
                {nodeChild.data}
            </span>
        );
    }
};

export const options: HTMLReactParserOptions = {
    replace: (domNode: DOMNode) => {
        const node = domNode as Element;
        if (node.name === 'a') {
            const text = node.children[0] as TextDom;
            return (
                <LinkTag
                    key={node.attribs.title}
                    data={text.data}
                    href={node.attribs.href}
                />
            );
        } else if (node.name === 'iframe') {
            return <Player key={node.attribs.title} url={node.attribs.title} />;
        } else if (node.name === 'p') {
            if (node.children.length > 1) {
                return (
                    <p key={node.attribs.title} className="inline">
                        {node.children.map((c, i) => handleSpans(c as DOMNode))}
                    </p>
                );
            } else {
                const text = node.children[0] as TextDom;
                if (node.children[0]) {
                    return (
                        <p key={node.attribs.title}>
                            <span className="py-1 w-fit">{text.data}</span>
                        </p>
                    );
                }
            }
        }
    }
};
