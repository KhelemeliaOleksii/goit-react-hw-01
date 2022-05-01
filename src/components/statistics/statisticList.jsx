import styles from './css/list.module.css'
export function StatisticList({ stat }) {
    const listStyle = [styles.list];
    const itemStyle = [styles.item];
    const labelStyle = [styles.label];
    const percentageStyle = [styles.percentage];
    // itemStyle.push({"background-color" : getRandomColor})
    return (
        <ul className={listStyle.join(' ')}>
            {
                stat.map(({label, percentage}) => {
                    return (
                        <li className={itemStyle.join(' ')} key={label} style={{backgroundColor : getRandomColor()}}>
                            <span className={labelStyle.join(' ')}>{label}</span>
                            <span className={percentageStyle.join(' ')}>{percentage}%</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}

function getRandomColor () {
    return ("#"+ Math.floor(Math.random()*16777215).toString(16));
}