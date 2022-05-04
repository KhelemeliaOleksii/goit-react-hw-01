import styles from './form.module.css'
export function Statistics({ title = "", stats }) {
  const statisticsFormStyle = [styles.form]
  const titleStyle = [styles.title];
  const listStyle = [styles.list];
  const itemStyle = [styles.item];
  const labelStyle = [styles.label];
  const percentageStyle = [styles.percentage];
  return (
    <section className={statisticsFormStyle.join(' ')}>
      {title ? <h2 className={titleStyle.join(' ')}>Upload stats</h2> : ''}
      <ul className={listStyle.join(' ')}>
            {
                stats.map(({label, percentage}) => {
                    return (
                        <li className={itemStyle.join(' ')} key={label} style={{backgroundColor : getRandomColor()}}>
                            <span className={labelStyle.join(' ')}>{label}</span>
                            <span className={percentageStyle.join(' ')}>{percentage}%</span>
                        </li>
                    )
                })
            }
        </ul>
    </section>
  )
}


function getRandomColor () {
  return ("#"+ Math.floor(Math.random()*16777215).toString(16));
}

