const airportVideos = [
  {
    file: 'autolabor-airport-day',
    title: '白天机坪 · 回收测试',
    description: '航站楼前的实车行进与回收测试，展示重新装配后的车辆及清扫机构。',
  },
  {
    file: 'autolabor-airport-dusk',
    title: '黄昏机坪 · 回收测试',
    description: '黄昏光照下的机坪测试，展示车辆接近作业位置与转向过程。',
  },
  {
    file: 'autolabor-airport-obstacle',
    title: '机坪避障 · 实车视角',
    description: '车辆接近纸箱障碍物，调整路径绕过障碍后继续行进。',
  },
  {
    file: 'autolabor-airport-telemetry',
    title: '同次避障 · 数据同步回放',
    description: '同步展示运行轨迹、前视相机、实际与指令速度、点云和局部代价图。',
  },
];

export default function AirportDemos() {
  return (
    <div className="demo-grid airport-video-grid">
      {airportVideos.map((video) => (
        <figure className="work-video" key={video.file}>
          <h4>{video.title}</h4>
          <video
            controls
            playsInline
            preload="none"
            poster={`/media/${video.file}-poster.jpg`}
            aria-label={`净途智行机场测试：${video.title}`}
          >
            <source src={`/media/${video.file}.mp4`} type="video/mp4" />
            <track kind="captions" src={`/media/${video.file}-zh.vtt`} srcLang="zh" label="中文说明" />
            浏览器不支持视频播放，请使用下方视频链接。
          </video>
          <figcaption>
            {video.description}
            <a href={`/media/${video.file}.mp4`} download>下载视频 ↗</a>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
