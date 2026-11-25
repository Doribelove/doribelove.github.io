'use client';

import { useState } from 'react';
import { p6, r3 } from '../pudu';

const metrics = [
  {
    name: '峰值内存',
    field: 'medianPeakMiB',
    label: '峰值 RSS 中位数',
    unit: 'MiB',
    digits: 2,
    note: '先取每次请求中规划进程及其 ROS 子进程的 RSS 合计峰值，再取 300 次请求的中位数。',
  },
  {
    name: '耗时中位数',
    field: 'medianSeconds',
    label: '请求耗时中位数',
    unit: 's',
    digits: 3,
    note: '地图与服务就绪后，从发出首次规划请求到返回结果，统计 300 次请求的耗时中位数。',
  },
  {
    name: 'P95 耗时',
    field: 'p95Seconds',
    label: '请求耗时 P95',
    unit: 's',
    digits: 3,
    note: '同批 300 次首次规划请求的第 95 百分位耗时，包含请求中的恢复和最终路径校验。',
  },
] as const;

export default function Benchmark() {
  const [selected, setSelected] = useState(0);
  const metric = metrics[selected];
  const scale = Math.max(r3[metric.field], p6[metric.field]);

  return (
    <div className="benchmark">
      <fieldset className="metric-tabs">
        <legend className="sr-only">选择实验指标</legend>
        {metrics.map((item, index) => (
          <button
            key={item.name}
            type="button"
            aria-pressed={selected === index}
            onClick={() => setSelected(index)}
          >
            {item.name}
          </button>
        ))}
      </fieldset>
      <div className="benchmark-result" aria-live="polite">
        <div className="benchmark-head">
          <span>P6 · {metric.label}</span>
          <strong>
            {p6[metric.field].toFixed(metric.digits)} <small>{metric.unit}</small>
          </strong>
        </div>
        <div className="comparison-row">
          <div>
            <span>{r3.version}</span>
            <b>
              {r3[metric.field].toFixed(metric.digits)} <small>{metric.unit}</small>
            </b>
          </div>
          <div className="bar-track">
            <div
              className="bar baseline"
              style={{ width: `${(r3[metric.field] / scale) * 100}%` }}
            />
          </div>
        </div>
        <div className="comparison-row">
          <div>
            <span>{p6.version}</span>
            <b>
              {p6[metric.field].toFixed(metric.digits)} <small>{metric.unit}</small>
            </b>
          </div>
          <div className="bar-track">
            <div
              className="bar current"
              style={{ width: `${(p6[metric.field] / scale) * 100}%` }}
            />
          </div>
        </div>
        <p className="chart-note">{metric.note}</p>
      </div>
    </div>
  );
}
