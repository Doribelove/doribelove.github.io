import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import styles from './cube-project.module.css';

const detailPhotos = [
  { src: 'cube-dual-arm-assembly.jpg', width: 4624, height: 3468, caption: '双臂执行机构：夹爪、旋转轴与机架装配。' },
  { src: 'cube-gripper-linkage.jpg', width: 3468, height: 4624, caption: '夹爪连杆与魔方接触结构细节。' },
  { src: 'cube-vision-grip.jpg', width: 4624, height: 2608, caption: '相机与夹持机构的协同布局。' },
  { src: 'cube-arm-cad.png', width: 1748, height: 1018, caption: '双臂与夹爪的结构建模及尺寸设计。' },
];

const testVideos = [
  { file: 'cube-dual-arm-turns', title: '双臂协同转面', description: '双臂交替夹持与转腕，连续执行魔方转面动作。', width: 1280, height: 720 },
  { file: 'cube-gripper-demo', title: '夹爪转动与取放', description: '近距离展示魔方放入、夹爪旋转与完成后的取回。', width: 1280, height: 720 },
  { file: 'cube-bench-test', title: '整机实测与计时', description: '展示工作台上的上料、双臂运行、魔方取回与计时器。', width: 960, height: 544 },
];

export default function CubeProject() {
  return (
    <section className="work-section" id="cube">
      <div className="work-heading">
        <span className="eyebrow">04 / 视觉识别 · 双臂协同</span>
        <h2>魔方机器人 · 双臂视觉复原</h2>
        <p>Python / OpenCV · Two-Phase · ODrive / Arduino</p>
      </div>
      <p className="work-lead">
        构建从四路图像采集、六面颜色识别、复原公式求解到双臂执行的完整系统。
        通过机械代价优化重排动作，将求解公式转换为双腕转动与夹爪协同指令，
        完成 7 秒识别、解算与实体魔方还原。
      </p>
      <div className="work-stats">
        <div><strong>7 s</strong><span>识别 + 解算 + 成功还原</span></div>
        <div><strong>二等奖</strong><span>国家级 · 2024 年中国高校智能机器人创意大赛</span></div>
        <div><strong>9 / 55</strong><span>比赛总排名</span></div>
      </div>
      <h3 className="demo-section-title" id="cube-gallery">实物与结构</h3>
      <figure className="work-photo">
        <a href="/media/cube-hardware-overview.jpg" target="_blank" rel="noreferrer">
          <Image unoptimized src="/media/cube-hardware-overview.jpg" width={4624} height={3468} alt="魔方机器人整机结构，包含双臂夹爪、相机与驱动控制模块" loading="lazy" />
        </a>
        <figcaption>整机结构与硬件集成：双臂夹爪、相机与驱动控制。</figcaption>
      </figure>
      <div className={`work-gallery ${styles.gallery}`}>
        {detailPhotos.map((photo) => (
          <figure className="work-photo" key={photo.src}>
            <a className={styles.photoFrame} href={`/media/${photo.src}`} target="_blank" rel="noreferrer">
              <Image unoptimized src={`/media/${photo.src}`} width={photo.width} height={photo.height} alt={photo.caption} loading="lazy" />
            </a>
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
      <div className="work-gallery">
        <div className="work-text-card">
          <h3>视觉识别与求解</h3>
          <p>四路摄像头同步采集六个面，OpenCV 根据采样点与颜色阈值生成 54 位状态字符串；Two-Phase 求解复原公式，再根据机械执行代价优化动作顺序。</p>
        </div>
        <div className="work-text-card">
          <h3>双臂与夹爪控制</h3>
          <p>将魔方动作映射为左右腕与夹爪指令，通过 ODrive 控制双腕、Arduino 控制夹爪及辅助机构，衔接识别、解算和实体复原。</p>
        </div>
      </div>
      <h3 className="demo-section-title" id="cube-tests">实机动作与测试</h3>
      <div className={`demo-grid ${styles.testVideos}`}>
        {testVideos.map((demo) => (
          <figure className="work-video" key={demo.file}>
            <h4>{demo.title}</h4>
            <video controls playsInline preload="none" width={demo.width} height={demo.height} poster={`/media/${demo.file}-poster.jpg`} aria-label={`魔方机器人实机测试：${demo.title}`}>
              <source src={`/media/${demo.file}.mp4`} type="video/mp4" />
              <track kind="captions" src={`/media/${demo.file}-zh.vtt`} srcLang="zh" label="中文说明" />
              浏览器不支持视频播放，请使用下方视频链接。
            </video>
            <figcaption>
              {demo.description}
              <a href={`/media/${demo.file}.mp4`} download>下载视频 ↗</a>
            </figcaption>
          </figure>
        ))}
      </div>
      <h3 className="demo-section-title">比赛与完整演示</h3>
      <figure className="work-video cube-video">
        <video controls playsInline preload="none" poster="/media/cube-demo-poster.jpg" aria-label="魔方机器人比赛与多轮复原演示">
          <source src="/media/cube-demo.mp4" type="video/mp4" />
          <track kind="captions" src="/media/cube-demo-zh.vtt" srcLang="zh" label="中文说明" />
          浏览器不支持视频播放，请使用下方视频链接。
        </video>
        <figcaption>
          比赛获奖与多轮实体复原演示 · 完整视频 1 分 10 秒。
          <a href="/media/cube-demo.mp4" download>下载视频 ↗</a>
          <a href="https://www.bilibili.com/video/BV1haNg6fE5s/" target="_blank" rel="noreferrer">B 站原视频 ↗</a>
        </figcaption>
      </figure>
      <figure className="work-photo cube-award">
        <a href="/media/cube-award.jpg" target="_blank" rel="noreferrer">
          <Image unoptimized width={1526} height={1080} src="/media/cube-award.jpg" alt="2024 年第七届中国高校智能机器人创意大赛二等奖证书，参赛作品魔方没我们方" loading="lazy" />
        </a>
        <figcaption>2024 年第七届中国高校智能机器人创意大赛二等奖 · 参赛作品“魔方没我们方”。</figcaption>
      </figure>
      <div className="project-links">
        <a href="https://github.com/Doribelove/robot_mofang" target="_blank" rel="noreferrer">项目源码 <ArrowUpRight size={16} /></a>
        <a href="https://github.com/Doribelove/robot_mofang/blob/main/docs/architecture.md" target="_blank" rel="noreferrer">系统架构 <ArrowUpRight size={16} /></a>
      </div>
    </section>
  );
}
