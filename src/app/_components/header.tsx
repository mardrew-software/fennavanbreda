'use client';
import { Roboto_Mono } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const robotoMono = Roboto_Mono({ weight: ['400'], subsets: ['latin'] });

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className={`flex flex-col`}>
            <div className="flex flex-row w-full p-8 items-center justify-between">
                <Link href={'/'}>
                    <span className="text-2xl hover:text-slate-600">
                        fenna van breda
                    </span>
                </Link>
                <Image
                    className="cursor-pointer"
                    onClick={() => setMenuOpen(true)}
                    alt="menu"
                    width={30}
                    height={30}
                    src={'/burger.png'}
                />
            </div>
            {menuOpen && (
                <div className="h-full w-[100%] sm:w-[50%] md:w-[40%] lg:w-[30%] p-8 right-0 top-0 fixed z-10 bg-black p-8">
                    <div className="flex flex-col items-end h-full justify-between">
                        <div className="flex flex-row justify-between w-full">
                            <Link
                                className="w-[30px] h-full"
                                target="_blank"
                                href={'https://www.instagram.com/fennarafaela/'}
                            >
                                <Image
                                    className="w-full h-auto"
                                    onClick={() => setMenuOpen(true)}
                                    width={30}
                                    height={30}
                                    src={'/instagram.png'}
                                    alt="instagram"
                                />
                            </Link>
                            <Image
                                className="w-[30px] h-auto cursor-pointer"
                                onClick={() => setMenuOpen(false)}
                                alt="menu"
                                width={30}
                                height={30}
                                src={'/close.png'}
                            />
                        </div>

                        <div
                            className={`${robotoMono.className} flex flex-col gap-1 text-right text-2xl`}
                        >
                            <Link
                                onClick={() => setMenuOpen(false)}
                                className="text-white hover:underline"
                                href={'/events'}
                            >
                                events
                            </Link>
                            <Link
                                onClick={() => setMenuOpen(false)}
                                className="text-white  hover:underline"
                                href={'/selectedworks'}
                            >
                                selected works
                            </Link>
                            <Link
                                onClick={() => setMenuOpen(false)}
                                className="text-white  hover:underline"
                                href={'/words'}
                            >
                                words
                            </Link>
                            <Link
                                onClick={() => setMenuOpen(false)}
                                className="text-white  hover:underline"
                                href={'/archive'}
                            >
                                archive
                            </Link>
                            <Link
                                onClick={() => setMenuOpen(false)}
                                className="text-white hover:underline"
                                href={'/about'}
                            >
                                about
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
