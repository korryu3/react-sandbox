import { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

function ClickCounter({
  count,
  setCount
}: {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {/* callbackが使える(非同期処理の安全性確保のため) */}
      {/* <button onClick={() => setCount(prev => prev + 1)}>Increment</button> */}
    </div>
  );
}

function EvenOrOdd({ count }: { count: number }) {
  return (
    <div>
      <p>{ count % 2 === 0 ? "Even" : "Odd" }</p>
    </div>
  );
}

export function CounterApp() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <ClickCounter count={count} setCount={setCount} />
      <EvenOrOdd count={count} />
      <p>Current count is: {count}</p>
    </div>
  );
}

