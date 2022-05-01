import { StatisticList } from './statisticList'
import styles from './css/form.module.css'
export function Statistics({ title = false, stats }) {
  const statisticsFormStyle = [styles.form]
  const titleStyle = [styles.title];
  return (
    <section className={statisticsFormStyle.join(' ')}>
      {title ? <h2 className={titleStyle.join(' ')}>Upload stats</h2> : ''}
      <StatisticList stat={stats} />
    </section>
  )
}

