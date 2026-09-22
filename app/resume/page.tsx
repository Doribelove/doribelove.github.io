import Link from 'next/link';
import type { Metadata } from 'next';
import PrintButton from '../components/PrintButton';
import { contributions, email, github, updatedOn } from '../content';

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
            <p>机器人导航 · 路径规划 · 系统工程</p>
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
            系统集成、分层规划、性能优化与回归验证，并持续向科学计算和机器人开源项目贡献修复。
          </p>
        </section>
        <section>
          <h2>项目经历</h2>
          <div className="resume-project">
            <h3>
              3YD 分层导航与大地图优化 <span>ROS 2 / Nav2 / C++ / Python</span>
            </h3>
            <ul>
              <li>
                连接区域选路、参考路径与 Smac
                规划；优化原生膨胀队列、分块代价转换和有限支持域计算，保留内容
                ACK 与严格路径终验。
              </li>
              <li>
                r11 A+B 相比同环境 r10：查询峰值 RSS{' '}
                <b>3.779 → 2.451 GiB（−35.2%）</b>；总体耗时中位{' '}
                <b>1.418 → 1.178 s（−17.0%）</b>。
              </li>
              <li>
                固定集 <b>30/30</b>、乱序 <b>50/50</b>、端点扰动 <b>10/10</b>{' '}
                通过，路径逐点一致；800 组原生等价性用例、41 项 Python
                测试通过。
              </li>
            </ul>
            <p className="resume-note">
              本地静态单地图实验；计时不含一次性准备与常驻栈启动。动态实机及多地图部署未验收。
              <a href="https://doribelove.github.io/evidence/3yd-v5-r11.md">
                实验摘要 ↗︎
              </a>
            </p>
          </div>
          <div className="resume-project">
            <h3>
              Autolabor 双机导航系统{' '}
              <span>ROS Noetic / FAST-LIO / Hybrid A* / TEB</span>
            </h3>
            <ul>
              <li>
                整合定位、覆盖规划与控制；采用可取消的异步转场任务，处理截止时间、旧结果失效、运行版本隔离和进程生命周期。
              </li>
              <li>
                <b>195 项工作区测试、10 项隔离生命周期测试通过</b>；完成 ARM64
                原生构建与部署检查，该优化批次未进行实车运动性能验收。
              </li>
            </ul>
          </div>
          <div className="resume-project">
            <h3>
              EGO-Planner 地面车适配 <span>C++ / B 样条 / MPC / qpOASES</span>
            </h3>
            <ul>
              <li>
                将无人机执行链路适配为二维地面车规划，通过 MPC 跟踪 B
                样条轨迹并输出底盘速度，接入点云预处理与前进/倒车逻辑；公开记录接口及部署问题。
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2>
            已合并的开源贡献 <span>7 个 PR · 6 个上游项目</span>
          </h2>
          <div className="resume-contributions">
            {contributions.map((item) => (
              <p key={item.href}>
                <b>{item.project}</b>
                <span>{item.title}</span>
                <a href={item.href}>#{item.number} ↗︎</a>
              </p>
            ))}
          </div>
        </section>
        <section>
          <h2>技术能力与社区</h2>
          <p>
            <b>语言与工程：</b>C++、Python、Linux、Git、pytest、ROS 1 /
            2、CI、性能剖析。
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
