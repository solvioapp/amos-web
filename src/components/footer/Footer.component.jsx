import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => (
    <footer className={styles.footer}>
        Built with <span role="img" aria-label="love">❤</span>️ and <span role="img" aria-label="coffee">☕</span>️ by <a href="https://solvio.org">Solvio Foundation</a>.
    </footer>
);

export default Footer;
