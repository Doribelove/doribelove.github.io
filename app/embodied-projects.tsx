import Image from 'next/image';

export default function EmbodiedProjects() {
  return (
    <section className="work-section" id="embodied">
      <div className="work-heading">
        <h2>具身智能 · 机械臂操作</h2>
      </div>

      <h3 className="demo-section-title" id="piper">PiPER 六轴机械臂按电梯按钮</h3>
      <p className="work-lead">
        团队用 PiPER 在候梯厅按下呼梯键、点亮指示灯，进入轿厢后调整末端姿态，按下楼层键。
        通过 ROS 2 采集主相机、腕部相机与关节反馈，将观测和语言指令送入视觉语言动作模型（VLA），
        再将返回的动作序列转换为关节指令。
      </p>
      <figure className="work-photo">
        <Image
          src="/media/piper-gazebo.png"
          alt="Gazebo 的灰色网格上，六轴 PiPER 机械臂向前伸出夹爪"
          width={1559}
          height={914}
          unoptimized
        />
        <figcaption>
          PiPER ROS 仿真包的 Gazebo 场景。{' '}
          <a href="https://github.com/Doribelove/robot_arm-main/blob/18509b1e326da5e489ce491f70c97e2a73b0a9c4/piper_ros/asserts/pictures/piper_gazebo.png" target="_blank" rel="noreferrer">仓库原图</a>
          {' · '}<a href="/media/piper-gazebo-license.txt" target="_blank" rel="noreferrer">MIT 许可</a>
        </figcaption>
      </figure>
      <div className="project-links">
        <a href="https://github.com/Doribelove/robot_arm-main" target="_blank" rel="noreferrer">实机控制源码 ↗</a>
        <a href="https://github.com/Doribelove/robot_arm-main/tree/main/piper_ros/src/piper_sim" target="_blank" rel="noreferrer">Gazebo 与 MuJoCo 仿真 ↗</a>
      </div>

      <h3 className="demo-section-title" id="wall-x">WALL-OSS-0.5 双臂桌面操作</h3>
      <p className="work-lead">
        在 RTX 5090 上将 WALL-OSS-0.5 接入 Isaac Sim 的 EX001 双臂。模型读取机头和右腕图像、机器人状态与任务指令，
        输出右手的位置修正量。任务控制器根据物体位姿协调双手，完成抓取、对准和释放。
        定向擦板任务中，机械臂擦除了指定的 8 处标记，并保留另外 6 处。
      </p>
      <figure className="work-video">
        <video width={1280} height={540} style={{ height: 'auto' }} controls playsInline preload="none"
          poster="/media/wall-x-usb-insertion.jpg" aria-labelledby="wall-x-usb-caption">
          <source src="/media/wall-x-usb-insertion.mp4" type="video/mp4" />
          <track kind="captions" src="/media/wall-x-usb-insertion-zh.vtt" srcLang="zh" label="中文画面说明" />
        </video>
        <figcaption id="wall-x-usb-caption">
          USB 插接仿真，约 18 秒。双臂分别持件，对准后插入 9.56 mm。双手依次松开后，插接保持 3.20 秒。
        </figcaption>
      </figure>
      <div className="project-links">
        <a href="https://github.com/Doribelove/wall-x/tree/main/examples/isaac_sim" target="_blank" rel="noreferrer">控制源码与五项任务录像 ↗</a>
        <a href="https://github.com/Doribelove/wall-x/blob/main/examples/isaac_sim/evidence/results.json" target="_blank" rel="noreferrer">仿真测量结果 ↗</a>
      </div>
    </section>
  );
}
