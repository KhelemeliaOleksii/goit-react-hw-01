import { TransactionHistoryTableHeader } from './transactionHistoryTableHeader'
import { TransactionHistoryTableBody} from './transactionHistoryTableBody'

export function TransactionHistory({items}) {
    return (
        <table className="transaction-history">
            <TransactionHistoryTableHeader />
            <TransactionHistoryTableBody data = {items}/>
        </table >
    )
}