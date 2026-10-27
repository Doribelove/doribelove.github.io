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
    name: '净途智行 · 地平线挑战杯',
    category: '竞赛实战 / J6M + Jetson',
    image: '/media/autolabor-robot.jpg',
    alt: '净途智行无人清扫车实物与传感器平台',
    summary:
      '面向机场环境开发无人清扫车，打通定位、覆盖规划、局部避障、垃圾识别和任务交互，完成双机平台与清扫机构集成及实车作业。',
    href: 'https://github.com/Doribelove/autolabor-robot-nav/tree/robot_j6m_ws',
    tags: 'FAST-LIO / GNSS · Hybrid A* · TEB · YOLO',
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
              <a href={project.href} target="_blank" rel="noreferrer">
                源码 <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
