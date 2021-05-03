import React, { useEffect } from 'react';
import styles from './home.module.css';
import Header from '../header/header';
import Maker from '../maker/maker';
import Footer from '../footer/footer';
import { useHistory } from 'react-router-dom';

const Home = ({ authService }) => {
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

  return (
    <div className={styles.home}>
      <Header onLogout={onLogout} />
      <Maker />
      <Footer />
    </div>
  );
};

export default Home;
