import styles from './css/stats.module.css'
export const Stats = ({ username, stats }) => {
    const listStyle = [styles.list];
    const itemStyle = [styles.item];
    const labelStyle = [styles.label];
    const quantityStyle = [styles.quantity];

    return (
        <ul className={listStyle.join(' ')}>
            {stats.map((item) => {
                return (
                    <li key={username + '-' + item.key} className={itemStyle.join(' ')}>
                        <span className={labelStyle.join(' ')}>{item.key}</span>
                        <span className={quantityStyle.join(' ')}>{item.value}</span>
                    </li>
                )
            })}
        </ul>
    )
}