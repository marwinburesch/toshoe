import React, { useState } from 'react';
import Todo from './components/Todo/Todo';
import styles from './App.module.css';
import Form from './components/Form/Form';
import Counter from './components/Counter/Counter';

function App(): JSX.Element {
  const [todos, setTodos] = useState([
    {
      title: 'Polish shoes',
      description: 'All shoes in the cabinet next to the apartment door',
      isDone: true,
    },
    {
      title: 'Sell the old Air Jordans 1',
      description: 'I never wear them anyway',
      isDone: false,
    },
    {
      title: 'Buy new laces',
      description: 'Colors: Neon green, hotpink and Gouda',
      isDone: false,
    },
    {
      title: 'Retie the white sneakers',
      description: "I'm tired of falling on my face",
      isDone: false,
    },
  ]);

  // <number> is a generic in TS
  const [count, setCount] = useState<number>(0);

  function decrement() {
    if (count <= 0) {
      alert('not allowed!');
      return;
    }
    setCount(count - 1);
  }

  function handleSubmit(todo: {
    title: string;
    description: string;
    isDone: boolean;
  }) {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  }

  return (
    <div className={styles.appContainer}>
      <Counter
        count={count}
        onDecrementClick={decrement}
        onIncrementClick={() => setCount(count + 1)}
      />
      <Form onSubmit={handleSubmit} />
      {todos.map((todo) => (
        <Todo
          title={todo.title}
          description={todo.description}
          isDone={todo.isDone}
        />
      ))}
    </div>
  );
}

export default App;
