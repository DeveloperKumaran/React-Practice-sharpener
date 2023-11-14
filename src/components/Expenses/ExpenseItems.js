import React ,{useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


const ExpenseItem = (props) => {

    const [price,setPrice] = useState(props.amount);
    const [title,setTitle] = useState(props.title);


  const add100 = ()=>{
             setPrice('100');
  }

  const updateTitle = ()=>{
    setTitle('Updated');
  }
  
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <button onClick={updateTitle}>updateTitle</button>
        <div className='expense-item__price'>${price}</div>
        <button onClick={add100}>change</button>
      </div>

      
    </Card>

  );
}

export default ExpenseItem;