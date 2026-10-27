import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import AutolaborDemos from '../autolabor-demos';

export const metadata: Metadata = {
  title: '核心完整项目与演示 · 李永祺',
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
          <p className="eyebrow">CORE PROJECTS / DEMOS</p>
          <h1>核心完整项目</h1>
          <p>机器人导航、实车清扫与多模态问答：项目成果、现场演示与源码。</p>
        </div>

        <section className="work-section" id="pudu">
          <div className="work-heading">
            <span className="eyebrow">01 / 工作实践</span>
            <h2>普渡 · 分层导航与运动规划</h2>
            <p>ROS 2 / Nav2 · C++ / Python · 3YDL3-V11-r3 静态规划测试</p>
          </div>
          <p className="work-lead">
            围绕大地图上的运动学可行路径，连接拓扑引导、栅格搜索、局部精化与终验，输出路径可视化、请求耗时统计和整进程树内存分析。
          </p>
          <div className="work-stats">
            <div>
              <strong>300/300</strong>
              <span>规划成功 · 297 次精确到达 + 3 次容差到达</span>
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
            caption="V11-r3 十图首次导航耗时与整树 RSS 分布，每图 30 次，共 300 次；297 次精确到达、3 次容差到达，时间轴为对数坐标。"
          />
          <div className="work-gallery">
            <div className="work-text-card">
              <h3>十图、300 次首次请求</h3>
              <p>
                每张地图 10 个固定任务、3 轮重复。297 次精确到达；另外 3
                次为同一任务允许终点朝向 +5° 的容差回退，位置及起点朝向不变。
              </p>
              <p className="scope-note">
                以地图与服务就绪后的导航请求为计时起点，统计各层规划、地图同步、ACK、恢复、终验及返回前堆回收的完整请求耗时。整进程树
                RSS 峰值的中位数为 990.39 MiB。
              </p>
            </div>
            <div className="work-text-card">
              <h3>工作重点</h3>
              <ul>
                <li>将区域／拓扑路径与运动学约束规划连接为完整流程。</li>
                <li>
                  统计终点位置与朝向误差、完整请求耗时和整进程树内存。
                </li>
                <li>
                  完成静态规划测试与指定受控事件回放，提供路径图、源码和实验结果。
                </li>
              </ul>
            </div>
          </div>
          <div className="project-links">
            <a
              href="https://github.com/Doribelove/pudu_robot_ws"
              target="_blank"
              rel="noreferrer"
            >
              项目源码与实验结果 <ArrowUpRight size={16} />
            </a>
            <Link href="/#experiments">V5-r11 对照实验 ↗</Link>
          </div>
        </section>

        <section className="work-section" id="autolabor">
          <div className="work-heading">
            <span className="eyebrow">02 / 地平线挑战杯 · 项目负责人</span>
            <h2>净途智行 · 国产无人清扫车系统</h2>
            <p>J6M + Jetson AGX · ROS Noetic · 感知、规划与清扫执行</p>
          </div>
          <p className="work-lead">
            面向智慧环卫，将任务输入、场景理解、覆盖规划和清扫执行连接为完整系统。
            J6M 承担定位建图、覆盖规划、局部避障与控制仲裁，Jetson AGX
            承担模型推理、语音解析和 Qt 交互。定位支持 FAST-LIO / ICP 或双天线 GNSS，
            规划采用条带覆盖、Hybrid A* 和 TEB，配合边刷、滚刷与收集箱完成实车清扫。
          </p>
          <div className="work-gallery">
            <div className="work-text-card">
              <h3>感知与任务理解</h3>
              <p>三路广角环视与前视深度相机提供视觉观测，经畸变矫正、垃圾识别和 BEV 坐标映射生成地面目标。语音输入结合 Qwen 8B 解析任务，组织区域覆盖、定点和扫描清扫。</p>
            </div>
            <div className="work-text-card">
              <h3>规划与作业执行</h3>
              <p>结合垃圾目标分布安排作业顺序，以条带覆盖、转场规划与局部避障组织车辆行进。三维场景演示斑马线减速、靠右行驶、信号灯响应及多场景覆盖规划。</p>
            </div>
          </div>
          <div className="project-links">
            <a href="#autolabor-demos">查看系统与场景演示 ↓</a>
            <a href="#autolabor-field">查看实车清扫 ↓</a>
          </div>
          <AutolaborDemos />
          <h3 className="demo-section-title" id="autolabor-field">机场实车与清扫执行</h3>
          <div className="work-gallery">
            <Photo
              src="/media/autolabor-robot.jpg"
              alt="净途智行无人清扫车实物"
              caption="实车平台：传感器、计算设备与清扫执行机构集成。"
            />
            <Photo
              src="/media/autolabor-airport.jpg"
              alt="无人清扫车在机场试验场景中运行"
              caption="无人清扫车在机场场景开展导航测试。"
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
              实车垃圾刷扫与收集 · 正常速度 20.5 秒节选。
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
          <p className="scope-note">导航覆盖测试数据来自挑战杯技术报告 v7。</p>
          <div className="work-gallery three">
            <Photo
              src="/media/autolabor-hardware.jpg"
              alt="J6M 与 Jetson 及传感器硬件集成"
              caption="硬件与接口集成。"
            />
            <Photo
              src="/media/autolabor-coverage.jpg"
              alt="机场导航覆盖进度：160.0/163.3 平方米，98.0%"
              caption="机场场景导航覆盖：160.0 / 163.3 m²，覆盖率 98.0%。"
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
            和支持检查流程。将模型回答与原文证据绑定，按证据支持情况生成回答或拒答，并适配赛事建库及
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
              <span>30 题本地评测 · 同模型判分</span>
            </div>
            <div>
              <strong>25/30</strong>
              <span>作者审阅 · 原文完全支持</span>
            </div>
            <div>
              <strong>r58</strong>
              <span>赛事提交版本 · 源码与问答案例</span>
            </div>
          </div>
          <p className="scope-note">
            2026-10-15 完成单文档新建库与 HTTP
            查询冒烟测试。
          </p>
          <Photo
            src="/media/huawei-http-log.png"
            alt="r58 真实 HTTP 问题与回答记录的阅读图"
            caption="HTTP 查询日志：问题输入、模型回答与来源信息。"
          />
          <div className="project-links">
            <a
              href="https://github.com/Doribelove/huawei-storage-cup-mrag"
              target="_blank"
              rel="noreferrer"
            >
              源码、问答案例与测试结果 <ArrowUpRight size={16} />
            </a>
            <a
              href="https://github.com/Doribelove/huawei-storage-cup-mrag/blob/main/docs/DESIGN.md"
              target="_blank"
              rel="noreferrer"
            >
              系统设计 <ArrowUpRight size={16} />
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
