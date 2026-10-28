# YongQi Li · 机器人导航与算法工程

**直接打开网页简历：[https://doribelove.github.io/](https://doribelove.github.io/)**

- [简历版 / 打印或保存为 PDF](https://doribelove.github.io/resume/)
- [项目图文与视频](https://doribelove.github.io/projects/)
- [论文与作者稿下载](https://doribelove.github.io/#publications)
- [GitHub 个人资料](https://github.com/Doribelove)
- [3YD-V5-r11 本地静态实验摘要](https://doribelove.github.io/evidence/3yd-v5-r11.md)

这是一份中文在线简历与项目作品集，包括两篇论文、五项核心完整项目、机场实车测试、无人机自主作业、双臂魔方演示、规划性能对照、26 项上游已合并贡献、技术能力和联系方式。内容更新于 2026-10-28，开源贡献统计截至 2026-10-27，覆盖 11 个上游开源项目。

## 如何查看

网页发布在 **doribelove.github.io**。GitHub 仓库页面用于查看源代码。

手机或电脑都可以直接打开网站地址。需要文件版时，进入“简历版”，点击“打印 / 保存 PDF”，选择“另存为 PDF”。建议使用 A4，关闭打印页眉和页脚。

## 本地预览

需要 Node.js 22.13 或更新版本。

```bash
npm ci
npm run dev
```

打开终端提示的本地地址。

## 检查与发布

```bash
npm run lint
npx tsc --noEmit
npm run build
```

网站以静态文件输出到 `dist/client`。推送到 `main` 后，`.github/workflows/deploy-pages.yml` 自动构建并部署至 GitHub Pages。

## 内容维护

- `app/content.ts`：联系方式、已合并贡献和技术能力。
- `app/page.tsx`：主页结构与历史实验。
- `app/featured.tsx`、`app/projects/page.tsx`：核心完整项目、图文和演示。
- `app/autolabor-demos.tsx`：净途智行的语义导航与多场景覆盖视频。
- `app/airport-demos.tsx`：2026 年 10 月机场回收、避障实车视频与同步数据回放。
- `app/cube-project.tsx`：双臂魔方机器人、竞赛成果与完整演示视频。
- `app/drone-project.tsx`：多旋翼飞行平台、自主抓取与无人机视觉导航演示。
- `app/publications.tsx`：论文题目、完整作者、角色、状态与链接。
- `public/papers/`：期刊作者稿及首页。
- `public/media/`：来自项目仓库与挑战杯材料的精选媒体。
- `public/evidence/contributions-20261027.json`：26 项上游已合并 PR 的贡献详情。
- `app/components/Benchmark.tsx`：实验对照图，数字需同时更新实验摘要。
- `app/resume/page.tsx`：适合打印的简历版。
- `public/evidence/3yd-v5-r11.md`：经过核验的汇总指标与实验条件。

新增贡献时同步更新 PR 链接、合并日期与贡献统计。
