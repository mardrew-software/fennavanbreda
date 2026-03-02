'use client';
import { Element, Text as TextDom } from 'domhandler';
import { DOMNode, domToReact, HTMLReactParserOptions } from 'html-react-parser';
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
            className={`${className ? className : ''
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
                    key={node.attribs?.href || Math.random()}
                    data={text?.data || ''}
                    href={node.attribs?.href}
                />
            );
        }

        if (node.name === 'iframe') {
            return <Player key={node.attribs.title} url={node.attribs.title} />;
        }

        if (node.name === 'p') {
            // Check if paragraph is empty to avoid rendering empty tags
            if (!node.children || node.children.length === 0) return <br />;

            return (
                <p key={Math.random()} className="flex flex-wrap gap-1">
                    {/* This ensures nested tags like <strong> aren't deleted */}
                    {domToReact(node.children as DOMNode[], options)}
                </p>
            );
        }
    }
};