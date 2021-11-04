import React from 'react';
import styles from './Form.module.css';

function Form(): JSX.Element {
  return (
    <form className={styles.form}>
      <label>
        Title: <input type="text" />
      </label>
      <label>
        Description: <input type="text" />
      </label>
      <input type="submit" />
    </form>
  );
}

export default Form;
