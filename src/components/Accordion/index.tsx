import React, { FC, useState } from 'react';
import styles from '@/components/Accordion/Accordion.module.scss';

type Props = {
  title: string,
  open: boolean,
  mainHeading: boolean
};

const Accordion: FC<Props> = ({
  title, open = true, mainHeading = true, children,
}) => {
  const [isOpen, setIsOpen] = useState(open);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.container}>
      <div
        className={`${styles.title} ${mainHeading ? styles['title--big'] : styles['title--small']}`}
        onClick={toggle}
        onKeyDown={toggle}
        tabIndex={0}
        role="button"
      >
        {title}
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      <div className={`${styles.content} ${isOpen ? styles.open : styles.close}`}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
