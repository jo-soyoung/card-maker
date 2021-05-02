import React from 'react';
import styles from './login.module.css';

const Login = props => {
  return (
    <section className={styles.login}>
      <h2>Login</h2>
      <ul className={styles.loginBtns}>
        <li>
          <button>Google</button>
        </li>
        <li>
          <button>Facebook</button>
        </li>
        <li>
          <button>GitHub</button>
        </li>
      </ul>
    </section>
  );
};

export default Login;
