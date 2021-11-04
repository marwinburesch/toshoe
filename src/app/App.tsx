import React from 'react';
import Todo from './components/Todo/Todo';
import styles from './App.module.css';

function App(): JSX.Element {
  return (
    <div className={styles.appContainer}>
      <Todo
        title="Polish shoes"
        description="All shoes in the cabinet next to the apartment door"
        isDone={true}
      />
      <Todo
        title="Sell the old Air Jordans 1"
        description="I never wear them anyway"
        isDone={false}
      />
      <Todo
        title="Buy new laces"
        description="Colors: Neon green, hotpink and Gouda"
        isDone={false}
      />
      <Todo
        title="Retie the white sneakers"
        description="I'm tired of falling on my face"
        isDone={false}
      />
    </div>
  );
}

export default App;
