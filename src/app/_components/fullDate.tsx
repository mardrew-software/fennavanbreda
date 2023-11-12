const DateTag = ({ date }: { date: string }) => {
    const newDate = new Date(date);
    return (
        <>
            {newDate && (
                <span className="font-bold">
                    {`${newDate.toLocaleString('default', {
                        month: 'long'
                    })} ${newDate.getFullYear()}`}
                </span>
            )}
        </>
    );
};

export const FullDate = ({
    startDate,
    endDate
}: {
    startDate: string;
    endDate: string;
}) => {
    return (
        <>
            {startDate && endDate && (
                <span>
                    <DateTag date={startDate} />
                    {' - '}
                    <DateTag date={endDate} />
                </span>
            )}
            {startDate && !endDate && (
                <span className="font-bold">
                    <DateTag date={startDate} />
                    {' - now'}
                </span>
            )}
            {!startDate && endDate && <DateTag date={endDate} />}
        </>
    );
};
