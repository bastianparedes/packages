import React from 'react';

import Footer from '../Footer';
import styles from './styles.module.scss';

interface props {
  children?: React.ReactNode;
}

const Body = ({ children }: props): JSX.Element => {
  return (
    <>
      <div className={styles.body}>{children}</div>
      <Footer />
    </>
  );
};

export { Body };
export default Body;
