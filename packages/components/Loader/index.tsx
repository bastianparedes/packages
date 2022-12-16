import React from 'react';

import Shadow from '../Shadow';
import styles from './styles.module.scss';

const Loader = (): JSX.Element => {
  return (
    <Shadow modes={['blur']}>
      <div className={styles.wrapper}>
        <div className={styles.boxWrap}>
          <div className={`${styles.box} ${styles.one}`} />
          <div className={`${styles.box} ${styles.two}`} />
          <div className={`${styles.box} ${styles.three}`} />
          <div className={`${styles.box} ${styles.four}`} />
          <div className={`${styles.box} ${styles.five}`} />
          <div className={`${styles.box} ${styles.six}`} />
        </div>
      </div>
    </Shadow>
  );
};

export { Loader };
export default Loader;
