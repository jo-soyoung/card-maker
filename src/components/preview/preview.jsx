import React from 'react';
import styles from './preview.module.css';
import Card from '../card/card';

const Preview = ({ cards }) => {
  return (
    <div className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.cards}>
        {cards.map(card => (
          <Card card={card} key={card.id} />
        ))}
      </ul>
    </div>
  );
};

export default Preview;