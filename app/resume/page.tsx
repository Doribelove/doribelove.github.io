import Link from 'next/link';
import type { Metadata } from 'next';
import PrintButton from '../components/PrintButton';
import {
  contributions,
  contributionProjectCount,
  email,
  github,
  updatedOn,
} from '../content';
import { publications } from '../publications';

export const metadata: Metadata = {
  title: '李永祺 · 机器人导航与算法工程简历',
  alternates: { canonical: '/resume/' },
};

export default function Resume() {
  return (
    <main className="resume-shell">
      <div className="resume-tools">
        <Link href="/">← 返回个人主页</Link>
        <PrintButton />
      </div>
      <article className="resume-paper">
        <header className="resume-header">
          <div>
            <h1>
              李永祺 <span>YongQi Li</span>
            </h1>
            <p>机器人导航 · 路径规划 · 多模态检索问答</p>
          </div>
          <div>
            <a href={`mailto:${email}`}>{email}</a>
            <a href={github}>github.com/Doribelove</a>
            <a href="https://doribelove.github.io/">doribelove.github.io</a>
          </div>
        </header>
        <section>
          <h2>教育与方向</h2>
          <p>
            <b>电子科技大学（UESTC）｜在读学生</b>
          </p>
          <p>
            围绕移动机器人开展 ROS
            系统集成、分层规划、性能优化与回归验证，同时开展多模态问答实践，并向科学计算和机器人开源项目贡献修复。
          </p>
        </section>
        <section>
          <h2>论文成果</h2>
          {publications.map((paper) => (
            <div className="resume-publication" key={paper.id}>
              <h3>
                <a href={paper.links[0].href}>{paper.title}</a>
              </h3>
              <p>
                <b>{paper.role}</b> · {paper.status}
              </p>
              <p className="resume-note">{paper.authors}</p>
              <p className="resume-note">
                {paper.links.map((link, index) => (
                  <span key={link.href}>
                    {index > 0 && ' · '}
                    <a href={link.href}>{link.name} ↗</a>
                  </span>
                ))}
              </p>
            </div>
          ))}
        </section>
        <section>
          <h2>项目经历</h2>
          <div className="resume-project">
            <h3>
              <a href="https://doribelove.github.io/projects/#pudu">
                普渡 · 分层导航与运动规划
              </a>{' '}
              <span>ROS 2 / Nav2 / C++ / Python</span>
            </h3>
            <ul>
              <li>
                连接 L1/L2/L3 分层规划与任务地图同步，保留真实
                ACK、运动学约束和严格终验，整理可追溯实验与分布统计图。
              </li>
              <li>
                V11-r3 十图、300 次首次请求：
                <b>297 次精确成功 + 3 次授权容差成功</b>；请求耗时中位{' '}
                <b>0.816 s</b>、P95 <b>3.657 s</b>，整进程树 RSS 峰值中位{' '}
                <b>990.39 MiB</b>。
              </li>
            </ul>
            <p className="resume-note">
              静态规划与指定受控事件回放，不作为实车验收；计时从地图/服务就绪后的请求开始，不含加载与初始化。
              <a href="https://github.com/Doribelove/pudu_robot_ws">
                源码与验证记录 ↗︎
              </a>
            </p>
          </div>
          <div className="resume-project">
            <h3>
              <a href="https://doribelove.github.io/projects/#autolabor">
                净途智行 · 地平线挑战杯实车项目
              </a>{' '}
              <span>ROS Noetic / FAST-LIO / Hybrid A* / TEB</span>
            </h3>
            <ul>
              <li>
                在 J6M + Jetson 双机平台集成 FAST-LIO / ICP 或双天线
                GNSS、条带覆盖、Hybrid A* / TEB、YOLO11s-GAM 与语音 / Qt
                任务交互。
              </li>
              <li>
                机场场景记录 <b>160 m² / 98.0% 导航覆盖</b>
                ；另有装配清扫机构后的刷扫收集实车视频。图文和视频附于在线作品集，导航覆盖与清扫验证分开记录。
              </li>
            </ul>
          </div>
          <div className="resume-project">
            <h3>
              <a href="https://doribelove.github.io/projects/#huawei">
                华为存储杯 · 多模态检索问答
              </a>{' '}
              <span>Qwen3-VL / BGE-M3 / Python</span>
            </h3>
            <ul>
              <li>
                构建 PDF
                文本、表格、图像的混合检索、重排、来源绑定与支持检查流程，以本地
                Qwen3-VL-8B 完成可追溯回答与拒答，适配赛事建库和 HTTP 查询接口。
              </li>
              <li>
                公开 r58 已提交源码与真实案例；历史开发 30 题本地同模型判分{' '}
                <b>26/30</b>，同作者原文完全支持审阅 <b>25/30</b>
                ，非官方或独立评测成绩。
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2>
            已合并的开源贡献{' '}
            <span>
              {contributions.length} 个 PR · {contributionProjectCount}{' '}
              个上游项目，以下精选 6 项
            </span>
          </h2>
          <div className="resume-contributions">
            {contributions
              .filter((item) =>
                [706, 669, 224, 957, 2422, 4726].includes(item.number),
              )
              .map((item) => (
                <p key={item.href}>
                  <b>{item.project}</b>
                  <span>{item.title}</span>
                  <a href={item.href}>#{item.number} ↗︎</a>
                </p>
              ))}
          </div>
          <p className="resume-note">
            <a href="https://doribelove.github.io/#opensource">
              最新贡献与全部合并记录 ↗
            </a>
          </p>
        </section>
        <section>
          <h2>技术能力与社区</h2>
          <p>
            <b>语言与工程：</b>C++、Python、Linux、Git、pytest、ROS 1 /
            2、CI、性能剖析、Transformers、多模态 RAG。
          </p>
          <p>
            <b>机器人：</b>FAST-LIO、ICP、TF、Nav2、Hybrid A*、TEB、覆盖规划、B
            样条与 MPC。
          </p>
          <p>
            <b>开源社区：</b>FOSSASIA、YFOSP 公开 GitHub 组织成员。
          </p>
        </section>
        <footer className="resume-footer">
          核验日期：{updatedOn} · 部分开发与文档使用 AI 辅助 ·
          详细项目、实验口径与合并记录：doribelove.github.io
        </footer>
      </article>
      <p className="print-help">
        点击“打印 / 保存 PDF”，在浏览器打印窗口中选择“另存为 PDF”。建议 A4
        纸张，并关闭页眉和页脚。
      </p>
    </main>
  );
}
