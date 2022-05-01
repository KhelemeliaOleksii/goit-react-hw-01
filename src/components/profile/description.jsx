export const Description = ({ username, tag, location, avatar }) => {
    // console.log(username);
    return (
        <div className="description">
            <img
                src={avatar}
                alt="User avatar"
                className="avatar"
            />
            <p className="name">{username}</p>
            <p className="tag">@{tag}</p>
            <p className="location">{location.city}, {location.country}</p>
        </div>
    )
}
