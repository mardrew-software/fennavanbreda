import Link from 'next/link';
import Image from 'next/image';

export const GoBack = ({ slug }: { slug: string }) => {
    return (
        <>
            <Link
                href={slug}
                className={`cursor-pointer flex gap-2 items-center text-xl`}
            >
                <Image
                    alt="arrow back"
                    src={'/back.png'}
                    width={40}
                    height={20}
                />
                <span>go back</span>
            </Link>
        </>
    );
};
