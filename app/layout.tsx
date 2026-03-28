import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'KAVAX | Sınırları Zorla',
  description: 'Sıradanlığı reddet. Kavax ile potansiyelini serbest bırak.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="tr" className={`${inter.variable} dark`}>
      <body className="bg-[#030008] text-white font-sans antialiased min-h-screen selection:bg-purple-600 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
