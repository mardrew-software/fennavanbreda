'use client';
import { Row as _Row } from '@/app/_types';
import Row from './row';

export const Rows = ({ rows }: { rows: _Row[] }) => {
    return (
        <div className="flex flex-col w-full gap-8 px-4 pt-4 pb-8">
            {rows.map((r: _Row, index: number) => {
                return <Row row={r} key={'row' + index} />;
            })}
        </div>
    );
};
