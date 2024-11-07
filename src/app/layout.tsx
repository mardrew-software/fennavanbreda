import './globals.css';
import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import { Header } from './_components/header';

const workSans = Work_Sans({ weight: ['400'], subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'fenna van breda',
    description:
        'I am Fenna R. van Breda (2002) a Rotterdam based artist. I work interdisciplinary and consider my work equally guided by subject as well as material.',
    authors: [
        { url: 'https://mardrew.software', name: 'Mariana Martins' },
        { name: 'Fenna van Breda' }
    ],
    robots: { index: true, follow: true },
    keywords: [
        'Fenna van Breda',
        'Fenna Breda',
        'Willem de Kooning Academie',
        'fennavanbreda.com',
        'fennavanbreda',
        'art',
        'portfolio',
        'rotterdam based artist',
        'rotterdam artist',
        'dutch artist',
        'material artist',
        'plants fenna'
    ]
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
