import Link from 'next/link';
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  FileText,
  GitBranch,
  Mail,
  MoveUpRight,
} from 'lucide-react';
import Benchmark from './components/Benchmark';
import { contributions, email, github, skills, updatedOn } from './content';

function RouteDrawing() {
  return (
    <svg
      viewBox="0 0 480 300"
      className="route-drawing"
      aria-labelledby="route-title route-description"
    >
      <title id="route-title">分层规划概念示意</title>
      <desc id="route-description">
        由区域选路、参考路径到运动学规划的三层链路；不是实验地图或实测轨迹。
      </desc>
      <defs>
        <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path
            d="M 24 0 L 0 0 0 24"
            fill="none"
            stroke="#36534e"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="480" height="300" fill="url(#grid)" />
      <g fill="#263d38" stroke="#50665a" strokeWidth="1">
        <rect x="62" y="49" width="96" height="65" rx="2" />
        <rect x="218" y="138" width="64" height="96" rx="2" />
        <rect x="340" y="57" width="76" height="54" rx="2" />
      </g>
      <path
        d="M40 246 L110 246 L183 180 L183 92 L300 92 L300 253 L402 253 L441 204"
        fill="none"
        stroke="#7a9782"
        strokeWidth="24"
        opacity=".12"
        strokeLinejoin="round"
      />
      <path
        d="M40 246 C98 246 111 241 139 212 L165 186 Q183 170 183 146 L183 114 Q183 92 206 92 L278 92 Q300 92 300 114 L300 227 Q300 253 325 253 L382 253 Q402 253 415 237 L441 204"
        fill="none"
        stroke="#d5ed9e"
        strokeWidth="2.5"
      />
      <path
        d="M40 246 L110 246 L183 180 L183 92 L300 92 L300 253 L402 253 L441 204"
        fill="none"
        stroke="#96b49a"
        strokeWidth="1"
        strokeDasharray="4 6"
      />
      <g fill="#d5ed9e">
        <circle cx="40" cy="246" r="5" />
        <circle cx="441" cy="204" r="5" />
      </g>
      <circle
        cx="441"
        cy="204"
        r="12"
        fill="none"
        stroke="#d5ed9e"
        opacity=".5"
      />
      <g fill="#c3d0bc" fontSize="10" fontFamily="monospace">
        <text x="28" y="271">
          START
        </text>
        <text x="425" y="181">
          GOAL
        </text>
        <text x="62" y="36">
          REGION A
        </text>
        <text x="341" y="44">
          REGION B
        </text>
      </g>
      <g transform="translate(300 182)">
        <circle r="18" fill="#d5ed9e" fillOpacity=".12" />
        <rect x="-7" y="-10" width="14" height="20" rx="3" fill="#d5ed9e" />
        <path
          d="M-4 0 L0 5 L4 0"
          fill="none"
          stroke="#17332b"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        跳到主要内容
      </a>
      <header className="site-header shell">
        <a className="brand" href="#top" aria-label="李永祺，返回首页">
          <span className="brand-mark">
            D<span>.</span>
          </span>
          <span>
            YONGQI LI <small>李永祺</small>
          </span>
        </a>
        <nav aria-label="页面导航">
          <a href="#projects">项目</a>
          <a href="#experiments">实验</a>
          <a href="#opensource">开源</a>
          <Link href="/resume/" className="nav-resume">
            简历版 <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </nav>
      </header>
      <main id="main">
        <section className="hero shell" id="top">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> ROBOTICS / PLANNING / SYSTEMS
            </p>
            <p className="hero-name">
              你好，我是李永祺 <span>YongQi Li · Dori</span>
            </p>
            <h1>
              构建机器人系统，
              <br />
              <span>用实验回答问题。</span>
            </h1>
            <p className="hero-intro">
              电子科技大学在读学生。聚焦移动机器人导航、路径规划与工程验证，把算法接入
              ROS 系统，再用固定对照、边界测试和运行记录检验结果。
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="/resume/">
                <FileText size={17} aria-hidden="true" />
                查看简历
              </Link>
              <a className="button secondary" href="#projects">
                探索项目 <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="hero-contact">
              <a href={`mailto:${email}`}>
                <Mail size={15} aria-hidden="true" />
                {email}
              </a>
              <a href={github} target="_blank" rel="noreferrer">
                <GitBranch size={15} aria-hidden="true" />
                Doribelove <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </div>
          </div>
          <aside className="hero-visual">
            <div className="visual-top">
              <span>
                <span className="small-dot" /> CURRENT FOCUS
              </span>
              <span>01 / AUTONOMY</span>
            </div>
            <RouteDrawing />
            <div className="visual-caption">
              <span>区域选路 → 参考路径 → 运动学规划</span>
              <small>分层规划概念示意</small>
            </div>
            <div className="visual-bottom">
              <div>
                <span className="mono">3YD / V5-r11</span>
                <strong>静态规划基线</strong>
              </div>
              <span className="outline-badge">已冻结 · 09.22</span>
            </div>
          </aside>
        </section>

        <div className="fact-strip shell" aria-label="成果概览">
          <a href="#opensource">
            <strong>
              07<span> / PRs</span>
            </strong>
            <p>
              上游已合并贡献 <ArrowUpRight size={15} aria-hidden="true" />
            </p>
          </a>
          <a href="#experiments">
            <strong>30/30</strong>
            <p>
              固定集严格验收通过 <ArrowUpRight size={15} aria-hidden="true" />
            </p>
          </a>
          <a href="#experiments">
            <strong>
              35.2<span>% ↓</span>
            </strong>
            <p>
              查询峰值内存降低 <ArrowUpRight size={15} aria-hidden="true" />
            </p>
          </a>
          <div className="fact-context">
            数字对应具体测试与版本。
            <br />
            下方可查看口径和记录。
            <span className="mono">VERIFIED {updatedOn}</span>
          </div>
        </div>

        <section className="section shell" id="projects">
          <div className="section-heading">
            <div>
              <span className="eyebrow">01 / SELECTED PROJECTS</span>
              <h2>把问题做深，把系统接通。</h2>
            </div>
            <p>
              从分层规划到部署链路，
              <br />
              重点展示可以解释、可以验证的工作。
            </p>
          </div>
          <article className="project-feature">
            <div className="project-index">
              <span className="mono">PROJECT 01</span>
              <span className="badge">静态仿真 · 本地实验</span>
              <div className="layer-diagram" aria-label="分层规划链路">
                <span>
                  <b>L1</b>区域与拓扑
                </span>
                <i>↓</i>
                <span>
                  <b>L2</b>参考路径
                </span>
                <i>↓</i>
                <span>
                  <b>L3</b>运动学规划与终验
                </span>
              </div>
            </div>
            <div className="project-body">
              <p className="kicker">ROS 2 · NAV2 · C++ / PYTHON</p>
              <h3>3YD 分层导航与大地图优化</h3>
              <p>
                在已有 ROS 2
                导航工作区上迭代分层静态规划，连接区域选路、参考路径、代价图同步和
                Smac 规划，并保留碰撞、转向、曲率与交通约束终验。
              </p>
              <ul className="project-points">
                <li>
                  优化原生障碍膨胀队列，分块处理代价转换，减少大地图临时分配。
                </li>
                <li>
                  以有限支持域计算软参考场，保留完整地图的尺寸、原点和最终路径。
                </li>
                <li>
                  固定集、乱序查询与端点扰动对照；以内容 ACK
                  和逐点路径比较核验一致性。
                </li>
              </ul>
              <div className="project-outcome">
                <Check size={17} aria-hidden="true" />
                <span>
                  <b>30/30</b> 固定集 · <b>50/50</b> 乱序 · <b>10/10</b>{' '}
                  端点扰动
                </span>
              </div>
              <div className="project-links">
                <a href="#experiments">
                  查看对照实验 <ArrowDown size={15} aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/Doribelove/pudu_robot_ws"
                  target="_blank"
                  rel="noreferrer"
                >
                  公开工作区 <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
              <p className="scope-note">
                r11
                是本地静态规划基线；公开仓库保留较早快照。动态障碍实机和多地图部署尚未验收。
              </p>
            </div>
          </article>
          <div className="project-pair">
            <article className="project-card">
              <div className="card-top">
                <span className="mono">PROJECT 02</span>
                <span className="badge neutral">部署与测试</span>
              </div>
              <p className="kicker">ROS NOETIC · FAST-LIO · HYBRID A* · TEB</p>
              <h3>Autolabor 双机导航系统</h3>
              <p>
                整合激光惯性定位、覆盖规划与局部控制。将转场搜索接入可取消的异步任务，处理超时、旧结果失效和多版本进程归属。
              </p>
              <div className="small-result">
                <strong>195 + 10</strong>
                <span>工作区测试 + 隔离生命周期测试通过</span>
              </div>
              <p className="scope-note">
                完成 ARM64
                原生构建与部署检查；该优化批次未进行实车运动性能验收。
              </p>
              <a
                className="text-link"
                href="https://github.com/Doribelove/autolabor-robot-nav/blob/main/NAVIGATION_OPTIMIZATION_20260907.md"
                target="_blank"
                rel="noreferrer"
              >
                查看交付记录 <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </article>
            <article className="project-card">
              <div className="card-top">
                <span className="mono">PROJECT 03</span>
                <span className="badge neutral">规划与控制适配</span>
              </div>
              <p className="kicker">C++ · B-SPLINE · MPC · qpOASES</p>
              <h3>EGO-Planner 地面车适配</h3>
              <p>
                将无人机规划链路改造为地面车二维规划与速度控制：采用 B
                样条参考轨迹和 MPC 跟踪，接入点云预处理、前进与倒车逻辑。
              </p>
              <div className="small-result">
                <strong>规划 → 控制</strong>
                <span>二维栅格 · B 样条 · MPC · 底盘速度</span>
              </div>
              <p className="scope-note">
                公开代码实践项目；已知接口和部署问题在仓库中记录。
              </p>
              <a
                className="text-link"
                href="https://github.com/Doribelove/egoplanner_on_ground"
                target="_blank"
                rel="noreferrer"
              >
                查看项目代码 <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </article>
          </div>
        </section>

        <section className="experiment-section" id="experiments">
          <div className="shell experiment-grid">
            <div className="experiment-copy">
              <span className="eyebrow">02 / EXPERIMENT NOTE</span>
              <h2>
                路径保持一致，
                <br />
                开销进一步下降。
              </h2>
              <p>
                3YD-V5-r11 A+B 对比同环境重新运行的 r10。固定 10 组查询各运行 3
                次，全部通过严格验收；最终路径逐点一致。
              </p>
              <div className="experiment-facts">
                <div>
                  <strong>800</strong>
                  <span>组原生代价图等价性用例</span>
                </div>
                <div>
                  <strong>41</strong>
                  <span>项 Python 测试通过</span>
                </div>
              </div>
              <a className="text-link" href="/evidence/3yd-v5-r11.md" download>
                实验摘要与统计口径 <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <p className="scope-note">
                静态单地图实验 · 串行查询 ·
                数值库单线程。查询计时不含一次性世界准备与常驻栈启动，不能解读为整车运行速度提升。
              </p>
            </div>
            <Benchmark />
          </div>
        </section>

        <section className="section shell" id="opensource">
          <div className="section-heading">
            <div>
              <span className="eyebrow">03 / OPEN SOURCE</span>
              <h2>让修复进入上游。</h2>
            </div>
            <p>
              7 个 PR，6 个上游项目。
              <br />
              截至 {updatedOn}，以下均已合并。
            </p>
          </div>
          <div className="contribution-list">
            {contributions.map((item) => (
              <a
                className="contribution"
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                <div className="contribution-project">
                  <span className="merge-dot" />
                  <span>{item.project}</span>
                </div>
                <div className="contribution-copy">
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
                <span className="pr-number mono">#{item.number}</span>
                <span className="merged-label">
                  已合并 <ArrowUpRight size={15} aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
          <div className="ongoing">
            <span className="badge neutral">进行中</span>
            <p>
              Sparse #962 · 稀疏布尔索引支持，已根据审阅意见修订；243
              项专项测试通过，GitHub Numba Array API 检查通过。<b>尚未合并。</b>
            </p>
            <a
              href="https://github.com/pydata/sparse/pull/962"
              target="_blank"
              rel="noreferrer"
              aria-label="查看进行中的 Sparse PR 962"
            >
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="skills-section shell" id="skills">
          <div className="section-heading">
            <div>
              <span className="eyebrow">04 / TOOLKIT</span>
              <h2>能力来自具体实践。</h2>
            </div>
          </div>
          <div className="skills-grid">
            {skills.map((item, i) => (
              <article key={item.title}>
                <span className="mono">0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <small>{item.note}</small>
              </article>
            ))}
          </div>
          <div className="education">
            <div>
              <span className="kicker">EDUCATION</span>
              <h3>
                电子科技大学 <span>UESTC</span>
              </h3>
              <p>在读学生 · 机器人、规划控制与开源软件实践</p>
            </div>
            <div>
              <span className="kicker">COMMUNITY</span>
              <p>
                <a
                  href="https://github.com/orgs/fossasia/people?query=Doribelove"
                  target="_blank"
                  rel="noreferrer"
                >
                  FOSSASIA <ArrowUpRight size={13} aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/orgs/yfosp/people?query=Doribelove"
                  target="_blank"
                  rel="noreferrer"
                >
                  YFOSP <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </p>
              <small>公开 GitHub 组织成员</small>
            </div>
          </div>
        </section>

        <section className="contact shell" id="contact">
          <div>
            <span className="eyebrow">LET’S CONNECT</span>
            <h2>
              一起讨论下一个
              <br />
              机器人问题。
            </h2>
          </div>
          <div>
            <a className="contact-email" href={`mailto:${email}`}>
              {email}
              <MoveUpRight size={24} aria-hidden="true" />
            </a>
            <div className="contact-links">
              <Link href="/resume/">
                简历版 / 打印 <FileText size={15} aria-hidden="true" />
              </Link>
              <a href={github} target="_blank" rel="noreferrer">
                GitHub <GitBranch size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer shell">
        <div>
          <span>© 2026 李永祺 / Dori</span>
          <a href="#top">返回顶部 ↑</a>
        </div>
        <p>
          更新于 {updatedOn}。部分开发、测试与文档使用 AI
          辅助；成果以实验记录及上游合并记录为依据。
        </p>
      </footer>
    </>
  );
}
