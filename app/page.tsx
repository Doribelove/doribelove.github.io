import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Cpu,
  Network,
  Radar,
  Route,
  ShieldCheck,
} from 'lucide-react';

const projects = [
  {
    index: '01',
    name: 'Autolabor Robot Navigation',
    label: 'Flagship · Real Robot',
    description:
      '面向真实移动机器人的双机导航系统，将激光惯性定位、覆盖规划、局部避障、视觉感知与安全控制收敛到一套可部署工作流。',
    result: '195 项全局测试 + 10 项隔离生命周期测试',
    tags: ['ROS Noetic', 'FAST-LIO', 'Hybrid A*', 'TEB', 'BPU / FCOS'],
    href: 'https://github.com/Doribelove/autolabor-robot-nav',
    icon: Route,
  },
  {
    index: '02',
    name: 'PUDU Robot Workspace',
    label: 'ROS 2 · Product Workspace',
    description:
      '围绕 PUDU 机器人组织 Nav2、覆盖清扫、行为树和仿真评测，提供可复现的构建、启动与多套导航实验入口。',
    result: 'Nav2 + FAST-LIO / ICP + 全区域覆盖',
    tags: ['ROS 2', 'Nav2', 'Gazebo', 'Coverage', 'Behavior Tree'],
    href: 'https://github.com/Doribelove/pudu_robot_ws',
    icon: Radar,
  },
  {
    index: '03',
    name: 'EGO-Planner on Ground',
    label: 'Planning · Control',
    description:
      '把面向无人机的 EGO-Planner 改造成地面车二维规划链路，以 B 样条生成局部轨迹，并由 MPC 输出底盘速度控制。',
    result: '实时重规划 + 点云避障 + 前进 / 倒车控制',
    tags: ['C++', 'B-Spline', 'MPC', 'qpOASES', 'Point Cloud'],
    href: 'https://github.com/Doribelove/egoplanner_on_ground',
    icon: Network,
  },
  {
    index: '04',
    name: 'AIFS',
    label: 'Systems · C++17',
    description:
      '面向 AI 工作负载的分布式文件系统教学参考实现，覆盖元数据、分块存储、缓存预取、QoS 调度和冷热分层。',
    result: '模块化架构 + Protobuf RPC 接口',
    tags: ['C++17', 'Distributed FS', 'QoS', 'Caching', 'Protobuf'],
    href: 'https://github.com/Doribelove/AIFS',
    icon: Braces,
  },
];

const capabilities = [
  {
    title: '定位与地图',
    text: 'FAST-LIO、已知地图 ICP、SLAM、点云预处理与多传感器坐标链。',
    icon: Radar,
  },
  {
    title: '规划与控制',
    text: 'Nav2、Hybrid A*、TEB、EGO-Planner、覆盖规划、B 样条与 MPC。',
    icon: Route,
  },
  {
    title: '工程与部署',
    text: 'ROS 1/2、C++ / Python、双机生命周期、自动化测试与安全边界。',
    icon: Cpu,
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="返回首页">
          <span className="brand-mark">D</span>
          <span>DORI / SYSTEMS</span>
        </a>
        <nav aria-label="页面导航">
          <a href="#work">项目</a>
          <a href="#capabilities">能力</a>
          <a
            className="nav-github"
            href="https://github.com/Doribelove"
            target="_blank"
            rel="noreferrer"
          >
            <span aria-hidden="true">GH</span>
            GitHub
          </a>
        </nav>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            ROBOTICS · AUTONOMY · AI SYSTEMS
          </div>
          <h1>
            让机器人在真实世界里
            <span>稳定地感知、定位与行动。</span>
          </h1>
          <p className="hero-intro">
            我是 Dori，持续实践移动机器人系统。工作横跨 SLAM、路径规划、运动控制、
            视觉感知与端侧部署，并把算法结果落实为可测试、可恢复、可交付的工程系统。
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#work">
              查看项目
              <ArrowDownRight aria-hidden="true" size={18} />
            </a>
            <a
              className="text-link"
              href="https://github.com/Doribelove"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Doribelove
              <ArrowUpRight aria-hidden="true" size={17} />
            </a>
          </div>
        </div>

        <div className="hero-panel" aria-label="技术方向概览">
          <div className="panel-topline">
            <span>ACTIVE STACK</span>
            <span>2026</span>
          </div>
          <div className="avatar-row">
            <img
              src="https://github.com/Doribelove.png?size=240"
              alt="Dori 的 GitHub 头像"
              width="112"
              height="112"
            />
            <div>
              <strong>DORI</strong>
              <span>Robotics builder</span>
              <span className="availability">
                <i /> Building in public
              </span>
            </div>
          </div>
          <div className="signal-grid" aria-hidden="true">
            <div>
              <span>01</span>
              <b>Sense</b>
            </div>
            <i />
            <div>
              <span>02</span>
              <b>Localize</b>
            </div>
            <i />
            <div>
              <span>03</span>
              <b>Plan</b>
            </div>
            <i />
            <div>
              <span>04</span>
              <b>Act</b>
            </div>
          </div>
          <div className="hero-facts">
            <span>ROS 1 / ROS 2</span>
            <span>C++ / Python</span>
            <span>Real-world validation</span>
          </div>
        </div>
      </section>

      <section className="project-section section-shell" id="work">
        <div className="section-heading">
          <div>
            <span className="section-number">01 / SELECTED WORK</span>
            <h2>
              项目不是 Demo，<br />而是问题的闭环。
            </h2>
          </div>
          <p>
            从算法原型到真实设备，把感知、定位、规划和控制放进同一条可验证链路。
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article className={`project-card project-${project.index}`} key={project.name}>
                <div className="project-card-head">
                  <span>{project.index}</span>
                  <Icon aria-hidden="true" size={22} />
                </div>
                <p className="project-label">{project.label}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-result">
                  <ShieldCheck aria-hidden="true" size={17} />
                  <span>{project.result}</span>
                </div>
                <ul className="tag-list" aria-label={`${project.name} 技术栈`}>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <a
                  className="project-link"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`在 GitHub 查看 ${project.name}`}
                >
                  查看仓库
                  <ArrowUpRight aria-hidden="true" size={18} />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="capability-section section-shell" id="capabilities">
        <div className="section-heading compact">
          <div>
            <span className="section-number">02 / CAPABILITIES</span>
            <h2>系统能力</h2>
          </div>
          <p>以真实运行结果为目标，向下处理算法细节，向上保证系统交付。</p>
        </div>
        <div className="capability-grid">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <article key={item.title}>
                <div className="capability-index">0{index + 1}</div>
                <Icon aria-hidden="true" size={25} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="closing section-shell">
        <span className="section-number">03 / SOURCE</span>
        <div>
          <h2>
            代码、文档与演进记录，<br />都在 GitHub。
          </h2>
          <a
            href="https://github.com/Doribelove?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            浏览全部公开项目
            <ArrowUpRight aria-hidden="true" size={22} />
          </a>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <span>© {new Date().getFullYear()} Dori</span>
        <span>Built around real systems.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
