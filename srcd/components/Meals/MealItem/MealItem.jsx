import React from 'react';
import styles from './MealItem.module.css';

import MealItemForm from './MealItemForm';
const MealItem = ({ item }) => {
  return (
    <div className={styles.meal}>
      <div>
        <h3>{item.name}</h3>
        <p className={styles.description}> {item.description} </p>
        <div className={styles.price}>${item.price}</div>
      </div>
      <MealItemForm />
    </div>
  );
};
export default MealItem;
