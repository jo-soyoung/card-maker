import React, { useRef } from 'react';
import styles from './card_add_form.module.css';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';

const CardAddForm = ({ addCard }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmit = e => {
    e.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: '',
      fileURL: '',
    };
    addCard(card);
    formRef.current.reset();
  };

  return (
    <li>
      <form className={styles.form} ref={formRef}>
        <input
          ref={nameRef}
          className={styles.input}
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          ref={companyRef}
          className={styles.input}
          type="text"
          name="company"
          placeholder="Company"
        />
        <select className={styles.select} ref={themeRef} name="theme">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="colorful">Colorful</option>
        </select>
        <input
          ref={titleRef}
          className={styles.input}
          type="text"
          name="title"
          placeholder="Title"
        />
        <input
          ref={emailRef}
          className={styles.input}
          type="text"
          name="email"
          placeholder="Email"
        />
        <textarea
          ref={messageRef}
          className={styles.textarea}
          name="message"
          placeholder="Message"
        />
        <div className={styles.fileInput}>
          <ImageFileInput />
        </div>
        <Button name="Add" onClick={onSubmit} />
      </form>
    </li>
  );
};

export default CardAddForm;