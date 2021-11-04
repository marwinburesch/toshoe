import React from 'react';
import styles from './Todo.module.css';

type TodoProps = {
  title: string;
  description: string;
};

export default function Todo({ title, description }: TodoProps): JSX.Element {
  return (
    <article className={styles.todo}>
      <h2 className={styles.title}>{title}</h2>
      <p>{description}</p>
    </article>
  );
}
