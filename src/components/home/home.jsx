import React, { useEffect, useState } from 'react';
import styles from './home.module.css';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import Footer from '../footer/footer';
import { useHistory } from 'react-router-dom';

const Home = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'Soyoung',
      company: 'Google',
      theme: 'light',
      title: 'Software Engineer',
      email: 'soyoung@gmail.com',
      message: 'Go for it',
      fileName: 'soyoung',
      fileURL: null,
    },
    2: {
      id: '2',
      name: 'Anna',
      company: 'Google',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'soyoung@gmail.com',
      message: 'Do not limit yourself',
      fileName: 'No file',
      fileURL: 'dsfsdf',
    },
    3: {
      id: '3',
      name: 'Paul',
      company: 'Google',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'soyoung@gmail.com',
      message: 'One day or day one, it is your choice.',
      fileName: 'paul',
      fileURL: null,
    },
  });

  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push('/');
      }
    });
  });

  const addOrUpdateCard = card => {
    setCards(cards => {
      const updatedCard = { ...cards };
      updatedCard[card.id] = card;
      return updatedCard;
    });
  };

  const deleteCard = card => {
    setCards(cards => {
      const updatedCard = { ...cards };
      delete updatedCard[card.id];
      return updatedCard;
    });
  };

  return (
    <div className={styles.home}>
      <Header onLogout={onLogout} />

      <main className={styles.main}>
        <Editor
          cards={cards}
          addCard={addOrUpdateCard}
          updateCard={addOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
