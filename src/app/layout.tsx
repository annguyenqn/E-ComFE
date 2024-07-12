import RootProvider from '@/components/provider/rootProvider';
import { cn } from '@/lib/utils';
import { Karla as FontKarla, Poppins as FontPoppins } from 'next/font/google';
import '../styles/globals.css';

const fontKarla = FontKarla({
  subsets: ['latin'],
  variable: '--font-karla',
  weight: ['400', '500']
});

const fontPoppins = FontPoppins({
  subsets: ['latin'],
  variable: '--font-poppins',
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
        className={cn(
          'min-h-screen bg-background font-poppins antialiased',
          fontPoppins.variable,
          fontKarla.variable
        )}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
