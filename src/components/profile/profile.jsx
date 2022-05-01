import { Description } from "./description";
import { Stats } from "./stats";

export const Profile = (user) => {
    return (
        <div className="profile">
            <Description  {...user} />
            <Stats {...user} />
        </div>
    )
}
