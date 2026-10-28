import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export const featuredProjects = [
  {
    id: 'pudu',
    name: '普渡 · 分层导航与运动规划',
    category: '工作实践 / ROS 2 · Nav2',
    image: '/media/pudu-overview.png',
    alt: '普渡 V11-r3 十图导航耗时和整进程树内存分布图',
    summary:
      '基于 ROS 2 / Nav2 构建大地图分层导航，连接拓扑选路、参考路径、运动学搜索与轨迹校验，完成规划性能优化与多场景测试。',
    href: 'https://github.com/Doribelove/pudu_robot_ws',
    tags: 'C++ · Python · Hybrid A* · 性能优化',
  },
  {
    id: 'autolabor',
    name: '净途智行 · 国产无人清扫车系统',
    category: '地平线挑战杯 / J6M + AGX',
    image: '/media/autolabor-airport-vehicle.jpg',
    alt: '净途智行重新装配后的无人清扫车在机场机坪测试',
    summary:
      '以 J6M + AGX 连接感知、规划、交互与清扫执行。在机场机坪与滑行道开展四时段测试，取得 24 次回收成功、12 次避障成功。',
    href: 'https://github.com/Doribelove/autolabor-robot-nav/tree/robot_j6m_ws',
    tags: 'FAST-LIO / GNSS · Hybrid A* / TEB · BEV · Qwen',
  },
  {
    id: 'drone',
    name: '多旋翼无人机 · 自主导航与视觉抓取',
    category: '飞行平台与自主作业 / 省级一等奖',
    image: '/media/drone-simulation-poster.jpg',
    alt: '无人机视觉导航仿真中的门框检测与飞行画面',
    summary:
      '完成 PX4、MAVROS、Jetson 与 ROS 集成，结合 EGO-Planner、YOLOv8 和视觉伺服实现自主导航、抓取与定点投放。载荷超过 1.5 kg、续航超过 20 分钟，获省级一等奖。',
    href: null,
    tags: 'PX4 · MAVROS · Jetson · EGO-Planner · YOLOv8',
  },
  {
    id: 'cube',
    name: '魔方机器人 · 双臂视觉复原',
    category: '机器人竞赛 / 国家级二等奖',
    image: '/media/cube-demo-poster.jpg',
    alt: '双臂魔方机器人执行实体魔方复原',
    summary:
      '四路视觉识别、Two-Phase 求解与双臂协同执行，7 秒完成识别、解算和还原。获 2024 年中国高校智能机器人创意大赛国家级二等奖，总排名 9/55。',
    href: 'https://github.com/Doribelove/robot_mofang',
    tags: 'Python · OpenCV · Two-Phase · ODrive · Arduino',
  },
  {
    id: 'huawei',
    name: '不二鸟 · 华为存储杯 MRAG',
    category: '多模态检索问答 / r58',
    image: '/media/huawei-pipeline.png',
    alt: '华为存储杯 r58 多模态检索问答的证据处理流程',
    summary:
      '从 PDF 文本、表格与图像检索证据，组合 BGE-M3、重排器与 Qwen3-VL，实现多模态问答、答案溯源、证据支持检查和拒答处理。',
    href: 'https://github.com/Doribelove/huawei-storage-cup-mrag',
    tags: 'Python · Transformers · Qwen3-VL · BGE-M3',
  },
];

export default function FeaturedProjects() {
  return (
    <div className="featured-grid">
      {featuredProjects.map((project, index) => (
        <article className="featured-card" key={project.id}>
          <Link className="featured-image" href={`/projects/#${project.id}`}>
            <Image
              unoptimized
              src={project.image}
              alt={project.alt}
              width={960}
              height={600}
              loading="lazy"
            />
          </Link>
          <div className="featured-copy">
            <p className="kicker">
              0{index + 1} / {project.category}
            </p>
            <h3>{project.name}</h3>
            <p>{project.summary}</p>
            <p className="project-tags">{project.tags}</p>
            <div className="project-links">
              <Link href={`/projects/#${project.id}`}>
                图文与演示 <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
              {project.href && <a href={project.href} target="_blank" rel="noreferrer">
                源码 <ArrowUpRight size={15} aria-hidden="true" />
              </a>}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
