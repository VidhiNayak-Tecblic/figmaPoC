import { Metadata } from 'next';
import { SITE } from '~/config.js';
import Providers from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
import Footer from '~/components/widgets/Footer';
// import { ThemeModeScript } from 'flowbite-react';

import { Inter as CustomFont } from 'next/font/google';
import '~/assets/styles/base.css';

const customFont = CustomFont({ subsets: ['latin'], variable: '--font-custom' });

export interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`motion-safe:scroll-smooth 2xl:text-[24px] ${customFont.variable} font-sans`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* <ThemeModeScript /> */}
      </head>
      <body className="bg-white tracking-tight  antialiased  dark:text-black-300">{children}</body>
    </html>
  );
}
