/** Core Imports */
import { UstadLayout } from '@shared/index';

/** Component Import s*/
import ChatBotEmbed from './components/ChatBotEmbed';

/** Style Imports */
import './globals.scss';

/** TODO(@Janberk): Metadata */
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
        <UstadLayout params={{ lang: 'en-us', theme: 'light' }}>
          {children}
          <ChatBotEmbed />
        </UstadLayout>
      </body>
    </html>
  );
}
