import React, { useEffect, useState, useCallback } from 'react';
import styles from './home.module.css';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import Footer from '../footer/footer';
import { useHistory } from 'react-router-dom';

const Home = ({ FileInput, authService, cardRepository }) => {
  const history = useHistory();
  const historyState = history?.location?.state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, cards => {
      setCards(cards);
    });
    return () => stopSync();
  }, [cardRepository, userId]);

  useEffect(() => {
    authService.onAuthChange(user => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push('/');
      }
    });
  }, [authService, history]);

  const addOrUpdateCard = card => {
    setCards(cards => {
      const updatedCard = { ...cards };
      updatedCard[card.id] = card;
      return updatedCard;
    });
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = card => {
    setCards(cards => {
      const updatedCard = { ...cards };
      delete updatedCard[card.id];
      return updatedCard;
    });
    cardRepository.removeCard(userId, card);
  };

  return (
    <div className={styles.home}>
      <Header onLogout={onLogout} />

      <main className={styles.main}>
        <Editor
          FileInput={FileInput}
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
