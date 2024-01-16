import React, { ReactNode } from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  customClass?: string;
  children: ReactNode;
}

function Container(props: ContainerProps) {
  const customClass = props.customClass ? styles[props.customClass] : '';

  return (
    <div className={`${styles.container} ${customClass}`}>
      {props.children}
    </div>
  );
}

export default Container;
