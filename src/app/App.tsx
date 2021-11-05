import React, { useState } from 'react';
import Todo from './components/Todo/Todo';
import styles from './App.module.css';
import Form from './components/Form/Form';

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
