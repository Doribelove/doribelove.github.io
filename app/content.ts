export const updatedOn = '2026.10.27';
export const contributionsAsOf = '2026.10.16';
export const github = 'https://github.com/Doribelove';
export const email = 'doribelove@gmail.com';

export const contributions = [
  {
    project: 'Robotics Toolbox',
    number: 706,
    title: '补全 mstraj 轨迹的速度与加速度',
    detail:
      '将多段轨迹各混合段的解析速度、加速度传入返回结果，并补齐时间轨迹标记与回归测试。',
    href: 'https://github.com/petercorke/robotics-toolbox-python/pull/706',
    mergedAt: '2026-10-14T02:08:50Z',
  },
  {
    project: 'SpatialMath',
    number: 233,
    title: '修复 Python 3.10 的 Self 类型依赖',
    detail:
      '为 typing_extensions 设置支持 Self 的最低版本，修复可安装但无法导入 spatialmath 的依赖组合。',
    href: 'https://github.com/rai-opensource/spatialmath-python/pull/233',
    mergedAt: '2026-10-13T17:08:04Z',
  },
  {
    project: 'SpatialMath',
    number: 224,
    title: '修复三维直线距离计算',
    detail:
      '修正平行、相交和异面直线的距离，以及非单位方向缩放导致的错误；补充数值与几何回归验证。',
    href: 'https://github.com/rai-opensource/spatialmath-python/pull/224',
    mergedAt: '2026-10-13T17:06:48Z',
  },
  {
    project: 'Pint',
    number: 2422,
    title: '修复可变位置参数的单位换算',
    detail:
      '让 UnitRegistry.wraps 按函数签名转换每个 *args 元素，覆盖空参数、默认值与关键字专用参数。',
    href: 'https://github.com/hgrecco/pint/pull/2422',
    mergedAt: '2026-10-11T10:06:02Z',
  },
  {
    project: 'PyData / Sparse',
    number: 987,
    title: '补充 where 填充值传播说明',
    detail:
      '用可执行示例解释比较与 np.where 如何传播 COO 填充值，澄清隐式零与 NaN 的行为。',
    href: 'https://github.com/pydata/sparse/pull/987',
    mergedAt: '2026-10-09T09:12:17Z',
  },
  {
    project: 'Finch Tensor',
    number: 686,
    title: '修复失效的公开导出',
    detail:
      '清理 __all__ 中不存在及重复的名称，恢复通配导入和 Sparse 的 Finch 后端导入。',
    href: 'https://github.com/finch-tensor/finch-tensor/pull/686',
    mergedAt: '2026-10-07T12:04:36Z',
  },
  {
    project: 'PyData / Sparse',
    number: 964,
    title: '为 COO.flatten 添加列优先顺序',
    detail:
      "在稀疏坐标上实现 order='F'，保留填充值并覆盖标量、空数组、缓存和大逻辑形状。",
    href: 'https://github.com/pydata/sparse/pull/964',
    mergedAt: '2026-10-07T11:37:04Z',
  },
  {
    project: 'PyData / Sparse',
    number: 967,
    title: '说明 COO 索引类型的容量要求',
    detail:
      '补充 idx_dtype 文档，解释 from_numpy 的中间展平索引需要容纳输入总大小。',
    href: 'https://github.com/pydata/sparse/pull/967',
    mergedAt: '2026-10-07T11:34:37Z',
  },
  {
    project: 'PyData / Sparse',
    number: 968,
    title: '补充 GCXS 格式与压缩轴说明',
    detail: '完善文档首页，说明 GCXS 压缩轴与二维 CSR、CSC 布局的对应关系。',
    href: 'https://github.com/pydata/sparse/pull/968',
    mergedAt: '2026-10-07T11:33:51Z',
  },
  {
    project: 'Gymnasium',
    number: 1695,
    title: '保留离散空间批处理的整数范围',
    detail:
      '修复有符号与无符号 dtype 混用造成的 start/count 溢出，并明确无法无损提升时的错误。',
    href: 'https://github.com/Farama-Foundation/Gymnasium/pull/1695',
    mergedAt: '2026-10-06T09:26:16Z',
  },
  {
    project: 'pytransform3d',
    number: 382,
    title: '修复整数轴角的批量归一化',
    detail:
      '对整数与布尔输入使用浮点结果，避免截断和原地转换错误，同时保留浮点精度。',
    href: 'https://github.com/dfki-ric/pytransform3d/pull/382',
    mergedAt: '2026-10-02T07:02:02Z',
  },
  {
    project: 'PettingZoo',
    number: 1489,
    title: '为动作裁剪包装器支持 Parallel API',
    detail:
      '扩展 ClipOutOfBoundsWrapper，同时支持 AEC 与 Parallel 环境，保留各自接口与每个智能体的动作边界。',
    href: 'https://github.com/Farama-Foundation/PettingZoo/pull/1489',
    mergedAt: '2026-10-02T05:14:24Z',
  },
  {
    project: 'GitHub / Spec Kit',
    number: 4726,
    title: '支持精确选择扩展目录版本',
    detail:
      '增加扩展历史版本查询与精确安装，沿用获胜目录来源和摘要校验，覆盖版本解析及异常路径。',
    href: 'https://github.com/github/spec-kit/pull/4726',
    mergedAt: '2026-09-30T14:04:55Z',
  },
  {
    project: 'pytransform3d',
    number: 381,
    title: '修复批量向量归一化的整数截断',
    detail:
      '为整数与布尔向量分配浮点输出，保留已有浮点 dtype 和显式 out 缓冲区行为。',
    href: 'https://github.com/dfki-ric/pytransform3d/pull/381',
    mergedAt: '2026-09-30T09:41:58Z',
  },
  {
    project: 'Trimesh',
    number: 2610,
    title: '处理重合三角形顶点的最近点查询',
    detail: '将退化三角形按线段或点处理，消除重合顶点导致的除零和 NaN。',
    href: 'https://github.com/mikedh/trimesh/pull/2610',
    mergedAt: '2026-09-29T23:45:30Z',
  },
  {
    project: 'pytransform3d',
    number: 378,
    title: '保留旋转对数映射中的微小角度',
    detail:
      '以 atan2 结合迹与反对称部分计算批量旋转角，避免接近零时 arccos 丢失精度。',
    href: 'https://github.com/dfki-ric/pytransform3d/pull/378',
    mergedAt: '2026-09-29T07:34:15Z',
  },
  {
    project: 'Trimesh',
    number: 2606,
    title: '修复 32 位平台的曲率计算',
    detail:
      '在 Rtree 查询路径中使用原生整数宽度的 repeat 计数，并覆盖批量、回退及空邻域。',
    href: 'https://github.com/mikedh/trimesh/pull/2606',
    mergedAt: '2026-09-27T15:48:26Z',
  },
  {
    project: 'PyData / Sparse',
    number: 963,
    title: '保留稀疏转换中的零维数组',
    detail:
      '修复标量 COO/DOK 转换和空坐标输入，避免零维构造中的索引类型与 nonzero 错误。',
    href: 'https://github.com/pydata/sparse/pull/963',
    mergedAt: '2026-09-22T07:11:14Z',
  },
  {
    project: 'PettingZoo',
    number: 1457,
    title: '修复大范围观测值重缩放',
    detail:
      '避免有限 float64 边界跨度溢出，稳定处理 AEC 与 Parallel 环境中的观测值映射。',
    href: 'https://github.com/Farama-Foundation/PettingZoo/pull/1457',
    mergedAt: '2026-09-17T19:52:43Z',
  },
  {
    project: 'Gymnasium',
    number: 1694,
    title: '修复 Tuple 空间长度兼容性检查',
    detail:
      '先检查 Tuple 长度再逐项比较，避免错误接受前缀空间或反向比较触发越界。',
    href: 'https://github.com/Farama-Foundation/Gymnasium/pull/1694',
    mergedAt: '2026-09-15T09:30:08Z',
  },
  {
    project: 'PyData / Sparse',
    number: 957,
    title: '减少 GCXS 基本切片的巨量临时分配',
    detail:
      '对宽列选择过滤已有稀疏项，避免构建庞大的笛卡尔列索引，并保留高级索引行为。',
    href: 'https://github.com/pydata/sparse/pull/957',
    mergedAt: '2026-09-15T06:05:36Z',
  },
  {
    project: 'Trimesh',
    number: 2600,
    title: '修复向量对齐返回的旋转角',
    detail: '更正 align_vectors 的角度计算，使反向向量返回 π，并加入回归验证。',
    href: 'https://github.com/mikedh/trimesh/pull/2600',
    mergedAt: '2026-09-14T18:58:34Z',
  },
  {
    project: 'Robotics Toolbox',
    number: 669,
    title: '在数值逆运动学中保留关节类型与限位',
    detail:
      '修正 Python 与 C++ 求解器收敛后的关节归一化，避免平移关节被当作角度折返，保留多圈旋转限位。',
    href: 'https://github.com/petercorke/robotics-toolbox-python/pull/669',
    mergedAt: '2026-09-14T13:56:06Z',
  },
  {
    project: 'pytransform3d',
    number: 373,
    title: '修复无输出缓冲区的批量轴角转换',
    detail:
      '按广播结果分配旋转矩阵输出，支持预计算轴角及列表输入，修复整数归一化与缺失参数处理。',
    href: 'https://github.com/dfki-ric/pytransform3d/pull/373',
    mergedAt: '2026-09-14T05:44:40Z',
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

export const contributionProjectCount = new Set(
  contributions.map((item) =>
    new URL(item.href).pathname.split('/').slice(1, 3).join('/'),
  ),
).size;
