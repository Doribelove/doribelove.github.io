const demoGroups = [
  {
    id: 'semantics',
    title: '场景语义导航',
    description: '在三维场景中展示通行规则与车辆路径、速度和启停状态的联动。',
    layout: 'landscape',
    demos: [
      {
        file: 'autolabor-crosswalk',
        title: '斑马线减速',
        description: '识别横道区域，减速通过并恢复作业速度。',
      },
      {
        file: 'autolabor-keep-right',
        title: '靠右行驶',
        description: '将右侧通行约束加入规划，沿道路右侧持续行进。',
      },
      {
        file: 'autolabor-traffic-light',
        title: '信号灯响应',
        description: '依据灯色切换停车等待与继续通行状态。',
      },
    ],
  },
  {
    id: 'scenes',
    title: '多场景覆盖规划',
    description: '联动展示全局地图、覆盖轨迹、车体多视角与清扫进度。',
    layout: 'portrait',
    demos: [
      {
        file: 'autolabor-factory',
        title: '大型工厂',
        description: '在厂区通道组织接入、扫行与换行，展示覆盖轨迹和作业进度。',
      },
      {
        file: 'autolabor-parking',
        title: '地下停车场',
        description: '围绕停车区域与通道开展覆盖规划，跟踪车辆路径与清扫范围。',
      },
      {
        file: 'autolabor-mall',
        title: '商场',
        description: '在商场布局中组织区域覆盖，展示全局路线和局部行进视角。',
      },
    ],
  },
];

export default function AutolaborDemos() {
  return (
    <div className="autolabor-demos" id="autolabor-demos">
      {demoGroups.map((group) => (
        <section className="demo-group" key={group.id} aria-labelledby={`demo-${group.id}`}>
          <h3 className="demo-section-title" id={`demo-${group.id}`}>{group.title}</h3>
          <p className="demo-group-intro">{group.description}</p>
          <div className={`demo-grid demo-grid--${group.layout}`}>
            {group.demos.map((demo) => (
              <figure className="work-video" key={demo.file}>
                <h4>{demo.title}</h4>
                <video
                  controls
                  playsInline
                  preload="none"
                  poster={`/media/${demo.file}-poster.jpg`}
                  aria-label={`净途智行：${demo.title}`}
                >
                  <source src={`/media/${demo.file}.mp4`} type="video/mp4" />
                  <track
                    kind="captions"
                    src={`/media/${demo.file}-zh.vtt`}
                    srcLang="zh"
                    label="中文说明"
                  />
                  浏览器不支持视频播放，请使用下方视频链接。
                </video>
                <figcaption>
                  {demo.description}
                  <a href={`/media/${demo.file}.mp4`} download>下载视频 ↗</a>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
