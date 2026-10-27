import Link from 'next/link';
import type { Metadata } from 'next';
import PrintButton from '../components/PrintButton';
import {
  contributions,
  contributionProjectCount,
  representativeContributions,
  email,
  github,
  updatedOn,
} from '../content';
import { publications } from '../publications';

export const metadata: Metadata = {
  title: 'YongQi Li · 机器人导航与算法工程简历',
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
              YongQi Li <span>Dori</span>
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
          <h2>核心完整项目</h2>
          <div className="resume-project">
            <h3>
              <a href="https://doribelove.github.io/projects/#pudu">
                普渡 · 分层导航与运动规划
              </a>{' '}
              <span>ROS 2 / Nav2 / C++ / Python</span>
            </h3>
            <ul>
              <li>
                集成 L1/L2/L3 分层规划、任务地图同步与运动学约束检查，完成路径终验、性能统计及可视化。
              </li>
              <li>
                V11-r3 十图静态规划测试，300 次首次请求：
                <b>297 次精确到达 + 3 次容差到达</b>；请求耗时中位{' '}
                <b>0.816 s</b>、P95 <b>3.657 s</b>，整进程树 RSS 峰值中位{' '}
                <b>990.39 MiB</b>。
              </li>
            </ul>
            <p className="resume-note">
              请求耗时从地图与服务就绪后的导航请求开始统计。
              <a href="https://github.com/Doribelove/pudu_robot_ws">
                源码与实验结果 ↗︎
              </a>
            </p>
          </div>
          <div className="resume-project">
            <h3>
              <a href="https://doribelove.github.io/projects/#autolabor">
                净途智行 · 国产无人清扫车系统
              </a>{' '}
              <span>项目负责人 / 地平线挑战杯 / J6M + AGX</span>
            </h3>
            <ul>
              <li>
                基于 J6M + AGX 集成 FAST-LIO / GNSS、Hybrid A* / TEB、三路环视与 BEV 映射，完成定位、感知、规划和清扫控制。
              </li>
              <li>
                接入 Qwen 8B 任务分解与 Qt 交互，演示场景语义导航和工厂、停车场、商场覆盖规划。
              </li>
              <li>
                机场导航覆盖 <b>160 m² / 98.0%</b>；机坪与滑行道四时段测试取得 <b>24 次回收成功、12 次避障成功</b>，展示实车视频与数据回放。
              </li>
            </ul>
          </div>
          <div className="resume-project">
            <h3>
              <a href="https://doribelove.github.io/projects/#cube">魔方机器人 · 双臂视觉复原</a>{' '}
              <span>Python / OpenCV / Two-Phase / ODrive / Arduino</span>
            </h3>
            <ul>
              <li>实现四路视觉六面识别、Two-Phase 求解、机械代价动作优化与双臂夹爪协同，<b>7 秒完成识别、解算和还原</b>。</li>
              <li>获 <b>2024 年第七届中国高校智能机器人创意大赛国家级二等奖</b>，总排名 <b>9/55</b>。</li>
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
                发布 r58 源码与问答案例；30 题本地评测中，同模型判分{' '}
                <b>26/30</b>，作者审阅原文完全支持 <b>25/30</b>。
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2>
            已合并的开源贡献{' '}
            <span>
              {contributions.length} 个 PR · {contributionProjectCount}{' '}
              个上游项目，以下精选 {representativeContributions.length} 项
            </span>
          </h2>
          <div className="resume-contributions">
            {representativeContributions.map((item) => (
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
          更新日期：{updatedOn} · 项目展示与开源贡献：doribelove.github.io
        </footer>
      </article>
      <p className="print-help">
        点击“打印 / 保存 PDF”，在浏览器打印窗口中选择“另存为 PDF”。建议 A4
        纸张，并关闭页眉和页脚。
      </p>
    </main>
  );
}
