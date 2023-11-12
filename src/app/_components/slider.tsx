import Image from 'next/image';
export const Slider = ({
    label,
    slide
}: {
    label: string;
    slide: (up: boolean) => void;
}) => {
    return (
        <div className="w-full flex flex-row justify-between gap-4 pt-2 pb-8">
            <Image
                className="max-h-[22px] cursor-pointer"
                onClick={() => slide(false)}
                alt="left arrow"
                src={'/back.png'}
                width={40}
                height={20}
            />
            <span className="underline text-2xl">{label}</span>
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
