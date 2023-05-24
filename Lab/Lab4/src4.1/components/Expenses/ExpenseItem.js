import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = props => {
  // khi click nút "Change Title" thì sẽ thay đổi giá trị của State này sang giá trị mới.
  const [title, setTitle] = useState(props.title);
  const changeTitleHandler = () => {
    setTitle('Update!');
  };
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button className='btn' onClick={changeTitleHandler}>
        Change Title
      </button>
    </Card>
  );
};

export default ExpenseItem;
