import React from 'react';
import styles from './NotFoundBlock.module.scss';

const NotFounBlock: React.FC = () => {
  return (
    <h1 className={styles.root}>
      <span>😕</span>
      <br />
      Ничего не найдено
      <p className={styles.description}>
        К сожелению эта страницица отсутвствует в нашем интернет магазине
      </p>
    </h1>
  );
};

export default NotFounBlock;
