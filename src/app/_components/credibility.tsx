import { Patrick_Hand } from 'next/font/google';
import { getCredits } from '../_api/getCredits';
import { Credit } from '../_types';
import { CredibilityRow } from './credibilityRow';

const patrickHand = Patrick_Hand({ weight: ['400'], subsets: ['latin'] });

export const Credibility = async () => {
    const credits = await getCredits();
    return (
        <div
            id="credibility"
            className="flex flex-col items-center gap-6 mt-8 lg:mt-16 px-8 lg:p-0"
        >
            <h1 className={`text-[50px] ${patrickHand.className}`}>
                CREDIBILITY
            </h1>

            <div className="flex flex-col gap-4 lg:w-[70%]">
                <div className="flex flex-col border-solid border-2 border-black shadow-[6px_6px_0px_0px_#ffe280] rounded-sm p-4 lg:p-6 gap-4">
                    <div className="text-2xl pb-2">working experience</div>
                    <div className="flex flex-col w-full gap-4">
                        {credits
                            .filter((c: Credit) => c.type === 'experience')
                            .map((c: Credit) => {
                                return <CredibilityRow key={c.id} credit={c} />;
                            })}
                    </div>
                </div>
                <div className="flex flex-col border-solid border-2 border-black p-8 shadow-[6px_6px_0px_0px_#ffe280] rounded-sm p-6 gap-4">
                    <div className="text-2xl pb-2">education</div>
                    <div className="flex flex-col w-full gap-4">
                        {credits
                            .filter((c: Credit) => c.type === 'education')
                            .map((c: Credit) => {
                                return <CredibilityRow key={c.id} credit={c} />;
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
};
