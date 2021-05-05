import React from 'react';
import styles from './card_edit_form.module.css';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';

const CardEditForm = ({ card }) => {
  const {
    name,
    company,
    theme,
    title,
    email,
    message,
    fileName,
    fileURL,
  } = card;

  const onSubmit = () => {};

  return (
    <li>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          placeholder="Name"
        />
        <input
          className={styles.input}
          type="text"
          name="company"
          value={company}
          placeholder="Company"
        />
        <select className={styles.select} name="theme" value={theme}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="colorful">Colorful</option>
        </select>
        <input
          className={styles.input}
          type="text"
          name="title"
          value={title}
          placeholder="Title"
        />
        <input
          className={styles.input}
          type="text"
          name="email"
          value={email}
          placeholder="Email"
        />
        <textarea className={styles.textarea} name="message" value={message}  placeholder="Message" />
        <div className={styles.fileInput}>
          <ImageFileInput />
        </div>
        <Button name="Delete" onClick={onSubmit} />
      </form>
    </li>
  );
};

export default CardEditForm;
