import { ArrowUpRight } from 'lucide-react';

export const publications = [
  {
    id: 'sderi',
    title:
      'SDERI: Autonomous Navigation with Safe Subgoal Distributions and Exploration-Replanning Index in Dynamic Environments',
    authors:
      'Jingru Zhang, Mingzhu Wei, Yongqi Li, Zhenni Zeng, Min Gong, Hui Li',
    status: 'IROS 2026 · 论文编号 775',
    role: '学生二作 · 总作者序第 3',
    summary:
      '面向拥挤动态环境的分层自主导航：将子目标分布限制在与全局可达性一致的安全区域内，并以探索–重规划指数（ERI）联合调节采样分布与重规划时机。通过 Arena-3D 多场景实验与消融分析验证框架，项目页提供完整演示及实机部署视频。',
    links: [
      {
        name: '官方论文入口',
        href: 'https://2026.ieee-iros.org/program/contributed_talks/#eeb7f7:775',
      },
      {
        name: '官方索引',
        href: 'https://2026.ieee-iros.org/program/paper-index/?q=SDERI',
      },
      {
        name: '项目与演示视频',
        href: 'https://sites.google.com/view/sderifornavigation',
      },
    ],
  },
  {
    id: 'airport-path-planning',
    title: '通航机场动态环境下无人车路径规划方法',
    authors: '李永祺，魏明珠（通讯作者），曾珍妮，张景茹，李辉，龚敏，董巾航',
    status: '《系统工程与电子技术》· 已录用，待发表（预计 2026 年 11 月）',
    role: '第一作者',
    summary:
      '融合改进 Hybrid A*、Reeds-Shepp 曲线、加入加加速度约束的 TEB 局部规划与 PID 跟踪校正，在 ROS move_base 框架下完成分层路径规划。Autolabor M2 实物实验中，相比 A* + TEB，避障成功率由 70% 提升至 90%，线速度标准差降低约 38%（每组 10 次实验）。',
    links: [
      {
        name: '作者稿 PDF',
        href: '/papers/ssee-2026-1172-author-manuscript.pdf',
      },
      {
        name: '论文首页',
        href: '/papers/ssee-2026-1172-first-page.jpg',
      },
    ],
  },
];

export function Publications() {
  return (
    <section
      className="publication-section shell section"
      id="publications"
      aria-labelledby="publications-title"
    >
      <div className="section-heading">
        <div>
          <p className="kicker">RESEARCH / 研究成果</p>
          <h2 id="publications-title">从导航方法到实车验证</h2>
        </div>
        <p>动态环境下的安全规划、轨迹平滑与分层导航。</p>
      </div>
      <div className="publication-grid">
        {publications.map((publication) => (
          <article className="publication-card" key={publication.id}>
            <p className="publication-status">{publication.status}</p>
            <p className="publication-role">{publication.role}</p>
            <h3>{publication.title}</h3>
            <p className="publication-authors">{publication.authors}</p>
            <p className="publication-summary">{publication.summary}</p>
            <div className="project-links">
              {publication.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.name}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
