import styles from './css/friendItem.module.css'
export function FriendItem({ friendItem }) {
  const { avatar, name, isOnline } = friendItem;
  const itemStyle = [styles["item"]];
  const spanStyle = isOnline ? styles.active : styles.passive;
  return (
    <li className={itemStyle} >
      <span className={spanStyle}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  )
} 
