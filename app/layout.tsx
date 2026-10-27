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
    '李永祺（Doribelove）的在线简历与项目作品集：电子科技大学、IROS 2026 论文、机器人导航、华为存储杯多模态问答、地平线挑战杯实车项目及开源贡献。',
  alternates: { canonical: '/' },
  openGraph: {
    title: '李永祺 YongQi Li · 机器人导航与算法工程',
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
