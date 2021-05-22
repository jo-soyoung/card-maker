import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = memo(props => (
  <footer className={styles.footer}>
    <span>Code your dream</span>
  </footer>
));

export default Footer;
