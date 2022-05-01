import { TransactionHistoryTableHeader } from './transactionHistoryTableHeader'
import { TransactionHistoryTableBody} from './transactionHistoryTableBody'

import styles from './css/table.module.css'
export function TransactionHistory({items}) {
    const tableStyles = [styles.table];

    return (
        <table className={tableStyles}>
            <TransactionHistoryTableHeader />
            <TransactionHistoryTableBody data = {items}/>
        </table >
    )
}