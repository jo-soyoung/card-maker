import React, { useRef } from 'react';
import styles from './card_edit_form.module.css';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';

const CardEditForm = ({ card, updateCard, deleteCard }) => {
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

  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmit = () => {
    deleteCard(card);
  };

  const onChange = e => {
    if (e.currentTarget == null) {
      return;
    }
    e.preventDefault();
    updateCard({ ...card, [e.currentTarget.name]: e.currentTarget.value });
  };

  return (
    <li>
      <form className={styles.form} ref={formRef}>
        <input
          ref={nameRef}
          className={styles.input}
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={onChange}
        />
        <input
          ref={companyRef}
          className={styles.input}
          type="text"
          name="company"
          value={company}
          placeholder="Company"
          onChange={onChange}
        />
        <select
          className={styles.select}
          ref={themeRef}
          name="theme"
          value={theme}
          onChange={onChange}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="colorful">Colorful</option>
        </select>
        <input
          ref={titleRef}
          className={styles.input}
          type="text"
          name="title"
          value={title}
          placeholder="Title"
          onChange={onChange}
        />
        <input
          ref={emailRef}
          className={styles.input}
          type="text"
          name="email"
          value={email}
          placeholder="Email"
          onChange={onChange}
        />
        <textarea
          ref={messageRef}
          className={styles.textarea}
          name="message"
          value={message}
          placeholder="Message"
          onChange={onChange}
        />
        <div className={styles.fileInput}>
          <ImageFileInput />
        </div>
        <Button name="Delete" onClick={onSubmit} />
      </form>
    </li>
  );
};

export default CardEditForm;
