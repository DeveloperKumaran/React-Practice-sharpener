
import './ExpenseItem.css';

function ExpenseItem() {
    return (
      <div className="expense-item">
        <div>Expense Items</div>
        <div className="expense-item__description">
              <h2>car insurance</h2>
              <div className="expense-item__price">$400.00</div>
        </div>
      </div>
    );
  }
  
  export default ExpenseItem;