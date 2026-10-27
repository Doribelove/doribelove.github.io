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
  title: 'YongQi Li · 机器人导航与算法工程',
  description:
    'YongQi Li（Doribelove）的在线简历与项目作品集：机器人导航、机场实车测试、双臂魔方机器人、多模态问答、论文成果及开源贡献。',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'YongQi Li · 机器人导航与算法工程',
    description:
      '机器人导航与算法工程。查看论文、项目图文视频、上游开源贡献与可打印简历。',
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
