
import './ExpenseItem.css';

const locationOfExpenditure = 'london'

function ExpenseItem(props) {
    return (
      <div className="expense-item">
        <div>Expense Items</div>
        <div className="expense-item__description">
              <h2>{props.title}</h2>
              <div className="expense-item__price">{props.amount}</div>
        </div>

        <h1>{locationOfExpenditure}</h1>
      </div>
    );
  }
  
  export default ExpenseItem;