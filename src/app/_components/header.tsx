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
            <div className={`grid grid-cols-12 w-full p-4 items-center`}>
                <div className="lg:inline lg:col-span-2 hidden">
                    <div className={`${pathname == '/' ? 'hidden' : ''}`}>
                        <GoBack />
                    </div>
                </div>
                <Link href={'/'} className="flex justify-center col-span-8">
                    <span
                        className={`${anticDidone.className} tracking-widest text-2xl lg:text-4xl hover:text-blue-800`}
                    >
                        Fenna van Breda
                    </span>
                </Link>
                <div className="flex gap-2 items-center justify-end px-[1rem] col-span-4 lg:col-span-2">
                    <Link href={'/about'}>
                        <h2
                            className={`${
                                pathname.includes('about')
                                    ? 'text-blue-800'
                                    : ''
                            } hover:text-blue-800 underline text-md tracking-wider uppercase`}
                        >
                            about
                        </h2>
                    </Link>
                </div>
            </div>
        </div>
    );
}
/* <Link
                className="w-[30px] h-full justify-center items-center"
                target="_blank"
                href={'https://www.instagram.com/fennarafaela/'}
            >
                <Image
                    width={30}
                    height={30}
                    src={'/instagram.png'}
                    alt="instagram"
                />
            </Link> */
