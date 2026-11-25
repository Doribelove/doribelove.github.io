import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import AutolaborDemos from '../autolabor-demos';
import AirportDemos from '../airport-demos';
import CubeProject from '../cube-project';
import DroneProject from '../drone-project';
import EmbodiedProjects from '../embodied-projects';
import { planner } from '../planner';

export const metadata: Metadata = {
  title: '核心完整项目与演示 · YongQi Li',
  description:
    '机器人实机与仿真演示：机场清扫、车端任务解析、机械臂操作、双臂魔方复原、无人机抓取与分层导航。',
  alternates: { canonical: '/projects/' },
};

const photoSizes: Record<string, [number, number]> = {
  '/media/autolabor-airport-field.jpg': [1600, 900],
  '/media/autolabor-airport-vehicle.jpg': [1600, 900],
  '/media/autolabor-coverage.jpg': [1800, 944],
  '/media/huawei-http-log.png': [1400, 1160],
  '/media/huawei-pipeline.png': [1400, 780],
  '/media/vehicle-task-parsing.png': [960, 720],
  '/media/vehicle-task-complete.png': [960, 720],
  [planner.figure]: [1600, 1000],
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
          ← YongQi Li
        </Link>
        <nav className="project-nav" aria-label="项目导航">
          <a href="#layered-planner">路径规划</a>
          <a href="#autolabor">挑战杯</a>
          <a href="#drone">无人机</a>
          <a href="#cube">魔方</a>
          <a href="#huawei">华为</a>
          <a href="#embodied">具身操作</a>
          <Link href="/resume/">简历</Link>
        </nav>
      </header>
      <main className="shell work-page">
        <div className="work-intro">
          <p className="eyebrow">CORE PROJECTS / DEMOS</p>
          <h1>核心完整项目</h1>
          <p>查看机器人导航、清扫车、无人机、机械臂与多模态问答的项目成果、实机视频和仿真实验。</p>
        </div>

        <section className="work-section" id="layered-planner">
          <div className="work-heading">
            <span className="eyebrow">01 / 移动机器人导航</span>
            <h2>三层全局路径规划器</h2>
            <p>ROS 2 / Nav2 · C++ / Python</p>
          </div>
          <p className="work-lead">
            规划器先根据道路拓扑和通行规则选择走廊，在走廊内搜索参考路径。通行条件变化时，增量 D* 更新参考路径。
            最后一层以三次 B 样条优化整条路线，并结合车体尺寸、转弯曲率、交通规则和 Nav2 代价地图校验结果。
          </p>
          <div className="work-stats">
            <div>
              <strong>300/300</strong>
              <span>静态规划成功 · 297 次精确到达，3 次容差到达</span>
            </div>
            <div>
              <strong>{planner.medianSeconds} s</strong>
              <span>首次规划请求耗时中位数</span>
            </div>
            <div>
              <strong>{planner.p95Seconds} s</strong>
              <span>同批请求耗时 P95</span>
            </div>
          </div>
          <Photo
            src={planner.figure}
            alt="各配置规划成功数与有效测量数。完整流程 100/100，关闭拓扑搜索 66/100，关闭参考路径搜索 46/100，关闭曲线优化 0/99。"
            caption="分层对照让每种配置各运行同一组 100 个任务。关闭曲线优化时，另有 1 次在测试框架复位阶段失败。"
          />
          <div className="work-gallery">
            <div className="work-text-card">
              <h3>十张地图上的静态测试</h3>
              <p>
                每张地图选取 10 个固定任务，各运行 3 轮。地图与服务就绪后开始计时，直到完成路径校验并返回结果，
                期间的恢复和代价地图确认也计入耗时。每次请求的进程树峰值内存（RSS）中位数为 {planner.medianPeakMiB} MiB。
              </p>
            </div>
            <div className="work-text-card">
              <h3>三层分别起什么作用？</h3>
              <p>
                在独立的分层对照中，完整流程完成全部 100 个任务。关闭拓扑搜索后完成 66 个，关闭参考路径搜索后完成 46 个。
                关闭曲线优化后的 99 次有效测量中，没有路径通过最终校验。
              </p>
            </div>
          </div>
          <div className="project-links">
            <Link href="/#experiments">查看耗时与内存统计 ↗</Link>
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
            <a href="#autolabor-hardware">查看整车细节 ↓</a>
            <a href="#autolabor-field">查看机场实车测试 ↓</a>
            <a href="#autolabor-demos">查看系统与场景演示 ↓</a>
            <a href="#huawei-vehicle">车端任务解析实车回放 ↓</a>
          </div>
          <h3 className="demo-section-title" id="autolabor-hardware">整车细节</h3>
          <figure className="work-video">
            <video controls playsInline preload="none" poster="/media/autolabor-hardware-poster.jpg" aria-labelledby="autolabor-hardware">
              <source src="/media/autolabor-hardware.mp4" type="video/mp4" />
              <track kind="captions" src="/media/autolabor-hardware-zh.vtt" srcLang="zh" label="中文画面说明" />
            </video>
            <figcaption>
              环绕展示四轮底盘与清扫机构，近看相机、车顶传感器及其安装位置。
              <a href="/media/autolabor-hardware.mp4" download>下载视频 ↗</a>
            </figcaption>
          </figure>
          <h3 className="demo-section-title" id="autolabor-field">机场实车测试</h3>
          <p className="demo-group-intro">
            2026 年 10 月 13–17 日，重新装配后的车辆在机坪与滑行道开展回收和避障测试，覆盖黎明、白天、黄昏与夜晚。
          </p>
          <div className="work-stats">
            <div><strong>24 次</strong><span>回收测试成功</span></div>
            <div><strong>12 次</strong><span>避障测试成功</span></div>
            <div><strong>4 个时段</strong><span>黎明 · 白天 · 黄昏 · 夜晚</span></div>
          </div>
          <div className="work-gallery">
            <Photo
              src="/media/autolabor-airport-vehicle.jpg"
              alt="重新装配后的净途智行无人清扫车在机场机坪上的近景"
              caption="机场测试车辆：定位与感知设备、计算平台和清扫机构。"
            />
            <Photo
              src="/media/autolabor-airport-field.jpg"
              alt="无人清扫车在航站楼前的机坪开展测试"
              caption="航站楼前的机坪实车测试。"
            />
          </div>
          <AirportDemos />
          <h3 className="demo-section-title">区域覆盖导航</h3>
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
          <Photo
            src="/media/autolabor-coverage.jpg"
            alt="机场导航覆盖进度：160.0/163.3 平方米，98.0%"
            caption="机场场景导航覆盖：160.0 / 163.3 m²，覆盖率 98.0%。"
          />
          <AutolaborDemos />
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

        <DroneProject />

        <CubeProject />

        <section className="work-section" id="huawei">
          <div className="work-heading">
            <span className="eyebrow">05 / 多模态检索问答</span>
            <h2>不二鸟 · 华为存储杯 MRAG</h2>
            <p>r58 · Transformers / Qwen3-VL-8B · BGE-M3 / BGE reranker</p>
          </div>
          <p className="work-lead">
            面向 PDF 的文本、表格与图像问答，构建来源导入、检索重排、Reader
            和支持检查流程。将模型回答与原文证据绑定，按证据支持情况生成回答或拒答，并适配赛事建库及
            question-only HTTP 查询接口。
          </p>
          <div className="project-links">
            <a href="#huawei-vehicle">观看车端任务解析实车回放 ↓</a>
          </div>
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
          <h3 className="demo-section-title" id="huawei-vehicle">车端应用 · 自然语言清扫任务解析</h3>
          <p className="demo-group-intro">
            净途智行无人车在 Jetson AGX 上运行本地模型，将一条 2 × 10 m 区域清扫指令拆成六步。
            车辆依次准备区域、开启清扫盘、执行覆盖、关闭清扫盘、收杆并返回起点。
          </p>
          <div className="work-gallery">
            <Photo
              src="/media/vehicle-task-parsing.png"
              alt="任务解析界面列出六个待执行步骤，进度为 0/6；左侧显示车辆在地图中的起始位置"
              caption="1:17 · 模型解析清扫指令，右侧列出六个待执行步骤。"
            />
            <Photo
              src="/media/vehicle-task-complete.png"
              alt="车辆返回起点，六个步骤全部打勾，地图上显示本次覆盖轨迹"
              caption="4:49 · 车辆返回起点，六步全部完成，地图保留本次清扫轨迹。"
            />
          </div>
          <figure className="work-video">
            <video controls playsInline preload="none" poster="/media/vehicle-task-parsing.png" aria-label="无人车本地任务解析与清扫执行全程回放">
              <source src="/media/vehicle-task-replay.mp4" type="video/mp4" />
              <track kind="captions" src="/media/vehicle-task-replay-zh.vtt" srcLang="zh" label="中文画面说明" />
            </video>
            <figcaption>
              4 分 54 秒实车回放 · 同步查看任务回执、点云、行驶轨迹和前视相机。
              <a href="/media/vehicle-task-replay.mp4" download>下载视频 ↗</a>
            </figcaption>
          </figure>
        </section>

        <EmbodiedProjects />
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
