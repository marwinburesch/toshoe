import React, { useState } from 'react';

export default function Counter(): JSX.Element {
  // <number> is a generic in TS
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
