'use client';

import { useState } from 'react';

const metrics = [
  {
    name: '峰值内存',
    baseline: 3.779,
    current: 2.451,
    unit: 'GiB',
    improvement: '35.2',
    note: '查询进程与 ROS 子进程的 RSS 合计峰值。',
  },
  {
    name: '总体耗时',
    baseline: 1.418,
    current: 1.178,
    unit: 's',
    improvement: '17.0',
    note: '30 次查询墙钟耗时的中位数。',
  },
  {
    name: 'P95 耗时',
    baseline: 7.077,
    current: 5.85,
    unit: 's',
    improvement: '17.3',
    note: '同一固定查询集的第 95 百分位耗时。',
  },
];

export default function Benchmark() {
  const [selected, setSelected] = useState(0);
  const metric = metrics[selected];

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
          <span>{metric.name}降低</span>
          <strong>
            {metric.improvement}
            <small>%</small>
            <span aria-hidden="true"> ↘︎</span>
          </strong>
        </div>
        <div className="comparison-row">
          <div>
            <span>r10 · 同环境对照</span>
            <b>
              {metric.baseline.toFixed(3)} <small>{metric.unit}</small>
            </b>
          </div>
          <div className="bar-track">
            <div className="bar baseline" style={{ width: '100%' }} />
          </div>
        </div>
        <div className="comparison-row">
          <div>
            <span>r11 · A+B</span>
            <b>
              {metric.current.toFixed(3)} <small>{metric.unit}</small>
            </b>
          </div>
          <div className="bar-track">
            <div
              className="bar current"
              style={{ width: `${(metric.current / metric.baseline) * 100}%` }}
            />
          </div>
        </div>
        <p className="chart-note">{metric.note}</p>
      </div>
    </div>
  );
}
