/** Core Imports */
import { UstadLayout } from '@shared/index';

/** Component Import s*/
import ChatBotEmbed from './components/ChatBotEmbed';

/** Style Imports */
import './globals.scss';

/** TODO(@Janberk): Metadata */
export const metadata = {
  title: 'Yesil Defter Portal | Anasayfa',
  description: 'Yesil Defter Portal.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <UstadLayout params={{ lang: 'en-US', theme: 'light' }}>
          {children}
          <ChatBotEmbed />
        </UstadLayout>
      </body>
    </html>
  );
}
