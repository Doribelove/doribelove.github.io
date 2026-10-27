import Link from 'next/link';
import {
  ArrowDown,
  ArrowUpRight,
  FileText,
  GitBranch,
  Mail,
  MoveUpRight,
} from 'lucide-react';
import Benchmark from './components/Benchmark';
import FeaturedProjects from './featured';
import { Publications } from './publications';
import {
  contributions,
  contributionsAsOf,
  contributionProjectCount,
  email,
  github,
  skills,
  updatedOn,
} from './content';

function RouteDrawing() {
  return (
    <svg
      viewBox="0 0 480 300"
      className="route-drawing"
      aria-labelledby="route-title route-description"
    >
      <title id="route-title">分层规划概念示意</title>
      <desc id="route-description">
        区域选路、参考路径与运动学规划组成的三层导航链路概念图。
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
          <a href="#publications">论文</a>
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
              ROS
              系统，再用固定对照、边界测试和运行记录检验结果。同时探索多模态检索问答。
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
                <span className="mono">ROBOTICS / RESEARCH</span>
                <strong>导航系统与多模态问答</strong>
              </div>
              <span className="outline-badge">更新 · 10.27</span>
            </div>
          </aside>
        </section>

        <div className="fact-strip shell" aria-label="成果概览">
          <a href="#opensource">
            <strong>
              {String(contributions.length).padStart(2, '0')}
              <span> / PRs</span>
            </strong>
            <p>
              上游已合并贡献 <ArrowUpRight size={15} aria-hidden="true" />
            </p>
          </a>
          <a href="#publications">
            <strong>
              02<span> / PAPERS</span>
            </strong>
            <p>
              会议与期刊论文 <ArrowUpRight size={15} aria-hidden="true" />
            </p>
          </a>
          <Link href="/projects/">
            <strong>
              03<span> / STORIES</span>
            </strong>
            <p>
              近期项目与演示 <ArrowUpRight size={15} aria-hidden="true" />
            </p>
          </Link>
          <div className="fact-context">
            移动机器人导航与运动规划。
            <br />
            多模态检索问答与开源协作。
            <span className="mono">UPDATED {updatedOn}</span>
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
              覆盖算法实现、系统集成与实车应用。
            </p>
          </div>
          <FeaturedProjects />
        </section>

        <Publications />

        <section className="experiment-section" id="experiments">
          <div className="shell experiment-grid">
            <div className="experiment-copy">
              <span className="eyebrow">03 / PLANNING PERFORMANCE</span>
              <h2>
                路径保持一致，
                <br />
                开销进一步下降。
              </h2>
              <p>
                3YD-V5-r11 静态规划性能优化：A+B 对比同环境重新运行的
                r10。固定 10 组查询各运行 3
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
                实验结果与方法 <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <p className="scope-note">
                静态单地图实验 · 串行查询 ·
                数值库单线程。规划栈就绪后统计查询耗时。
              </p>
            </div>
            <Benchmark />
          </div>
        </section>

        <section className="section shell" id="opensource">
          <div className="section-heading">
            <div>
              <span className="eyebrow">04 / OPEN SOURCE</span>
              <h2>让修复进入上游。</h2>
            </div>
            <p>
              {contributions.length} 个 PR，{contributionProjectCount}{' '}
              个上游项目。
              <br />
              截至 {contributionsAsOf}，下列为最近 10 项。
            </p>
          </div>
          <div className="contribution-list">
            {contributions.slice(0, 10).map((item) => (
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
          <p className="scope-note">
            <a
              href="https://github.com/search?q=is%3Apr+is%3Amerged+author%3ADoribelove+-user%3ADoribelove&type=pullrequests"
              target="_blank"
              rel="noreferrer"
            >
              查看全部上游合并记录 ↗
            </a>
            {' · '}
            <a href="/evidence/contributions-20261016.json" download>
              24 项贡献详情（JSON）
            </a>
          </p>
        </section>

        <section className="skills-section shell" id="skills">
          <div className="section-heading">
            <div>
              <span className="eyebrow">05 / TOOLKIT</span>
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
        <p>更新于 {updatedOn}。</p>
      </footer>
    </>
  );
}
