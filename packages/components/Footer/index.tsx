import React from 'react';

import constants from '../constants';
import styles from './styles.module.scss';

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <span className={styles.footer__span}>{constants.FOOTER.MESSAGE}</span>
    </footer>
  );
};

export { Footer };
export default Footer;
