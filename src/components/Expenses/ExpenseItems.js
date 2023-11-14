import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  const deleteHandler = ()=>{
    let deleted = document.getElementsByClassName('expense-item');
    deleted.remove();
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>

      <button onClick={deleteHandler}>Delete expense</button>
    </Card>

  );
}

export default ExpenseItem;