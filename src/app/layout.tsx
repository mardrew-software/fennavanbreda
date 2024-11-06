import './globals.css';
import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import { Header } from './_components/header';

const workSans = Work_Sans({ weight: ['400'], subsets: ['latin'] });

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
            <body className={`min-h-screen flex flex-col`}>
                <Header />
                <main className={`w-full ${workSans.className}`}>
                    {children}
                </main>
            </body>
        </html>
    );
}
