import Image from 'next/image';
export const Ball = ({
    label,
    doAction
}: {
    label: string;
    doAction: () => void;
}) => {
    return (
        <div className="flex flex-row justify-center gap-4 p-4">
            <Image alt="active ball" src={'/ball.png'} width={20} height={20} />
            {label}
            <Image
                alt="incative ball"
                src={'/ball_white.png'}
                width={20}
                height={20}
            />
        </div>
    );
};
