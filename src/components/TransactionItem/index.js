// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {title, amount, type, id} = transactionDetails

  const onDelete = () => {
    deleteTransaction(id)
  }
  return (
    <li className="table-row">
      <div className="">
        <p className="transaction-text">{title}</p>
        <p className="transaction-text">{amount}</p>
        <p className="transaction-text">{type}</p>
        <div className="delete-container">
          <button
            data-testid="delete"
            type="button"
            className="delete-button"
            onClick={onDelete}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
              alt="delete"
              className="delete-btn"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default TransactionItem
