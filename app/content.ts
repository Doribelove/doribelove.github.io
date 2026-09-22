export const updatedOn = '2026.09.22';
export const github = 'https://github.com/Doribelove';
export const email = 'doribelove@gmail.com';

export const contributions = [
  {
    project: 'PyData / Sparse',
    number: 963,
    title: '修复零维 COO / DOK 数组构造与转换',
    detail: '55 项回归用例；覆盖标量与空数据转换。',
    href: 'https://github.com/pydata/sparse/pull/963',
  },
  {
    project: 'PyData / Sparse',
    number: 957,
    title: '避免 GCXS 切片分配稠密列选择器',
    detail: '收敛大尺寸稀疏数组切片的内存开销。',
    href: 'https://github.com/pydata/sparse/pull/957',
  },
  {
    project: 'Robotics Toolbox',
    number: 669,
    title: '数值逆运动学保留关节类型与限位',
    detail: '修正 Python / C++ 路径，覆盖旋转与移动关节。',
    href: 'https://github.com/petercorke/robotics-toolbox-python/pull/669',
  },
  {
    project: 'pytransform3d',
    number: 373,
    title: '修复批量轴角转换的输出分配',
    detail: '处理预计算输入、整型输入与输出缓冲区兼容性。',
    href: 'https://github.com/dfki-ric/pytransform3d/pull/373',
  },
  {
    project: 'Trimesh',
    number: 2600,
    title: '修正向量对齐返回的主旋转角',
    detail: '校验几何边界与数值一致性。',
    href: 'https://github.com/mikedh/trimesh/pull/2600',
  },
  {
    project: 'Gymnasium',
    number: 1694,
    title: '修复 Tuple 空间兼容性中的长度检查',
    detail: '避免长度不同的空间被误判为兼容。',
    href: 'https://github.com/Farama-Foundation/Gymnasium/pull/1694',
  },
  {
    project: 'PettingZoo',
    number: 1457,
    title: '修复宽范围 float64 观测缩放溢出',
    detail: '保持有限边界输入的数值稳定性。',
    href: 'https://github.com/Farama-Foundation/PettingZoo/pull/1457',
  },
];

export const skills = [
  {
    title: '规划与控制',
    text: 'Nav2、Hybrid A*、Smac、TEB、覆盖规划、B 样条、MPC。',
    note: '从地图与运动学约束，到可执行路径。',
  },
  {
    title: '定位与感知',
    text: 'FAST-LIO、ICP、点云预处理、TF 坐标链、端侧视觉部署。',
    note: '连接传感器、地图与底盘坐标系。',
  },
  {
    title: '系统与验证',
    text: 'C++ / Python、ROS 1 / 2、Linux、Git、pytest、性能剖析与 CI。',
    note: '复现问题、固定对照、回归验证、上游协作。',
  },
];
