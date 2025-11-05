import { useState } from 'react';

export default function HomePage() {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <h1>Budget tracker</h1>
      <div className="card">
        <label>Your money: {count}</label>
        <br/><br/>
        <button onClick={() => setCount((count) => count + 1)}>
          Make money by clicking here!
        </button>
        <br/><br/>
        <button onClick={() => setCount(0)}>
          Go bankrupt!
        </button>
      </div>
    </>
  );
}