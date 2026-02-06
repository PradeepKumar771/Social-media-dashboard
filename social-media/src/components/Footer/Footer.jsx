import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <a href="#about">About</a>
          <a href="#help">Help</a>
          <a href="#press">Press</a>
          <a href="#api">API</a>
          <a href="#jobs">Jobs</a>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>
        <div className={styles.copyright}>
          © {currentYear} InstaClone. Built with React
        </div>
      </div>
    </footer>
  );
};

export default Footer;