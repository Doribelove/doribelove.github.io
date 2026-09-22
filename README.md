# 李永祺 · 机器人导航与算法工程

**直接打开网页简历：[https://doribelove.github.io/](https://doribelove.github.io/)**

- [简历版 / 打印或保存为 PDF](https://doribelove.github.io/resume/)
- [GitHub 个人资料](https://github.com/Doribelove)
- [3YD-V5-r11 本地静态实验摘要](https://doribelove.github.io/evidence/3yd-v5-r11.md)

这是一份中文在线简历与项目作品集，包括机器人项目、实验对照、已合并开源贡献、技术能力和联系方式。内容核验于 2026-09-22；实验条件与尚未合并的贡献在页面中单独注明。

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
- `app/page.tsx`：项目介绍及主页结构。
- `app/components/Benchmark.tsx`：实验对照图，数字需同时更新实验摘要。
- `app/resume/page.tsx`：适合打印的简历版。
- `public/evidence/3yd-v5-r11.md`：经过核验的汇总指标与实验条件。

新增贡献必须核实上游合并状态；本地通过、审阅批准和正式合并分别记录。部分代码、测试及文档使用 AI 辅助，成果以实际记录为依据。
