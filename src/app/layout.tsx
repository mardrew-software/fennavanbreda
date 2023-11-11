import './globals.css';
import type { Metadata } from 'next';
import { Inclusive_Sans, Mali } from 'next/font/google';
import { Header } from './_components/header';

const mali = Mali({ weight: ['400'], subsets: ['latin'] });
const inclusiveSans = Inclusive_Sans({ weight: ['400'], subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'fennavanbreda',
    description: 'by mardrew.software'
};

export default async function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`min-h-screen flex flex-col ${mali.className}`}>
                <Header />
                <main className={`w-full ${inclusiveSans.className}`}>
                    {children}
                </main>
            </body>
        </html>
    );
}
