'use client';
import { Antic_Didone } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GoBack } from './goBack';

const anticDidone = Antic_Didone({ weight: ['400'], subsets: ['latin'] });

export function Header() {
    const pathname = usePathname();

    return (
        <div className={`flex flex-col`}>
            <div className={`grid grid-cols-3 w-full p-4 items-center`}>
                <div>
                    <div className={`${pathname == '/' ? 'hidden' : ''}`}>
                        <GoBack />
                    </div>
                </div>
                <Link href={'/'} className="flex justify-center">
                    <span
                        className={`${anticDidone.className} tracking-widest text-4xl hover:text-blue-800`}
                    >
                        Fenna van Breda
                    </span>
                </Link>
                <div className="flex gap-2 items-center justify-end px-[1rem]">
                    <Link href={'/about'}>
                        <h2
                            className={`${
                                pathname.includes('about')
                                    ? 'text-blue-800'
                                    : ''
                            } hover:text-blue-800 underline font-bold uppercase`}
                        >
                            about
                        </h2>
                    </Link>
                </div>
            </div>
        </div>
    );
}
