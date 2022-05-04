import { Profile } from './profile/profile';
import userJSON from "./profile/user.json";

import { FriendList } from './friendList/friendList';
import friends from './friendList/friends.json';

import { Statistics } from './statistics/Statistics';
import data from './statistics/data.json';

import { TransactionHistory } from './transactionHistory/transactionHistory';
import transactions from './transactionHistory/transactions.json';

export const App = () => {
  return (
    <>
      <Profile {...userJSON} />
      <FriendList friends={friends} />
      <Statistics title={"Upload stats"} stats={data} />
      <Statistics stats={data} />
      <TransactionHistory items={transactions} />
    </>
  );
};
