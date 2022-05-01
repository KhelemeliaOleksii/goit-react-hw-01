import PropTypes from 'prop-types';

import { Profile } from './profile/profile';
import userJSON from "./profile/user.json";

import { FriendList } from './friendList/friendList';
import friends from './friendList/friends.json';

import { Statistics } from './statistics/statisticsForm';
import data from './statistics/data.json'

import { TransactionHistory } from './transactionHistory/transactionHistory'
import transactions from './transactionHistory/transactions.json'

export const App = () => {
  return (
    <>
      <Profile {...userJSON} />
      <FriendList friends={friends} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <TransactionHistory items={transactions} />
    </>
  );


};


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.shape({
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }).isRequired
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

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  )
}

// "id": "a4a98b0e-b22c-438b-9f83-de2df52110c8",
// "type": "invoice",
// "amount": "725.03",
// "currency": "UYU UYI"
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  )
}