import Link from 'next/link';
import Image from 'next/image';

export const GoBack = () => {
    return (
        <>
            <Link
                href={'/'}
                className={`cursor-pointer flex gap-2 items-center text-xl`}
            >
                <Image
                    alt="arrow back"
                    src={'/back.png'}
                    width={40}
                    height={20}
                />
            </Link>
        </>
    );
};
