import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

export const metadata = {
    title: 'Evenly',
    description: 'Smart, Simple and Secure',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className}`}>
                <Header />
                <main className="min-h-screen">{children}</main>
            </body>
        </html>
    );
}
