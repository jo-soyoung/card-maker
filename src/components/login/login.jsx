import React, { useEffect } from 'react';
import styles from './login.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useHistory } from 'react-router-dom';

const Login = ({ authService }) => {
  const history = useHistory();

  const goToApp = userId => {
    history.push({
      pathname: '/home',
      state: { id: userId },
    });
  };

  const onLogin = e => {
    authService
      .login(e.currentTarget.textContent) //
      .then(data => goToApp(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      user && goToApp(user.uid);
    });
  });

  return (
    <section className={styles.login}>
      <Header />
      <h2>Login</h2>
      <ul className={styles.loginBtns}>
        <li>
          <button onClick={onLogin}>Google</button>
        </li>
        <li>
          <button onClick={onLogin}>Github</button>
        </li>
      </ul>
      <Footer />
    </section>
  );
};

export default Login;
