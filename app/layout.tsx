import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poiins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Evently',
  description: 'Evently はイベント管理のためのプラットフォームです。',
  icons: {
    icon: '/assets/images/logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poiins.variable}>{children}</body>
    </html>
  );
}
