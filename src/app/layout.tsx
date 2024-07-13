import RootProvider from '@/components/provider/rootProvider';
import { cn } from '@/lib/utils';
import { Mulish as FontMulish } from 'next/font/google';
import '../styles/globals.css';

const fontMulish = FontMulish({
  subsets: ['vietnamese'],
  variable: '--font-mulish',
  weight: ['400', '500']
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn('min-h-screen bg-background font-mulish antialiased', fontMulish.variable)}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
