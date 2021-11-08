import React from 'react';
import styles from './Counter.module.css';

type CounterProps = {
  count: number;
  onIncrementClick: () => void;
  onDecrementClick: () => void;
};

export default function Counter({
  count,
  onDecrementClick,
  onIncrementClick,
}: CounterProps): JSX.Element {
  return (
    <div>
      <button className={styles.button} onClick={onDecrementClick}>
        -
      </button>
      {count}
      <button className={styles.button} onClick={onIncrementClick}>
        +
      </button>
    </div>
  );
}
