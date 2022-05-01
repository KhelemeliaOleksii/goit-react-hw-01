import noImageAvailable from './no-image-available.png'
import styles from './css/description.module.css'

export const Description = ({ username, tag, location, avatar = noImageAvailable}) => {
    const descrStyle = [styles.description];
    const avatarStyle = [styles.avatar];
    const nameStyle = [styles.name]

    return (
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
    )
}
