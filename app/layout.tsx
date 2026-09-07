import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://doribelove.github.io'),
  title: 'Dori — Robotics & AI Systems',
  description:
    'Dori 的机器人与 AI 系统作品集：SLAM、路径规划、运动控制、视觉感知和真实设备部署。',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Dori — Robotics & AI Systems',
    description: '机器人导航、SLAM、规划控制与 AI 系统工程作品集。',
    type: 'website',
    url: 'https://doribelove.github.io',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
