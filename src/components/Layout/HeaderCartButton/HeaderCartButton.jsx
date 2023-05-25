import React from 'react';
import styles from './HeaderCartButton.module.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
const HeaderCartButton = ({ onClick }) => {
  // const [btnIs,set btnIs]=useState();
  return (
    <button className={`${styles.button} ${styles.bump}`} onClick={onClick}>
      <span className={styles.icon}>
        <AiOutlineShoppingCart />
      </span>
      <span> Your Cart</span>
      <span className={styles.badge}>{}</span>
    </button>
  );
};

export default HeaderCartButton;
