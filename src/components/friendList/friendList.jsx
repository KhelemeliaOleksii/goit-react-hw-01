import { FriendItem } from './friendItem'
import styles from './css/friendList.module.css'
export const FriendList = ({ friends }) => {
    const listStyle = [styles["friend-list"]];
    return (
        <ul className={listStyle.join(' ')}>
            {
                friends.map((item) => {
                    return <FriendItem key={item.id.toString()} friendItem={item} />
                }
                )
            }
        </ul>
    )
} 
