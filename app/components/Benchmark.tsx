import { Fragment } from 'react';
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
  return (
    <fieldset className="benchmark">
      <legend className="sr-only">选择实验指标</legend>
      {metrics.map((metric, index) => {
        const id = `benchmark-${metric.field}`;
        const scale = Math.max(r3[metric.field], p6[metric.field]);
        return (
          <Fragment key={metric.field}>
            <input
              className="metric-choice sr-only"
              id={id}
              type="radio"
              name="planning-metric"
              defaultChecked={index === 0}
              aria-controls={`${id}-result`}
            />
            <label className="metric-label" htmlFor={id} style={{ gridColumn: index + 1 }}>
              {metric.name}
            </label>
            <div id={`${id}-result`} className="benchmark-result">
              <div className="benchmark-head">
                <span>P6 · {metric.label}</span>
                <strong>
                  {p6[metric.field].toFixed(metric.digits)} <small>{metric.unit}</small>
                </strong>
              </div>
              {[r3, p6].map((release) => (
                <div className="comparison-row" key={release.version}>
                  <div>
                    <span>{release.version}</span>
                    <b>
                      {release[metric.field].toFixed(metric.digits)} <small>{metric.unit}</small>
                    </b>
                  </div>
                  <div className="bar-track">
                    <div
                      className={release === p6 ? 'bar current' : 'bar baseline'}
                      style={{ width: `${(release[metric.field] / scale) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
              <p className="chart-note">{metric.note}</p>
            </div>
          </Fragment>
        );
      })}
    </fieldset>
  );
}
