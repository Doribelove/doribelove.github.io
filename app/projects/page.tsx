import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '项目图文与演示 · 李永祺',
  description:
    '普渡分层规划、净途智行地平线挑战杯实车实践和华为存储杯多模态问答的图文、视频与源码。',
  alternates: { canonical: '/projects/' },
};

const photoSizes: Record<string, [number, number]> = {
  '/media/autolabor-airport.jpg': [1260, 692],
  '/media/autolabor-console.jpg': [1724, 921],
  '/media/autolabor-coverage.jpg': [1800, 944],
  '/media/autolabor-demo-poster.jpg': [960, 540],
  '/media/autolabor-hardware.jpg': [1600, 1067],
  '/media/autolabor-robot.jpg': [1600, 1067],
  '/media/huawei-http-log.png': [1400, 1160],
  '/media/huawei-pipeline.png': [1400, 780],
  '/media/pudu-overview.png': [2210, 1615],
};

function Photo({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  const [width, height] = photoSizes[src];
  return (
    <figure className="work-photo">
      <a href={src} target="_blank" rel="noreferrer">
        <Image
          unoptimized
          width={width}
          height={height}
          src={src}
          alt={alt}
          loading="lazy"
        />
      </a>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function Projects() {
  return (
    <>
      <header className="site-header shell">
        <Link className="brand" href="/">
          ← 李永祺 / YongQi Li
        </Link>
        <nav aria-label="项目导航">
          <a href="#pudu">普渡</a>
          <a href="#autolabor">挑战杯</a>
          <a href="#huawei">华为</a>
          <Link href="/resume/">简历</Link>
        </nav>
      </header>
      <main className="shell work-page">
        <div className="work-intro">
          <p className="eyebrow">PROJECTS / FIELD NOTES</p>
          <h1>从代码到现场。</h1>
          <p>三段近期实践，附图文、演示与可继续阅读的项目记录。</p>
        </div>

        <section className="work-section" id="pudu">
          <div className="work-heading">
            <span className="eyebrow">01 / 工作实践</span>
            <h2>普渡 · 分层导航与运动规划</h2>
            <p>ROS 2 / Nav2 · C++ / Python · 3YDL3-V11-r3</p>
          </div>
          <p className="work-lead">
            围绕大地图上的运动学可行路径，连接拓扑引导、栅格搜索、局部精化与终验。公开工作区保留算法实现、固定查询记录及路径可视化，便于从同一批输入检查规划结果与运行开销。
          </p>
          <div className="work-stats">
            <div>
              <strong>300/300</strong>
              <span>终点验收规则内成功 · 297 精确 + 3 容差</span>
            </div>
            <div>
              <strong>0.816 s</strong>
              <span>地图与服务就绪后，300 次请求耗时中位数</span>
            </div>
            <div>
              <strong>3.657 s</strong>
              <span>同批首次导航请求耗时 P95</span>
            </div>
          </div>
          <Photo
            src="/media/pudu-overview.png"
            alt="V11-r3 十图首次导航耗时与整树 RSS 箱线图"
            caption="V11-r3 十图首次导航耗时与整树 RSS 分布，每图 30 次，共 300 次，含 3 次授权容差成功；时间轴为对数坐标。"
          />
          <div className="work-gallery">
            <div className="work-text-card">
              <h3>十图、300 次首次请求</h3>
              <p>
                每张地图 10 个固定任务、3 轮重复。297 次精确到达；另外 3
                次为同一任务允许终点朝向 +5° 的容差回退，位置及起点朝向不变。
              </p>
              <p className="scope-note">
                计时包含请求中的失败尝试、恢复、各层规划、地图同步、ACK、终验和返回前堆回收；不含地图加载、初始化、启动与请求后导出。整进程树
                RSS 峰值的中位数为 990.39 MiB。
              </p>
            </div>
            <div className="work-text-card">
              <h3>工作重点</h3>
              <ul>
                <li>将区域／拓扑路径与运动学约束规划连接为完整流程。</li>
                <li>
                  保留精确到达与容差到达的区分，记录全流程耗时和整树内存。
                </li>
                <li>
                  整理静态规划与指定受控事件回放，提供图文、代码和原始结果入口。
                </li>
              </ul>
              <p className="scope-note">
                V11-r3
                数据来自静态完整规划实验；指定受控事件回放有独立记录。上述结果不代表实车验收。旧版
                V5-r11 实验另存于主页历史实验区。
              </p>
            </div>
          </div>
          <div className="project-links">
            <a
              href="https://github.com/Doribelove/pudu_robot_ws"
              target="_blank"
              rel="noreferrer"
            >
              公开工作区与最新记录 <ArrowUpRight size={16} />
            </a>
            <Link href="/#experiments">V5-r11 历史实验 ↗</Link>
          </div>
        </section>

        <section className="work-section" id="autolabor">
          <div className="work-heading">
            <span className="eyebrow">02 / 竞赛实战</span>
            <h2>净途智行 · 地平线挑战杯</h2>
            <p>J6M + Jetson · ROS Noetic · 无人清扫车</p>
          </div>
          <p className="work-lead">
            将机器人导航、垃圾感知与清扫任务接入同一套实车系统。定位支持
            FAST-LIO / ICP 或双天线 GNSS；覆盖与转场采用条带规划、Hybrid A* 和
            TEB，并集成 YOLO11s-GAM、语音和 Qt 任务交互。
          </p>
          <div className="work-gallery">
            <Photo
              src="/media/autolabor-robot.jpg"
              alt="净途智行无人清扫车实物"
              caption="实车平台：传感器、计算设备与清扫执行机构集成。"
            />
            <Photo
              src="/media/autolabor-airport.jpg"
              alt="无人清扫车在机场试验场景中运行"
              caption="机场场景实车记录，来自挑战杯项目材料。"
            />
          </div>
          <figure className="work-video">
            <video
              controls
              playsInline
              preload="none"
              poster="/media/autolabor-demo-poster.jpg"
              aria-label="净途智行实车垃圾刷扫收集演示"
            >
              <source src="/media/autolabor-demo.mp4" type="video/mp4" />
              <track
                kind="captions"
                src="/media/autolabor-demo-zh.vtt"
                srcLang="zh"
                label="中文说明"
                default
              />
              浏览器不支持视频播放，请使用下方下载链接。
            </video>
            <figcaption>
              实车垃圾刷扫与收集 · 正常速度 20.5 秒节选，无音轨。
              <a href="/media/autolabor-demo.mp4" download>
                下载视频 ↗
              </a>
            </figcaption>
          </figure>
          <div className="work-stats">
            <div>
              <strong>160 m²</strong>
              <span>实际轨迹覆盖面积 · 选定区域 163.3 m²</span>
            </div>
            <div>
              <strong>98.0%</strong>
              <span>该场景导航覆盖率</span>
            </div>
            <div>
              <strong>约 140.3 s</strong>
              <span>正常倍速视频计时</span>
            </div>
          </div>
          <p className="scope-note">
            指标来自挑战杯技术报告 v7
            的该次导航覆盖记录，当时清扫机构未接入，不代表垃圾清除率。上方短视频展示刷扫收集，与覆盖计时视频是不同记录。
          </p>
          <div className="work-gallery three">
            <Photo
              src="/media/autolabor-hardware.jpg"
              alt="J6M 与 Jetson 及传感器硬件集成"
              caption="硬件与接口集成。"
            />
            <Photo
              src="/media/autolabor-coverage.jpg"
              alt="机场导航覆盖进度：160.0/163.3 平方米，98.0%"
              caption="导航覆盖记录：清扫机构未接入。"
            />
            <Photo
              src="/media/autolabor-console.jpg"
              alt="机器人任务交互和调试界面"
              caption="任务交互与调试界面。"
            />
          </div>
          <div className="project-links">
            <a
              href="https://github.com/Doribelove/autolabor-robot-nav/tree/robot_j6m_ws"
              target="_blank"
              rel="noreferrer"
            >
              robot_j6m_ws 项目源码 <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        <section className="work-section" id="huawei">
          <div className="work-heading">
            <span className="eyebrow">03 / 多模态检索问答</span>
            <h2>不二鸟 · 华为存储杯 MRAG</h2>
            <p>r58 · Transformers / Qwen3-VL-8B · BGE-M3 / BGE reranker</p>
          </div>
          <p className="work-lead">
            面向 PDF 的文本、表格与图像问答，构建来源导入、检索重排、Reader
            和支持检查流程。将模型回答与原文证据绑定，证据不足时保留拒答，并适配赛事建库及
            question-only HTTP 查询接口。
          </p>
          <Photo
            src="/media/huawei-pipeline.png"
            alt="r58 多模态检索问答系统流程图"
            caption="来源导入 → 检索与重排 → Reader → 证据支持检查与回答。"
          />
          <div className="work-stats">
            <div>
              <strong>26/30</strong>
              <span>历史开发集 · 本地同模型判分</span>
            </div>
            <div>
              <strong>25/30</strong>
              <span>同作者审阅 · 原文完全支持</span>
            </div>
            <div>
              <strong>r58</strong>
              <span>已提交版本的公开源码与真实案例</span>
            </div>
          </div>
          <p className="scope-note">
            30
            题结果属于历史开发记录，非独立留出测试或官方比赛成绩；原文审阅另有 1
            题覆盖不完整、4 题拒答。2026-10-15 单文档新建库与 HTTP
            查询冒烟记录单独保留。
          </p>
          <Photo
            src="/media/huawei-http-log.png"
            alt="r58 真实 HTTP 问题与回答记录的阅读图"
            caption="真实输入与输出的日志阅读图，并非运行界面截图。完整原值、来源和验证范围见仓库。"
          />
          <div className="project-links">
            <a
              href="https://github.com/Doribelove/huawei-storage-cup-mrag"
              target="_blank"
              rel="noreferrer"
            >
              源码、真实案例与验证记录 <ArrowUpRight size={16} />
            </a>
            <a
              href="https://github.com/Doribelove/huawei-storage-cup-mrag/blob/main/docs/DESIGN.md"
              target="_blank"
              rel="noreferrer"
            >
              系统设计与局限 <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer shell">
        <div>
          <Link href="/">← 返回主页</Link>
          <Link href="/resume/">查看简历 ↗</Link>
        </div>
      </footer>
    </>
  );
}
