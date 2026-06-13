import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fury - Arabic Manga Reading Homepage',
  description:
    'Explore and read Arabic manga, manhwa, and anime with a sleek RTL dark-themed interface featuring latest releases, genre filters, and community rankings.',
  robots: 'noindex, nofollow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        style={{
          fontFamily: "'Cairo', 'Cairo Play', sans-serif",
          minHeight: '100vh',
          background: 'var(--background)',
          overflowX: 'hidden',
        }}
      >
        {children}
      </body>
    </html>
  );
}
