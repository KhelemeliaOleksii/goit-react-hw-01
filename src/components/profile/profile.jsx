import styles from './profile.module.css';

export const Profile = ({avatar, location, username, tag, stats}) => {
    const cardStyle = [styles.profile];
    const descrStyle = [styles.description];
    const avatarStyle = [styles.avatar];
    const nameStyle = [styles.name]
    const listStyle = [styles.list];
    const itemStyle = [styles.item];
    const labelStyle = [styles.label];
    const quantityStyle = [styles.quantity];
    return (
        <div className={cardStyle.join(' ')}>
            <div className={descrStyle.join(' ')}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={avatarStyle.join(' ')}
                />
                <p className={nameStyle.join(' ')}>{username}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location.city}, {location.country}</p>
            </div>
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
        </div>
    )
}
