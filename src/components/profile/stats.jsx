export const Stats = ({ username, stats }) => {
    return (
        <ul className="stats">
            {stats.map((item) => {
                return (
                    <li key={username + '-' + item.key}>
                        <span className="label">{item.key}</span>
                        <span className="quantity">{item.value}</span>
                    </li>
                )
            })}
        </ul>
    )
}