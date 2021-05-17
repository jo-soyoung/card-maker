import React, { useRef } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ imgUploader, name, onFileChange }) => {
  const inputRef = useRef();

  const onBtnClick = e => {
    e.preventDefault();
    inputRef.current.click();
  };

  const onChange = async e => {
    // console.log(e.target.files[0]);
    const uploaded = await imgUploader.uploader(e.target.files[0]);
    // console.log(uploaded);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
        className={styles.input}
      />
      <button className={styles.button} onClick={onBtnClick}>
        {name || 'No file'}
      </button>
    </div>
  );
};

export default ImageFileInput;
