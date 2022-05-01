import { Description } from "./description";
import { Stats } from "./stats";
import styles from './css/profile.module.css';

export const Profile = (user) => {
    const cardStyle = [styles.profile];
    return (
        <div className={cardStyle.join(' ')}>
            <Description  {...user} />
            <Stats {...user} />
        </div>
    )
}
