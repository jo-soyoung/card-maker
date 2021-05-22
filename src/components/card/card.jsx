import React from 'react';
import styles from './card.module.css';

const DEFAULT_IMAGE = './images/default_logo.png';

const Card = ({ card }) => {
  const { name, company, theme, title, email, message, fileURL } = card;

  const url = fileURL || DEFAULT_IMAGE;

  return (
    <li className={`${styles.card} ${getTheme(theme)}`}>
      <img className={styles.photo} src={url} alt="profile" />
      <div className={styles.info}>
        <div className={styles.profile}>
          <h1 className={styles.name}>{name}</h1>
          <strong className={styles.company}>{company}</strong>
        </div>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
};

const getTheme = theme => {
  switch (theme) {
    case 'dark':
      return styles.dark;
    case 'light':
      return styles.light;
    case 'colorful':
      return styles.colorful;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
};

export default Card;
