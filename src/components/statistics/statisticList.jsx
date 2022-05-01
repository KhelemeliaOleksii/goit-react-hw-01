export function StatisticList({ stat }) {
    return (
        <ul className="stat-list">
            {
                stat.map((item) => {
                    return (
                        <li className="item" key={item.label}>
                            <span className="label">{item.label}</span>
                            <span className="percentage">{item.percentage}</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}