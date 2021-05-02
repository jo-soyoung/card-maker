import React from 'react';
import styles from './login.module.css';

const Login = props => {
  return (
    <div className={styles.login}>
      <h2>Login</h2>
      <div className={styles.loginBtn}>
        <button>Google</button>
        <button>Facebook</button>
        <button>GitHub</button>
      </div>
    </div>
  );
};

export default Login;
