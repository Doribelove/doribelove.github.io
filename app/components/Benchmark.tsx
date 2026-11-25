import { Fragment } from 'react';
import { planner } from '../planner';

const metrics = [
  {
    id: 'duration',
    name: '请求耗时',
    median: planner.medianSeconds,
    p95: planner.p95Seconds,
    digits: 3,
    unit: 's',
    note: '从地图与服务就绪后发出请求计时，直到返回规划结果。统计包含请求中的恢复和路径校验。',
  },
  {
    id: 'memory',
    name: '进程树峰值内存',
    median: planner.medianPeakMiB,
    p95: planner.p95PeakMiB,
    digits: 2,
    unit: 'MiB',
    note: '每次请求先取规划进程及其 ROS 子进程的 RSS 合计峰值，再对 300 次请求统计中位数和 P95。',
  },
];

export default function Benchmark() {
  return (
    <fieldset className="benchmark">
      <legend className="sr-only">选择实验指标</legend>
      {metrics.map((metric, index) => {
        const id = `benchmark-${metric.id}`;
        return (
          <Fragment key={metric.id}>
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
                <span>{metric.name}中位数</span>
                <strong>
                  {metric.median.toFixed(metric.digits)} <small>{metric.unit}</small>
                </strong>
              </div>
              {[
                { label: '中位数', value: metric.median, bar: 'baseline' },
                { label: 'P95', value: metric.p95, bar: 'current' },
              ].map(({ label, value, bar }) => (
                <div className="comparison-row" key={label}>
                  <div>
                    <span>{label}</span>
                    <b>
                      {value.toFixed(metric.digits)} <small>{metric.unit}</small>
                    </b>
                  </div>
                  <div className="bar-track">
                    <div
                      className={`bar ${bar}`}
                      style={{ width: `${(value / metric.p95) * 100}%` }}
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
