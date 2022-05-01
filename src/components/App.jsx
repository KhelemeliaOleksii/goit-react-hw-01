import {Profile} from './profile/profile'
import userJSON from "./profile/user.json"
import PropTypes from 'prop-types';

export const App = () => {
  return (
    <Profile {...userJSON} />
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username : PropTypes.string,
    tag : PropTypes.string,
    location : PropTypes.shape({
      city : PropTypes.string,
      country : PropTypes.string,
    }), 
    avatar : PropTypes.string,
    stats : PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ])
  }),
}


