import './globals.scss';
import { UstadLayout } from '@shared/index';

export const metadata = {
  title: 'Yesil Defter Homepage',
  description: 'Your destination to drivers licence itself.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body>
        <UstadLayout params={{ lang: 'en-US', theme: 'light' }}>
          {children}
        </UstadLayout>
      </body>
    </html>
  );
}
