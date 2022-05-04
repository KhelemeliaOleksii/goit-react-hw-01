import styles from './table.module.css'

import PropTypes from 'prop-types';

export function TransactionHistory({ items }) {
    const tableStyles = [styles.table];

    return (
        <table className={tableStyles}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map(({ id, type, amount, currency }) => {
                        return (
                            <tr key={id}>
                                <td>{type}</td>
                                <td>{amount}</td>
                                <td>{currency}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table >
    )
}

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