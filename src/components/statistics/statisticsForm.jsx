import { StatisticList } from './statisticList'
export function Statistics({ title = false, stats }) {
  return (
    <section className="statistics">
      {title ? <h2 className="title">Upload stats</h2> : ''}
      <StatisticList stat={stats} />
    </section>
  )
}

