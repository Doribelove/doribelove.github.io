export default function DroneProject() {
  return (
    <section className="work-section" id="drone" aria-labelledby="drone-title">
      <div className="work-heading">
        <span className="eyebrow">03 / 无人机 · 2022.04–2024.10</span>
        <h2 id="drone-title">多旋翼无人机 · 自主导航与视觉抓取</h2>
        <p>PX4 / MAVROS / ROS · NVIDIA Jetson · EGO-Planner / YOLOv8 / 视觉伺服</p>
      </div>
      <p className="work-lead">
        自研四旋翼飞行平台，连接机载感知、轨迹规划与末端执行机构，
        完成障碍环境下的自主导航、柱面 QR 码识别、目标靠近、机械抓取与定点投放。
        获 2024 年第四届四川省大学生未来飞行器挑战赛实践类一等奖，
        并完成电子科技大学“科研育人”翱翔计划优秀 A 结题。
      </p>
      <div className="work-stats">
        <div><strong>&gt;1.5 kg</strong><span>平台有效载荷</span></div>
        <div><strong>&gt;20 min</strong><span>飞行续航</span></div>
        <div><strong>一等奖</strong><span>2024 年四川省未来飞行器挑战赛 · 实践类</span></div>
      </div>
      <div className="work-gallery">
        <div className="work-text-card">
          <h3>平台设计与系统集成</h3>
          <p><strong>飞行平台项目副队长 · 2022.04–2024.09</strong></p>
          <p>
            主导机架结构、动力套件与电池方案设计，完成装配、调试和试飞。
            基于 PX4 完成电控集成与参数调优，通过 MAVROS 连接飞控与 Jetson，
            在 ROS 中组织感知数据和控制指令，完成建图、定位、巡线及双机交互联调。
          </p>
        </div>
        <div className="work-text-card">
          <h3>自主规划与视觉抓取</h3>
          <p><strong>自主抓取项目队长 · 2024.08–2024.10</strong></p>
          <p>
            修改并部署 EGO-Planner，结合 YOLOv8 目标检测完成在线轨迹规划。
            开发视觉伺服，引导无人机识别柱面 QR 码并靠近目标；
            设计机械舵机抓取结构与投放逻辑，联动飞控、机载计算和末端机构完成自主作业。
          </p>
        </div>
      </div>
      <h3 className="demo-section-title">自主作业流程</h3>
      <div className="work-gallery three">
        <div className="work-text-card">
          <h3>01 · 感知与导航</h3>
          <p>YOLOv8 提供目标检测结果，EGO-Planner 生成障碍环境中的飞行轨迹，通过 ROS 与 MAVROS 衔接 PX4 执行。</p>
        </div>
        <div className="work-text-card">
          <h3>02 · 识别与靠近</h3>
          <p>识别柱面 QR 码，通过视觉伺服将图像观测转为飞行调整，引导平台靠近作业目标。</p>
        </div>
        <div className="work-text-card">
          <h3>03 · 抓取与投放</h3>
          <p>控制机械舵机执行抓取，将飞行任务与末端动作衔接，完成物资自主抓取和定点投放。</p>
        </div>
      </div>
      <h3 className="demo-section-title" id="drone-simulation">视觉导航仿真</h3>
      <p className="work-lead">
        在 ROS / RflySim 中组织视觉导航任务，根据前视相机与深度信息计算门框中心航点，
        通过下视相机识别地面 ArUco 与 H 形标记。视频展示起飞、穿越门框和地面标记识别。
      </p>
      <figure className="work-video">
        <video controls playsInline preload="none" poster="/media/drone-simulation-poster.jpg" aria-label="无人机视觉导航仿真：起飞、穿越门框与地面标记识别">
          <source src="/media/drone-simulation.mp4" type="video/mp4" />
          <track kind="captions" src="/media/drone-simulation-zh.vtt" srcLang="zh" label="中文说明" />
          浏览器不支持视频播放，请使用下方视频链接。
        </video>
        <figcaption>
          起飞、穿越门框与地面标记识别 · ROS / RflySim · 55 秒原速演示。
          <a href="/media/drone-simulation.mp4" download>下载视频 ↗</a>
        </figcaption>
      </figure>
    </section>
  );
}
