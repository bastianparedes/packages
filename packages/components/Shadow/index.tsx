import React from 'react';

import { classNames } from 'bastianparedes-utils';

import styles from './styles.module.scss';

interface props {
  children?: React.ReactNode;
  setVisible?: ((boolean: boolean) => void) | null;
  modes?: string[];
}

const Shadow = ({
  children,
  setVisible = null,
  modes = ['dark']
}: props): JSX.Element => {
  const handleOnClick = (event: React.MouseEvent): void => {
    event.preventDefault();
    event.stopPropagation();

    if (setVisible === null) return;

    const target = event.target as HTMLElement;
    const classList = target.classList;
    const shadoWasClicked = classList.contains(styles.shadow);

    if (shadoWasClicked) setVisible(false);
  };

  const classNamesList = modes.map((mode) => styles[mode]);

  return (
    <div
      className={classNames(styles.shadow, ...classNamesList)}
      data-testid="data-testid-shadow"
      onClick={handleOnClick}
    >
      {children}
    </div>
  );
};

export { Shadow };
export default Shadow;
