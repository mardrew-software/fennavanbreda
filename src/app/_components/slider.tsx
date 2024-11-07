import { Gamja_Flower } from 'next/font/google';
import Image from 'next/image';

const ganjaFlower = Gamja_Flower({ weight: ['400'], subsets: ['latin'] });

export const Slider = ({
    label,
    slide
}: {
    label: string;
    slide: (up: boolean) => void;
}) => {
    return (
        <div className="w-full flex flex-row justify-between gap-4 pt-2 pb-4">
            <Image
                className="max-h-[22px] cursor-pointer"
                onClick={() => slide(false)}
                alt="left arrow"
                src={'/back.png'}
                width={40}
                height={20}
            />
            <h2 className={`text-2xl uppercase ${ganjaFlower.className}`}>
                {label}
            </h2>
            <Image
                onClick={() => slide(true)}
                className="max-h-[22px] cursor-pointer transform rotate-180"
                alt="right arrow"
                src={'/back.png'}
                width={40}
                height={20}
            />
        </div>
    );
};
