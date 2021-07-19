import style from './Counter.css';

import { createSignal, createEffect, createMemo } from 'solid-js';

const fibonacci = (num) => {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

const Counter = () => {
  const [count, setCount] = createSignal(1);
  console.log("Main:count = " + count());
  
  // createEffect(() => {
  //   console.log("createEffect:count = " + count());
  // });

  const calcCount = () => {
    console.log("calcCount:count = " + count());
    return count() + 1 - 2 + 1;
  }

  const fib = () => {
    console.log("fibonacci:count = " + count());
    return fibonacci(count());
  }

  const fibmemo = createMemo(() => {
    console.log("fibonacci-with-memo:count = " + count());
    return fibonacci(count());
  });

  return <div>
    COUNTER = {count()}
    <br />
    CALCCOUNT = {calcCount()}
    <br /> 
    fibonacci = {fib()} {fib()} {fib()}
    <br />
    fibonacci with Memo = {fibmemo()} {fibmemo()} {fibmemo()}
    <br />
    <Show when={count()%2!=0} fallback={"COUNTER is Even"}>
    COUNTER is Odd
    </Show>
    <br />
    <br />
    <button onClick={() => setCount(c => c+1)}>
      Count {count()}
    </button>

  </div>;
}

export default Counter;
