import PropTypes from 'prop-types';
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

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }).isRequired
    )
}