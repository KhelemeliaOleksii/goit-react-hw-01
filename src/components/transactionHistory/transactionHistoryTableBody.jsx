export function TransactionHistoryTableBody({ data }) {
    return (
        <tbody>
            {
                data.map(({id, type, amount, currency}) => {
                    return (
                        <tr key = {id}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    )
                })
            }
        </tbody>

    )
}