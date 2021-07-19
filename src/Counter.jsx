import { createSignal, createEffect } from 'solid-js';

const fibonacci = (num) => {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

const Counter = () => {
  const [count, setCount] = createSignal(0);
  console.log("Main:count = " + count());
  
  createEffect(() => {
    console.log("createEffect:count = " + count());
  });

  const calcCount = () => {
    console.log("calcCount:count = " + count());
    return count() + 1 - 2;
  }

  return <div>
    COUNTER = {count()}
    <br />
    <button onClick={() => setCount(c => c+1)}>
      Count {count()}
    </button>
    <br />
    CALCCOUNT = {calcCount()}
  </div>;
}

export default Counter;
