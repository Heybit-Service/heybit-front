import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/registry';
import { ReactQueryProvider } from '@/lib/react-query-provider';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Heybit',
  description:
    '헤이빗과 함께 유예 타이머와 살까말까 투표, 소비 리포트를 통해 불필요한 충동구매를 절제해 보세요.',
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ReactQueryProvider>
          <StyledComponentsRegistry>
            <div className="min-h-screen flex justify-center bg-gray-100">
              <div className="w-full md:max-w-[430px] bg-white relative md:shadow-xl">
                {children}
              </div>
            </div>
            <div id="popup-root" />
          </StyledComponentsRegistry>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
