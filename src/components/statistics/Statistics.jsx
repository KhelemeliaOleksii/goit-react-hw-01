import styles from './form.module.css';

import PropTypes from 'prop-types';

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

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  )
}

function getRandomColor () {
  return ("#"+ Math.floor(Math.random()*16777215).toString(16));
}

