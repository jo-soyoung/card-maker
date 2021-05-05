import React from 'react';
import styles from './editor.module.css';
import CardEditForm from '../card_edit_form/card_edit_form';

const Editor = ({ cards }) => (
  <div className={styles.editor}>
    <h1 className={styles.title}>Card Editor</h1>
    {cards.map(card => (
      <CardEditForm card={card} key={card.id} />
    ))}
  </div>
);

export default Editor;
