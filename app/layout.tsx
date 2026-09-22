import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://doribelove.github.io'),
  title: '李永祺 YongQi Li · 机器人导航与算法工程',
  description:
    '李永祺（Doribelove）的在线简历与项目记录：电子科技大学、机器人分层导航、ROS 系统集成、可核验实验及已合并开源贡献。',
  alternates: { canonical: '/' },
  openGraph: {
    title: '李永祺 YongQi Li · 机器人导航与算法工程',
    description:
      '机器人导航与算法工程。查看项目、实验对照、已合并开源贡献与可打印简历。',
    type: 'website',
    url: 'https://doribelove.github.io',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
