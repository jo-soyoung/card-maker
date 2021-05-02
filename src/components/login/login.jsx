import React from 'react';
import styles from './login.module.css';

const Login = ({ authService }) => {
  const onLogin = e => {
    authService
      .login(e.currentTarget.textContent) //
      .then(console.log);
  };

  return (
    <section className={styles.login}>
      <h2>Login</h2>
      <ul className={styles.loginBtns}>
        <li>
          <button onClick={onLogin}>Google</button>
        </li>
        <li>
          <button onClick={onLogin}>Github</button>
        </li>
      </ul>
    </section>
  );
};

export default Login;
