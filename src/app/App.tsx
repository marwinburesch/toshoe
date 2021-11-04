import React from 'react';
import Todo from './components/Todo/Todo';
import styles from './App.module.css';

function App(): JSX.Element {
  return (
    <div className={styles.appContainer}>
      <Todo
        title="Polish shoes"
        description="All shoes in the cabinet next to the apartment door"
      />
      <Todo
        title="Sell the old Air Jordans 1"
        description="I never wear them anyway"
      />
      <Todo
        title="Buy new laces"
        description="Colors: Neon green, hotpink and Gouda"
      />
      <Todo
        title="Retie the white sneakers"
        description="I'm tired of falling on my face"
      />
    </div>
  );
}

export default App;
